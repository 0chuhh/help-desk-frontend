import { Button, MenuItem } from "@mui/material";
import CustomInput from "component/ui/custom-input";
import api from "services/api";
import CustomSelect from "component/ui/custom-select";
import Gap from "component/ui/gap";
import Editor from "component/ui/quill-editor";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { IType } from "models/IType";
import React, { FormEvent, useCallback, useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { fetchTypes } from "store/reducers/types/ActionGetTypes";
import { IFAQ } from "models/IFAQ";
import { useNavigate } from "react-router";
import CustomFileInput from "component/ui/custom-file-input";
import FileList from "component/ui/file-list";
const CreateFAQ = () => {
  
  const navigate = useNavigate()
  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);

  const [html, setHtml] = useState<string>("");
  const [types, setTypes] = useState<IType[]>([]);
  const [selectedType, setSelectedType] = useState<unknown>('');
  const [name, setName] = useState<string>("");
  const [description, setDesription] = useState<string>("");

  const getTypes = async () => {
    const typesResponse: IType[] = await api.types.getTypes();
    setTypes(typesResponse);
  };

  const handleChangeHtml = (html: string) => {
    setHtml(html);
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDesription(event.target.value);
  };

  const handleChangeSelect = (event: SelectChangeEvent<unknown>) => {
    setSelectedType(event.target.value);
  };


   const createNewFAQ:React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const faq:IFAQ = await api.faq.postFAQ({name, description, html, type:Number(selectedType)});
    const formData = new FormData();
    droppedFiles.forEach(file => {
      formData.append("file", file) // check this out for more info: https://developer.mozilla.org/en-US/docs/Web/API/FormData/append#example
   });
   if(faq.id) await api.faq.postFAQfilesByFAQId(faq.id, formData);
  //  navigate(`/frequently-asked-questions/${faq.id}`);
    
  }


  const handleFileDrop = useCallback(
    (item: { files: any[] }) => {
      if (item) {
        const files = item.files;
        setDroppedFiles(prev=>[...prev, ...files]);
        console.log(item, "files");
      }
    },
    [setDroppedFiles]
  );

  const handleDeleteFile = (file:File)=>{
    setDroppedFiles(droppedFiles.filter(fileEl=>fileEl!==file))
  }
  
  useEffect(()=>{
    getTypes()
  },[])
  return (
    <div className="container">
      <form  onSubmit={createNewFAQ}>
      <Button type="submit" variant="contained">Создать</Button>
      <Gap />
      <CustomInput
        required
        onChange={handleChangeName}
        value={name}
        fullWidth
        label={"Название"}
      />
      <Gap />
      <CustomInput
        required
        onChange={handleChangeDescription}
        value={description}
        multiline
        fullWidth
        label={"Описание"}
      />
      <Gap />
      <CustomSelect required value={selectedType} onChange={handleChangeSelect} fullWidth label="Категория">
        {
          types?.map(type=>
              <MenuItem key={type?.id} value={type?.id}>{type?.name}</MenuItem>
            )
        }
      </CustomSelect>
      <Gap />
      <Editor value={html} onChange={handleChangeHtml} />
      <Gap/>
      <CustomFileInput onDrop={handleFileDrop}/>
      <FileList files={droppedFiles} onDelete={handleDeleteFile}/>
      </form>
    </div>
  );
};

export default CreateFAQ;

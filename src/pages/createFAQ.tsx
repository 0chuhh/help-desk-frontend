import { Button, MenuItem } from "@mui/material";
import CustomInput from "component/ui/custom-input";
import api from "services/api";
import CustomSelect from "component/ui/custom-select";
import Gap from "component/ui/gap";
import Editor from "component/ui/quill-editor";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { IType } from "models/IType";
import React, { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { fetchTypes } from "store/reducers/types/ActionGetTypes";
import { IFAQ } from "models/IFAQ";
import { useNavigate } from "react-router";
const CreateFAQ = () => {
  
  const navigate = useNavigate()
  
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


  const createNewFAQ = async () => {
    const faq:IFAQ = await api.faq.postFAQ({name, description, html, type:Number(selectedType)})
    navigate(`/frequently-asked-questions/${faq.id}`)
    
  }

  useEffect(()=>{
    getTypes()
  },[])
  return (
    <div className="container">
      <Button onClick={createNewFAQ} variant="contained">Создать</Button>
      <Gap />
      <CustomInput
        onChange={handleChangeName}
        value={name}
        fullWidth
        label={"Название"}
      />
      <Gap />
      <CustomInput
        onChange={handleChangeDescription}
        value={description}
        multiline
        fullWidth
        label={"Описание"}
      />
      <Gap />
      <CustomSelect value={selectedType} onChange={handleChangeSelect} fullWidth label="Категория">
        {
          types?.map(type=>
              <MenuItem key={type?.id} value={type?.id}>{type?.name}</MenuItem>
            )
        }
      </CustomSelect>
      <Gap />
      <Editor value={html} onChange={handleChangeHtml} />
    </div>
  );
};

export default CreateFAQ;

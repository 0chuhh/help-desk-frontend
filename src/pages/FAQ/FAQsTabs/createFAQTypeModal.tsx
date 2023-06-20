import React, { FC, useState } from "react";
import CustomModal from "component/ui/custom-modal";
import { Button, Typography } from "@mui/material";
import CustomInput from "component/ui/custom-input";
import Gap from "component/ui/gap";
import api from 'services/api'
import { IType } from "models/IType";
interface CreateFAQTypeModalProps {
  open: boolean;
  onCreate:(type:IType) => void
  handleClose: () => void;
}

const CreateFAQTypeModal: FC<CreateFAQTypeModalProps> = ({
  open,
  handleClose,
  onCreate
}) => {
    const [name, setName] = useState<string>('')
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const createType:React.FormEventHandler<HTMLFormElement>  = async (event) => {
        event.preventDefault()
        const faq = await api.types.postType(name)
        onCreate(faq)
        handleClose()
    }
  return (
    <CustomModal open={open} handleClose={handleClose}>
      <Typography align="center" variant="h5">Создать категорию</Typography>
      <Gap/>
      <form onSubmit={createType}>
        <CustomInput required fullWidth label='Название' value={name} onChange={handleNameChange}/>
        <Gap/>
        <Button type="submit" variant="contained" fullWidth>Создать</Button>
      </form>
    </CustomModal>
  );
};

export default CreateFAQTypeModal;

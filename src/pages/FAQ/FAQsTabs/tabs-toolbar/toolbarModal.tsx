import React, { FC, useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useStaffStatus from "hooks/useStaffStatus";
import CreateFAQTypeModal from "../createFAQTypeModal";
import { IType } from "models/IType";

interface ToolbarModalProps {
  onCreateType: (type: IType) => void;
}

const ToolbarModal: FC<ToolbarModalProps> = ({ onCreateType }) => {
  const isStaff = useStaffStatus();

  const [isModalShowed, setIsModalShowed] = useState<boolean>(false);

  const openModal = () => setIsModalShowed(true);
  const closeModal = () => setIsModalShowed(false);
  return (
    <>
      {isStaff && (
        <Button
          onClick={openModal}
          variant="contained"
          style={{
            fontSize: "0.7rem",
            color: "#fff",
            backgroundColor: "#f90",
          }}
          endIcon={<AddIcon />}
        >
          Добавить
        </Button>
      )}
      <CreateFAQTypeModal
        open={isModalShowed}
        handleClose={closeModal}
        onCreate={onCreateType}
      />
    </>
  );
};

export default ToolbarModal;

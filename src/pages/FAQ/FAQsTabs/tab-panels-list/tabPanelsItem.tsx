import React, { FC } from "react";
import CustomCard from "component/ui/custom-card";
import { IFAQ } from "models/IFAQ";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
interface TabPanelsItemProps {
  faq: IFAQ;
  onEdit?: () => void;
  onDelete?: () => void;
}
const TabPanelsItem: FC<TabPanelsItemProps> = ({ faq, onDelete, onEdit }) => {
  return (
    <div style={{
        position:'relative'
    }}>
        
      <CustomCard
        key={faq.id + "faq"}
        style={{ margin: "20px 0" }}
        onDelete={onDelete}
        onEdit={onEdit}
        button={{
          label: "подробнее",
          link: `/frequently-asked-questions/${faq.id}`,
        }}
      >
        {faq.name}
        <div>{faq.description}</div>
      </CustomCard>
    </div>
  );
};

export default TabPanelsItem;

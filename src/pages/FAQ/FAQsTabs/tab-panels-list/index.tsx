import { IFAQ } from "models/IFAQ";
import { IType } from "models/IType";
import React, { FC } from "react";
import { TabPanel } from "component/ui/custom-vertical-tabs";
import { Typography } from "@mui/material";
import TabPanelsItem from "./tabPanelsItem";
import useStaffStatus from "hooks/useStaffStatus";
import api from 'services/api'
interface TabPanelsListProps {
  types: IType[];
  FAQs: IFAQ[];
  currentTab: number;
  onDelete:(faq:IFAQ)=>void
}
const TabPanelsList: FC<TabPanelsListProps> = ({ types, FAQs, currentTab, onDelete }) => {
  const isStaff = useStaffStatus();
  const deleteItem = async (item: IFAQ) => {
    if(item.id){
      await api.faq.deleteFAQbyId(item?.id)
      onDelete(item)
    }
  };

  const editItem = (item: IFAQ) => {
    console.log(item, " edited");
  };
  return (
    <>
      {FAQs.length > 0 ? (
        types.map((type, index) => (
          <TabPanel
            key={type.id + "tabPanel"}
            index={type.id}
            value={currentTab}
          >
            {FAQs.filter((faq) => faq.type === type.id).map((faq) => (
              <TabPanelsItem
                onDelete={isStaff ? () => deleteItem(faq) : undefined}
                onEdit={isStaff ? () => editItem(faq) : undefined}
                faq={faq}
              />
            ))}
          </TabPanel>
        ))
      ) : (
        <Typography className="w-100" color={"lightgray"} align="center">
          Не найдено
        </Typography>
      )}
    </>
  );
};

export default React.memo(TabPanelsList);

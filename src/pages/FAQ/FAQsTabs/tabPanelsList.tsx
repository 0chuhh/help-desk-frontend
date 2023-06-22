import { IFAQ } from 'models/IFAQ'
import { IType } from 'models/IType'
import React, { FC } from 'react'
import CustomCard from "component/ui/custom-card";
import {
  TabPanel,
} from "component/ui/custom-vertical-tabs";

interface TabPanelsListProps{
    types:IType[],
    FAQs:IFAQ[],
    currentTab:number
}
const TabPanelsList:FC<TabPanelsListProps> = ({types, FAQs, currentTab}) => {
  return (
    <>
    {
        types.map((type, index) => (
            <TabPanel key={type.id + "tabPanel"} index={type.id} value={currentTab}>
              {FAQs.filter((faq) => faq.type === type.id).map((faq) => (
                <CustomCard
                  key={faq.id + "faq"}
                  style={{ margin: "20px 0" }}
                  button={{
                    label: "подробнее",
                    link: `/frequently-asked-questions/${faq.id}`,
                  }}
                >
                  {faq.name}
                  <div>{faq.description}</div>
                </CustomCard>
              ))}
            </TabPanel>
          ))
      
    }
    </>
  )
}

export default React.memo(TabPanelsList)
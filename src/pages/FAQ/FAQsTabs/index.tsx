import React, { ChangeEvent, useEffect, useState } from "react";
import CustomCard from "component/ui/custom-card";
import {
  CustomVerticalTabs,
  TabPanel,
} from "component/ui/custom-vertical-tabs";
import { IFAQ } from "models/IFAQ";
import { IType } from "models/IType";
import api from "services/api";
import TabsLabels from "./tabsLabels";


import TabPanelsList from "./tabPanelsList";
import TabsToolbar from "./tabs-toolbar";

const FAQsTabs = () => {
  const [fullFAQs, setFullFAQs] = useState<IFAQ[]>([]);
  const [FAQs, setFAQs] = useState<IFAQ[]>([]);
  const [fullTypes, setFullTypes] = useState<IType[]>([]);
  const [types, setTypes] = useState<IType[]>([]);
  const [currentTab, setCurrentTab] = useState<number>(1);

  


  const getTypes = async () => {
    const typesResponse: IType[] = await api.types.getTypes();
    setFullTypes(typesResponse)
    setTypes(typesResponse);
  };

  const getFAQ = async () => {
    const FAQresponse: IFAQ[] = await api.faq.getFAQ();
    setFullFAQs(FAQresponse)
    setFAQs(FAQresponse);
  };

  const onCreateType = (type: IType) => {
    setTypes((prevTypes) => [...prevTypes, type]);
  };

  const handleChangeTab = (
    event: React.SyntheticEvent,
    newValue: number | string
  ) => {
    if (typeof newValue !== "string") setCurrentTab(newValue);
  };

 
  const searchFAQs = async (query:string) =>{
    console.log(`'${query}'`, query === '')
      if(query === ''){
        if (fullTypes.length>0 && fullFAQs.length>0) {
          setTypes(fullTypes) 
          setFAQs(fullFAQs)
        }
      }else{
        const FAQresponse: IFAQ[] = await api.faq.getFAQ(query);
          let tempTypes = fullTypes.filter(type=>FAQresponse.map(faq=>faq.type).includes(type.id))
          setTypes(tempTypes)
          setFAQs(FAQresponse);
      }
        
  }




  useEffect(() => {
    getTypes()
    getFAQ();
  }, []);


  return (
    <CustomVerticalTabs
     
    >
      <div
        style={{
          backgroundColor: "#252525",
          height: "100%",
          padding: "15px 10px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
          
        
        <TabsToolbar onCreateType={onCreateType} searchFAQs={searchFAQs}/>

        <TabsLabels
          labels={types}
          value={currentTab}
          handleChange={handleChangeTab}
        />


      </div>
      <TabPanelsList types={types} FAQs={FAQs} currentTab={currentTab}/>

      
    </CustomVerticalTabs>
  );
};

export default FAQsTabs;

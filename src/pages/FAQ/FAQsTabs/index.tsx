import React, { useEffect, useState } from "react";
import CustomCard from "component/ui/custom-card";
import {
  CustomVerticalTabs,
  TabPanel,
} from "component/ui/custom-vertical-tabs";
import { IFAQ } from "models/IFAQ";
import { IType } from "models/IType";
import api from "services/api";
import TabsLabels from "./tabsLabels";

const FAQsTabs = () => {
  const [FAQs, setFAQs] = useState<IFAQ[]>([]);
  const [types, setTypes] = useState<IType[]>([]);
  const [currentTab, setCurrentTab] = useState<number>(1);

  const getFAQ = async () => {
    const FAQresponse: IFAQ[] = await api.faq.getFAQ();
    setFAQs(FAQresponse);
  };

  const getTypes = async () => {
    const typesResponse: IType[] = await api.types.getTypes();
    setTypes(typesResponse);
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  useEffect(() => {
    getFAQ();
    getTypes();
  }, []);

  return (
    <CustomVerticalTabs
      labels={
        <TabsLabels
          labels={types}
          value={currentTab}
          handleChange={handleChangeTab}
        />
      }
    >
      {types.map((type, index) => (
        <TabPanel key={type.id+'tabPanel'} index={type.id} value={currentTab}>
          {FAQs.map(
            (faq) =>
              currentTab === faq.type && (
                <CustomCard
                  key={faq.id+'faq'}
                  style={{ margin: "20px 0" }}
                  button={{ label: "hello" }}
                >
                  {faq.name}
                  <div>{faq.description}</div>
                </CustomCard>
              )
          )}
        </TabPanel>
      ))}
    </CustomVerticalTabs>
  );
};

export default FAQsTabs;

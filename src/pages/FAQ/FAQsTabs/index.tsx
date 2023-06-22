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

import TabPanelsList from "./tab-panels-list";
import TabsToolbar from "./tabs-toolbar";
import { CircularProgress } from "@mui/material";
import Gap from "component/ui/gap";

const FAQsTabs = () => {
  const [fullFAQs, setFullFAQs] = useState<IFAQ[]>([]);
  const [FAQs, setFAQs] = useState<IFAQ[]>([]);
  const [fullTypes, setFullTypes] = useState<IType[]>([]);
  const [types, setTypes] = useState<IType[]>([]);
  const [currentTab, setCurrentTab] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getTypes = async () => {
    const typesResponse: IType[] = await api.types.getTypes();
    setFullTypes(typesResponse);
    setTypes(typesResponse);
  };

  const getFAQ = async () => {
    const FAQresponse: IFAQ[] = await api.faq.getFAQ();
    setFullFAQs(FAQresponse);
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

  const searchFAQs = async (query: string) => {
    if (query === "") {
      if (fullTypes.length > 0 && fullFAQs.length > 0) {
        setTypes(fullTypes);
        setFAQs(fullFAQs);
      }
      setIsLoading(false);
    } else {
      const FAQresponse: IFAQ[] = await api.faq.getFAQ(query);
      let tempTypes = fullTypes.filter((type) =>
        FAQresponse.map((faq) => faq.type).includes(type.id)
      );
      setTypes(tempTypes);
      setCurrentTab(tempTypes[0]?.id);
      setFAQs(FAQresponse);
      setIsLoading(false);
    }
  };

  const onDeleteFAQ = (faq:IFAQ) => {
    setFAQs(prev=>prev.filter(f=>f.id !== faq.id))
    setFullFAQs(prev=>prev.filter(f=>f.id !== faq.id))
  }

  useEffect(() => {
    getTypes();
    getFAQ();
  }, []);

  return (
    <CustomVerticalTabs>
      <div
        style={{
          backgroundColor: "#252525",
          height: "100%",
          padding: "15px 10px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TabsToolbar
          onCreateType={onCreateType}
          searchFAQs={searchFAQs}
          onSearchChange={() => setIsLoading(true)}
        />

        {!isLoading && (
          <TabsLabels
            labels={types}
            value={currentTab}
            handleChange={handleChangeTab}
          />
        )}
        <Gap />
        {isLoading && (
          <CircularProgress
            classes={{
              colorPrimary: "circular-progress-color",
            }}
          />
        )}
      </div>
      {!isLoading && (
        <TabPanelsList onDelete={onDeleteFAQ} types={types} FAQs={FAQs} currentTab={currentTab} />
      )}
      {isLoading && (
        <div className="h-center v-center w-100 h-100">
          <CircularProgress />
        </div>
      )}
    </CustomVerticalTabs>
  );
};

export default FAQsTabs;

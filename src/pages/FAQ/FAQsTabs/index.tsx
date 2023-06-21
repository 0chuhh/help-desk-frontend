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
import CreateFAQTypeModal from "./createFAQTypeModal";
import CustomInput from "component/ui/custom-input";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Gap from "component/ui/gap";
import useStaffStatus from "hooks/useStaffStatus";

const FAQsTabs = () => {
  const isStaff = useStaffStatus();

  const [FAQs, setFAQs] = useState<IFAQ[]>([]);
  const [types, setTypes] = useState<IType[]>([]);
  const [currentTab, setCurrentTab] = useState<number>(1);
  const [isModalShowed, setIsModalShowed] = useState<boolean>(false);

  const openModal = () => setIsModalShowed(true);
  const closeModal = () => setIsModalShowed(false);

  const getFAQ = async () => {
    const FAQresponse: IFAQ[] = await api.faq.getFAQ();
    setFAQs(FAQresponse);
  };

  const getTypes = async () => {
    const typesResponse: IType[] = await api.types.getTypes();
    setTypes(typesResponse);
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

  useEffect(() => {
    getFAQ();
    getTypes();
  }, []);

  return (
    <CustomVerticalTabs
      beforeLabels={
        <>
          <CustomInput
            placeholder="поиск..."
            size="small"
            style={{
              color: "#fff",
            }}
            InputProps={{
              startAdornment: <SearchIcon />,
              style: {
                color: "#fff",
                fontSize: "0.8rem",
                backgroundColor: "#000",
                borderColor: "#fff",
              },
            }}
          />
          <Gap />
          {isStaff && (
            <Button
              onClick={openModal}
              variant="contained"
              style={{
                fontSize: "0.7rem",
                color: "#fff",
                backgroundColor:'#f90'
              }}
              endIcon={<AddIcon />}
            >
              Добавить
            </Button>
          )}
        </>
      }
      labels={
        <TabsLabels
          labels={types}
          value={currentTab}
          handleChange={handleChangeTab}
        />
      }
    >
      {types.map((type, index) => (
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
      ))}

      <CreateFAQTypeModal
        open={isModalShowed}
        handleClose={closeModal}
        onCreate={onCreateType}
      />
    </CustomVerticalTabs>
  );
};

export default FAQsTabs;

import { Button, Typography } from '@mui/material'
import CustomCard from 'component/ui/custom-card';
import { CustomVerticalTabs, TabPanel } from 'component/ui/custom-vertical-tabs';
import { IFAQ } from 'models/IFAQ';
import { IType } from 'models/IType';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from 'services/api';

const FAQ = () => {
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
    <div className='container' style={{display:'flex', flexDirection:'column', gap:'10px'}}>
        <Typography align='center' variant='h3'>База знаний</Typography>
        <Link to={'/create-frequently-asked-questions'}>
            <Button variant='contained'>Создать</Button>
        </Link>
        <CustomVerticalTabs handleChange={handleChangeTab} value={currentTab} labels={types.map(type=>type.name)}>
          {
            types.map((type, index)=>
                <TabPanel index={index} value={currentTab}>
                  {
                    FAQs.map(faq=>
                        currentTab+1 === faq.type && 
                        <CustomCard style={{margin:'20px 0'}} button={{label:'hello'}}>
                          {faq.name}
                          <div>{faq.description}</div>
                        </CustomCard>
                      )
                  }
                </TabPanel>
              )
          }
        </CustomVerticalTabs>
    </div>
  )
}

export default FAQ
import React, { useEffect, useState } from "react";
import { Divider, Paper, Typography } from "@mui/material";
import { IFAQ } from "models/IFAQ";
import api from "services/api";
import { IType } from "models/IType";
import MyAccordion from "component/ui/my-accordion";
import { Link } from "react-router-dom";
function SideFaq() {

  const [FAQs, setFAQs] = useState<IFAQ[]>([]);
  const [types, setTypes] = useState<IType[]>([]);
  const [open, setOpen] = useState<string | number>('');
  const getFAQ = async () => {
    const FAQresponse: IFAQ[] = await api.faq.getFAQ();
    setFAQs(FAQresponse);
  };

  const getTypes = async () => {
    const typesResponse: IType[] = await api.types.getTypes();
    setTypes(typesResponse);
  };

  const handleChange = (value:string|number) => {
    if(value === open){
        setOpen('')
    }else{
        setOpen(value)
    }
  }
  useEffect(() => {
    getFAQ();
    getTypes();
  }, []);
  return (
    <Paper
      elevation={3}
      style={{
        maxHeight: "450px",
        maxWidth: "350px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        position: "fixed",
        top: "30%",
        right: 2,
       
      }}
    >
      <div className="title" style={{
        background:'rgb(37, 37, 37)',
        width:'100%',
        height:'60px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:'5px',
        borderTopRightRadius:'5px',
        textAlign:'center'
      }}>
        <Typography color={'white'}>ЧаВо</Typography>
      </div>
      <div className="tasks" style={{ width: "100%", height: "100%", overflowY:'auto',
        overflowX:'hidden' }}>
        {types.map((type) => (
          <MyAccordion key={'type'+type.id} title={type.name} handleChange={(e)=>handleChange(type.id)} expanded={type.id === open}>
            {FAQs.map((item) => (
              item.type === type.id &&
              <div
              key={'faq'+item.id}
                style={{
                  width: "100%",
                  height: "20px",
                  padding: "20px",
                }}
              >
                <Link to={`/frequently-asked-questions/${item.id}`}>
                    <div className="title">{item.name}</div>
                </Link>
              </div>
            ))}
          </MyAccordion>
        ))}
      </div>
    </Paper>
  );
}

export default SideFaq;

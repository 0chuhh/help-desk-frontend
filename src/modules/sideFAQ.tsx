 import React, { useEffect, useState } from 'react';
import {Divider, Paper, Typography} from "@mui/material";
import { IFAQ } from 'models/IFAQ';
import api from 'services/api'
function SideFaq() {
    const [FAQs, setFAQs] = useState<IFAQ[]>([])
    const getFAQ = async () =>{
        const FAQresponse:IFAQ[] = await api.faq.getFAQ()
        setFAQs(FAQresponse)
    }

    useEffect(()=>{
        getFAQ()
    },[])
    return (
        <Paper elevation={3} style={{
            maxHeight: '450px',
            maxWidth: '300px',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px',
            padding: '20px',
            position:'fixed',
            top:'30%',
            right:2,
        }}>
            <div className="title">
                <Typography>
                    ЧаВо
                </Typography>
            </div>
            <div className="tasks" style={{width:'100%',height:'100%'}}>
                {
                    FAQs.map(item=>
                            <div style={{
                                width:'100%',
                                height:'20px',
                                padding:'20px'
                            }}>
                                <div className="title">{item.name}</div>
                            </div>
                        )
                }
            </div>
        </Paper>
    );
}

export default SideFaq;
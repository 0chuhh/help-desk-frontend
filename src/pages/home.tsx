import React from 'react';
import illustration from 'assets/Illustration.svg'
import {Typography} from "@mui/material";
import SideFAQ from "../modules/sideFAQ";

function Home() {
    return (
        <div style={{padding: '150px 70px'}}>
            <SideFAQ/>
            <div className="description" style={{padding: '10px', display:'flex', gap:'20px'}}>
                <div className="image">
                    <img style={{
                        maxWidth:'300px'
                    }} src={illustration} alt=""/>
                </div>
                <div className="text" style={{maxWidth:'600px',display:'flex',flexDirection:'column', gap:'50px'}}>
                    <div className="title" style={{
                        display:'flex',
                        alignItems:'center',
                        gap:'50px'
                    }}>
                        <Typography variant={'h5'}>
                            <strong>
                            HelpDesk
                            </strong>
                            {' '} - инструмент для автоматизации технической поддержки.
                        </Typography>

                    </div>
                    <Typography variant={'h6'}>
                        Если у вас возникла проблема технического плана, вы можете оставить заявку, и, специалисты ЗабГУ
                        решат вашу проблему в ближайшее время, или найти решение вашей проблемы самостоятельно в базе
                        знаний
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default Home;
import React from 'react';
import {Divider, Paper, Typography} from "@mui/material";

function SideFaq() {

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
            right:0,
        }}>
            <div className="title">
                <Typography>
                    ЧаВо
                </Typography>
            </div>
            <div className="tasks">

            </div>
        </Paper>
    );
}

export default SideFaq;
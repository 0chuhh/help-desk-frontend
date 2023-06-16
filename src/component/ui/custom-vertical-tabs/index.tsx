import React, { FC, PropsWithChildren } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps
  extends PropsWithChildren,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {
  index: number;
  value: number;
}

export const TabPanel: FC<TabPanelProps> = ({
  index,
  value,
  children,
  ...restProps
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{
        width:'100%',
        height:'100%',
      }}
      {...restProps}
    >
      {value === index && (
        <Box sx={{ p: 3,height:'100%',flexGrow:1,gap:'20px', boxSizing:'border-box', overflow:'auto' }}>
          {children}
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

interface CustomVerticalTabsProps extends PropsWithChildren {
  value?: number;
  handleChange?: (event: React.SyntheticEvent, newValue: number) => void;
  labels: string[];
}

export const CustomVerticalTabs: FC<CustomVerticalTabsProps> = ({
  value,
  handleChange,
  labels,
  children,
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height:'70vh',
        borderRadius:'10px',
        boxShadow:'0px 0px 5px lightgray',
        boxSizing:'border-box',
        overflow:'hidden'
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        TabIndicatorProps={{
            style:{
                backgroundColor:'#f90'
            }
        }}
        value={value}
        style={{
            backgroundColor:"#252525",
            color:'white',
            backgroundClip:'border-box',
            transition:'all 0.5s ease'
        }}
        textColor="secondary"
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", }}
      >
        {labels.map((label, index) => (
          <Tab classes={{
            'selected':'selected-tab',
            'textColorSecondary':'tab-secondary-text-color'
          }} key={label + index} label={label} {...a11yProps(index)} />
        ))}
      </Tabs>
      {children}
    </Box>
  );
};


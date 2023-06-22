import React, { FC } from "react";
import Tab from "@mui/material/Tab";
import {
  TabsVertical,
  TabsVerticalProps,
  a11yProps,
} from "component/ui/custom-vertical-tabs";
import { IType } from "models/IType";
import Grow from "@mui/material/Grow";
interface TabsLabelsProps extends TabsVerticalProps {
  onAddButtonClick?: () => void;
  labels: IType[];
}

const TabsLabels: FC<TabsLabelsProps> = React.memo(
  ({ labels, ...restProps }) => {
    return (
      <TabsVertical {...restProps}>
        {labels.map((label, index) => (
          <Tab
            className="w-100"
            style={{
              textAlign:'left'
            }}
            classes={{
              selected: "selected-tab",
              textColorSecondary: "tab-secondary-text-color",
            }}
            key={label.name + index}
            label={
              <Grow
                in={true}
                style={{ transformOrigin: "0 0 0" }}
                timeout={(index + 1) * 300}
              >
                <div className="w-100">{label.name}</div>
              </Grow>
            }
            value={label.id}
            {...a11yProps(index)}
          />
        ))}
      </TabsVertical>
    );
  }
);

export default React.memo(TabsLabels);

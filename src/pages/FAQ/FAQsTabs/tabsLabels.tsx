import React, { FC } from "react";
import Tab from "@mui/material/Tab";
import {
  TabsVertical,
  TabsVerticalProps,
  a11yProps,
} from "component/ui/custom-vertical-tabs";
import { IType } from "models/IType";
interface TabsLabelsProps extends TabsVerticalProps {
  onAddButtonClick?: () => void;
  labels: IType[];
}

const TabsLabels: FC<TabsLabelsProps> = React.memo(({ labels, ...restProps }) => {
  return (
    <TabsVertical {...restProps}>
      {labels.map((label, index) => (
        <Tab
          classes={{
            selected: "selected-tab",
            textColorSecondary: "tab-secondary-text-color",
          }}
          key={label.name + index}
          label={label.name}
          value={label.id}
          {...a11yProps(index)}
        />
      ))}
    </TabsVertical>
  );
});

export default React.memo(TabsLabels);

import React, { FC } from "react";
import Tab from "@mui/material/Tab";
import {
  TabsVertical,
  TabsVerticalProps,
  a11yProps,
} from "component/ui/custom-vertical-tabs";
import { IType } from "models/IType";
import AddIcon from "@mui/icons-material/Add";
import useStaffStatus from "hooks/useStaffStatus";
interface TabsLabelsProps extends TabsVerticalProps {
  onAddButtonClick?: () => void;
  labels: IType[];
}
const TabsLabels: FC<TabsLabelsProps> = ({
  labels,
  onAddButtonClick,
  ...restProps
}) => {
  const isStaff = useStaffStatus() 
  return (
    <TabsVertical {...restProps}>
        {isStaff && labels.length && (
          <Tab
            onClick={onAddButtonClick}
            style={{
              fontSize: "0.7rem",
            }}
            classes={{
              selected: "selected-tab",
              textColorSecondary: "tab-secondary-text-color",
            }}
            icon={<AddIcon fontSize="small" />}
            label="Добавить"
            key={"add"}
            value={"add"}
            {...a11yProps(0)}
          />
        )}
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
};

export default React.memo(TabsLabels);

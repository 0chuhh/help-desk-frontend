import React, { FC } from "react";
import { IType } from "models/IType";
import ToolbarModal from "./toolbarModal";
import ToolbarSearch from "./toolbarSearch";
import Gap from "component/ui/gap";

interface TabsToolbarProps {
  onCreateType: (type: IType) => void;
  searchFAQs: (query: string) => void;
  onSearchChange:()=>void
}
const TabsToolbar: FC<TabsToolbarProps> = ({ onCreateType, searchFAQs, onSearchChange }) => {
  return (
    <>
      <ToolbarSearch onChange={onSearchChange} searchFAQs={searchFAQs}/>
      <Gap/>
      <ToolbarModal onCreateType={onCreateType}/>
    </>
  );
};

export default TabsToolbar;

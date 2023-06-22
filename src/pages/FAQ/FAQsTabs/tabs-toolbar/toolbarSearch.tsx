import React, { ChangeEvent, FC, useEffect, useState } from "react";
import CustomInput from "component/ui/custom-input";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "hooks/useDebounce";

interface ToolbarSearchProps {
  searchFAQs: (query: string) => void;
  onChange:()=>void
}

const ToolbarSearch: FC<ToolbarSearchProps> = ({ searchFAQs, onChange }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const debouncedSearchValue = useDebounce(searchQuery, 700);

  const handleChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onChange()
  };

  useEffect(() => {
    searchFAQs(searchQuery);
  }, [debouncedSearchValue]);
  return (
    <CustomInput
      placeholder="поиск..."
      size="small"
      style={{
        color: "#fff",
      }}
      value={searchQuery}
      onChange={handleChangeSearchValue}
      InputProps={{
        startAdornment: <SearchIcon />,
        style: {
          color: "#fff",
          fontSize: "0.8rem",
          backgroundColor: "#000",
          borderColor: "#fff",
        },
      }}
    />
  );
};

export default ToolbarSearch;

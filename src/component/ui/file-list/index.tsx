import type { FC } from "react";
import React from "react";
import { useMemo } from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { Button } from "@mui/material";
import Gap from "../gap";

interface FileListProps {
  files: File[];
}

function list(files: File[]) {
  const label = (file: File) => `${file.name}`;
  return files.map((file) => (
    <Button>
      <FileCopyIcon />
      <Gap variant="horizontal" /> {label(file)}
    </Button>
  ));
}

const FileList: FC<FileListProps> = ({ files }) => {
  if (files.length === 0) {
    return <div></div>;
  }
  const fileList = list(files);
  return <div>{fileList}</div>;
};
export default React.memo(FileList);

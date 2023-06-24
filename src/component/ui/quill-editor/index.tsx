import * as React from "react";
import { render } from "react-dom";
import ReactQuill, { Quill } from "react-quill";
import MagicUrl from "quill-magic-url";
import { FC } from "react";

Quill.register("modules/magicUrl", MagicUrl);
const FORMATS = [
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "script",
  "header",
  "blockquote",
  "code-block",
  "indent",
  "list",
  "direction",
  "align",
  "link",
  "image",
  'code',
  "video",
];
const MODULES = {
  toolbar: [
    ["bold", "italic", "underline", "strike", "blockquote"],
    ["link", "image", "video"],
    ['code'],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ direction: "rtl" }], // text direction

    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
  ],
  magicUrl: true,
};

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const Editor: FC<EditorProps> = ({ value, onChange }) => {
  return (
    <ReactQuill
      
      value={value}
      onChange={onChange}
      theme="snow"
      modules={MODULES}
      formats={FORMATS}
      bounds={".quill"}
    />
  );
};

export default React.memo(Editor);

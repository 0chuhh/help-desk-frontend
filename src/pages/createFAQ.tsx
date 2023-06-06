import Editor from "component/ui/quill-editor";
import React, { useState } from "react";
const CreateFAQ = () => {
  const [value, setValue] = useState("");
  const handleChange = (html:string) => {
    setValue(html);
    console.log(html)
  };

  return (
    <div className="container">
    <Editor value={value} onChange={handleChange}/>      
    </div>
  );
};

export default CreateFAQ;

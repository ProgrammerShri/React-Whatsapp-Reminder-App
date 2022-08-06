import { Input } from "antd";
import React from "react";

const { TextArea } = Input;

const AppTextArea = ({ placeholder = "Type Something" }) => {
  return (
    <div className="flex justify-center items-center m-2 w-full">
      <TextArea
        rows={4}
        className="w-full border-2 rounded-lg"
        placeholder={placeholder}
        autoFocus={true}
        style={{
            fontSize: "1rem",
        }}
      />
    </div>
  );
};

export default AppTextArea;

import { Input } from "antd";
import React from "react";

const AppInput = ({ placeholder="Type Something" }) => {
  return (
    <div className="flex justify-center items-center m-2">
      <Input
        className="w-full border-2 rounded-lg h-12 "
        placeholder={placeholder}
        autoFocus={true}
      />
    </div>
  );
};

export default AppInput;

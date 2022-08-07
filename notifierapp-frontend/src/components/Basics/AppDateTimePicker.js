import React from "react";
import { DatePicker, TimePicker } from "antd";

const AppDateTimePicker = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="w-full flex justify-around items-center">
      <DatePicker onChange={onChange} className="w-full m-1 rounded-lg" />
      <TimePicker
        use12Hours
        format="h:mm a"
        onChange={onChange}
        className="w-full m-1 rounded-lg"
      />
    </div>
  );
};

export default AppDateTimePicker;

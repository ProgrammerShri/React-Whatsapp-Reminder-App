import React from "react";
import { DatePicker, TimePicker } from "antd";

const AppDateTimePicker = ({onChange, ...otherProps}) => {


  return (
    <div className="w-full flex justify-around items-center">
      <DatePicker onChange={onChange} className="w-full m-1 rounded-lg" {...otherProps} />
      <TimePicker
        use12Hours
        format="h:mm a"
        onChange={onChange}
        className="w-full m-1 rounded-lg"
        {...otherProps}
      />
    </div>
  );
};

export default AppDateTimePicker;

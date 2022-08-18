import React, { useEffect } from "react";
import axios from "axios";
import AppButton from "./Basics/AppButton";
import AppDateTimePicker from "./Basics/AppDateTimePicker";
import AppInput from "./Basics/AppInput";
import AppTextArea from "./Basics/AppTextArea";
import EventLists from "./EventLists";

const LOCAL_URL = "http://localhost:9000";
const HOST_URL = "https://whatsapp-notifierapp.herokuapp.com";

const HeroCard = () => {
  const [reminderMsg, setReminderMsg] = React.useState("");
  const [remindAt, setRemindAt] = React.useState();
  const [reminderList, setReminderList] = React.useState([]);


  useEffect(() => {
    axios
      .get(`${LOCAL_URL}/getAllReminder`)
      .then((res) => setReminderList(res.data));
  }, [reminderList]);

  const onChange = (date, dateString) => {
    const { _d } = date;
    let dateObj = _d.toString().split(" "); 
    if (dateString.includes("am") || dateString.includes("pm")) {
      let myDate = new Date(_d);
      let customDate = myDate.toString().split(" ");
      let customDateString =
        dateObj[0] + " " + dateObj[1] + " " + dateObj[2] + " " + dateObj[3] + " " + customDate[4] + " " + customDate[5] + " " + customDate[6] + " " + customDate[7] + customDate[8];
      setRemindAt(customDateString);
    }
  };

  const addReminder = () => {
    axios
      .post(`${LOCAL_URL}/addReminder`, {
        reminderMsg,
        remindAt,
      })
      .then((res) => setReminderList(res.data));
    setReminderMsg("");
    setRemindAt(null);

  };

 

  return (
    <>
      <div className="w-full mt-4 flex flex-col justify-center items-center">
        <div className="h-auto w-fit p-3 m-2 rounded-xl bg-gray-700 flex flex-col  justify-center items-center">
          <h1 className="text-primary-blue font-bold text-xl text-center">
            Hey! Remind Me Anything, Then I'll Remind You Again
          </h1>
          <AppTextArea onChange={(e) => setReminderMsg(e.target.value)} id="inputField" />
          <AppDateTimePicker onChange={onChange} id="inputField" />
          <AppButton onClick={()=> addReminder()} />
        </div>
        <div className="w-fit">
          <EventLists data={reminderList} />
        </div>
      </div>
    </>
  );
};

export default HeroCard;

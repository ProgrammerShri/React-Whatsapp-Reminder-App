import React, { useState, useEffect } from "react";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";
import { DatePicker } from "antd";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import AppInput from "./components/Basics/AppInput";
import Navbar from "./components/Navbar";
import HeroCard from "./components/HeroCard";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [reminderMsg, setReminderMsg] = useState("");
  const [remindAt, setRemindAt] = useState();
  const [reminderList, setReminderList] = useState([]);

  const LOCAL_URL = "http://localhost:9000";
  const HOST_URL = "https://whatsapp-notifierapp.herokuapp.com";

  useEffect(() => {
    axios
      .get(`${HOST_URL}/getAllReminder`)
      .then((res) => setReminderList(res.data));
  }, [reminderList]);

  const addReminder = () => {
    axios
      .post(`${HOST_URL}/addReminder`, {
        reminderMsg,
        remindAt,
      })
      .then((res) => setReminderList(res.data));
    setReminderMsg("");
    setRemindAt();
  };

  const deleteReminder = (id) => {
    axios
      .post(`${HOST_URL}/deleteReminder`, { id })
      .then((res) => setReminderList(res.data));
  };

  return (
    <Provider store={store}>
      <div className="bg-white dark:bg-black transition duration-500 min-h-screen">
        {/* <h1 className="text-black dark:text-white">HELLO</h1> */}
        <Navbar />
        <HeroCard />
      </div>
      {/* <div className="App">
            <div className="homepage">
              <div className="homepage_header">
                <div className="subHeader">
                  <h1 className="text-3xl font-bold underline">Remind Me 🙋‍♂️</h1>
                  <input
                    className="inputBox"
                    type="text"
                    placeholder="Reminder Notes Here..."
                    value={reminderMsg}
                    onChange={(e) => setReminderMsg(e.target.value)}
                  />

                  <DateTimePicker
                    className="datePicker"
                    value={remindAt}
                    onChange={setRemindAt}
                    minDate={new Date()}
                    minutePlaceholder="mm"
                    hourPlaceholder="hh"
                    dayPlaceholder="DD"
                    monthPlaceholder="MM"
                    yearPlaceholder="YYYY"
                  />
                  <div className="button" onClick={addReminder}>
                    Add Reminder
                  </div>
                </div>
              </div>

              <div className="homepage_body">
                {reminderList?.map((reminder, i) => (
                  <li>
                    <div className="reminder_card" key={reminder._id}>
                      <div className="msgHead">
                        {i + 1} - {reminder.reminderMsg}
                      </div>
                      <div className="remindHead">Remind Me at :</div>
                      <div className="remindTime">
                        {String(
                          new Date(
                            reminder?.remindAt?.toLocaleString(undefined, {
                              timezone: "Asia/Kolkata",
                            })
                          )
                        )}
                      </div>
                      <div
                        className="button"
                        onClick={() => deleteReminder(reminder._id)}
                      >
                        Delete
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </div> */}
    </Provider>
  );
}

export default App;

import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";

function App() {
  const [reminderMsg, setReminderMsg] = useState("");
  const [remindAt, setRemindAt] = useState();
  const [reminderList, setReminderList] = useState([]);

  useEffect(() => {
    axios
      .get("https://whatsapp-notifierapp.herokuapp.com/getAllReminder")
      .then((res) => setReminderList(res.data));
  }, []);

  const addReminder = () => {
    axios
      .post("https://whatsapp-notifierapp.herokuapp.com/addReminder", {
        reminderMsg,
        remindAt,
      })
      .then((res) => setReminderList(res.data));
    setReminderMsg("");
    setRemindAt();
  };

  const deleteReminder = (id) => {
    axios
      .post("https://whatsapp-notifierapp.herokuapp.com/deleteReminder", { id })
      .then((res) => setReminderList(res.data));
  };

  return (
    <div className="App">
      <div className="homepage">
        <div className="homepage_header">
          <div className="subHeader">
            <h1>Remind Me 🙋‍♂️</h1>
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
    </div>
  );
}

export default App;

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
var bodyParser = require("body-parser");

// APP config

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// DB Config

app.get("/", (req, res) => res.send("Hello world!")); // For Hosting Test
const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server running on port ${port}`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("notifierapp-frontend/build")); // set static folder
  //returning frontend for any route other than api
  // app.get("*", (req, res) => {
  //   res.sendFile(
  //     path.resolve(__dirname, "notifierapp-frontend", "build", "index.html")
  //   );
  // });
}

const DB = process.env.DB_URL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB Connected!...`);
  })
  .catch((err) => console.log(err));

const reminderSchema = new mongoose.Schema({
  reminderMsg: String,
  remindAt: String,
  isReminded: Boolean,
});

const Reminder = new mongoose.model("reminder", reminderSchema);

// Whatsapp Reminder Function

setInterval(() => {
  Reminder.find({}, (err, reminderList) => {
    if (err) {
      console.log(err);
    }
    if (reminderList) {
      reminderList.forEach((reminder) => {
        if (!reminder.isReminded) {
          const now = new Date();
          if (new Date(reminder.remindAt) - now < 0) {
            Reminder.findByIdAndUpdate(
              reminder._id,
              { isReminded: true },
              (err, remindObj) => {
                if (err) {
                  console.log(err);
                }
                const accountSid = process.env.ACCOUNT_SID;
                const authToken = process.env.AUTH_TOKEN;
                const client = require("twilio")(accountSid, authToken);

                client.messages
                  .create({
                    body: reminder.reminderMsg,
                    from: `whatsapp:${process.env.BOT_MOBILE_NUMBER}`,
                    to: `whatsapp:${process.env.MY_MOBILE_NUMBER}`,
                  })
                  .then((message) => console.log(message.sid))
                  .done();
              }
            );
          }
        }
      });
    }
  });
}, 1000);

//API routes

app.get("/getAllReminder", (req, res) => {
  Reminder.find({}, (err, reminderList) => {
    if (err) {
      console.log(err);
    }
    if (reminderList) {
      res.send(reminderList);
    }
  });
});

app.post("/addReminder", (req, res) => {
  const { reminderMsg, remindAt } = req.body;
  const reminder = new Reminder({
    reminderMsg,
    remindAt,
    isReminded: false,
  });
  reminder.save((err) => {
    if (err) {
      console.log(err);
    }
    Reminder.find({}, (err, reminderList) => {
      if (err) {
        console.log(err);
      }
      if (reminderList) {
        res.send(reminderList);
      }
    });
  });
});

app.post("/deleteReminder", (req, res) => {
  Reminder.deleteOne({ _id: req.body.id }, () => {
    Reminder.find({}, (err, reminderList) => {
      if (err) {
        console.log(err);
      }
      if (reminderList) {
        res.send(reminderList);
      }
    });
  });
});

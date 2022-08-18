import { Button, Table } from "antd";
import axios from "axios";
import React from "react";
import { renderTime } from "../helper/common";

const LOCAL_URL = "http://localhost:9000";
const HOST_URL = "https://whatsapp-notifierapp.herokuapp.com";

const columns = [
  {
    title: "Reminder Message",
    dataIndex: "reminderMsg",
    key: "reminderMsg",
    align: "center",
  },
  {
    title: "Remind At ",
    dataIndex: "remindAt",
    align: "center",
    render: (text) => renderTime(text),
  },
  {
    title: "Action",
    dataIndex: "action",
    align: "center",
    render: (text, record) => {
      const deleteReminder = (id) => {
        axios
          .post(`${LOCAL_URL}/deleteReminder`, { id })
          .then((res) => console.log(res.data));
      };
      return (
        <span>
          <Button onClick={() => deleteReminder(record._id)}>Delete</Button>
        </span>
      );
    },
  },
];

const EventLists = ({ data = [] }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ y: 500 }}
      pagination
      rowKey="_id"
    />
  );
};

export default EventLists;

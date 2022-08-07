import { Table } from "antd";
import React from "react";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (text, record) => (
      <span>
        <a href="#!">Edit</a>
        &nbsp;&nbsp;
        <a href="#!">Delete</a>
      </span>
    ),
  },
];
const data = [];

for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const EventLists = () => {
  return <Table columns={columns} dataSource={data} scroll={{ y: 500 }} pagination />;
};

export default EventLists;

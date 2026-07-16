import { Button, Space, Table, Tag } from "antd";
import { EditOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Store #",
    dataIndex: "storeNumber",
    key: "storeNumber",
  },
  {
    title: "Store Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Parent",
    dataIndex: "parent",
    key: "parent",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={status === "ACTIVE" ? "green" : "red"}>
        {status}
      </Tag>
    ),
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <Space>
        <Button
          icon={<EditOutlined />}
          type="link"
        >
          Edit
        </Button>
      </Space>
    ),
  },
];

const data = [
  {
    key: 1,
    storeNumber: "1024",
    name: "Store #1024",
    parent: "Houston District",
    status: "ACTIVE",
  },
  {
    key: 2,
    storeNumber: "1025",
    name: "Store #1025",
    parent: "Houston District",
    status: "ACTIVE",
  },
  {
    key: 3,
    storeNumber: "1034",
    name: "Store #1034",
    parent: "Mumbai District",
    status: "ACTIVE",
  },
  {
    key: 4,
    storeNumber: "1037",
    name: "Store #1037",
    parent: "Bangalore District",
    status: "INACTIVE",
  },
];

function StoreTable() {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 8,
      }}
    />
  );
}

export default StoreTable;
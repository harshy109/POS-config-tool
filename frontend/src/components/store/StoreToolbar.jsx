import { Button, Input, Space, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;

function StoreToolbar({ onAddStore }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <Title level={3} style={{ margin: 0 }}>
        Store Management
      </Title>

      <Space>
        <Input.Search
          placeholder="Search stores..."
          style={{ width: 250 }}
          allowClear
        />

        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={onAddStore}
        >
          Add Store
        </Button>
      </Space>
    </div>
  );
}

export default StoreToolbar;
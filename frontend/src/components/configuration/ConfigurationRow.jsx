import { Col, Input, Row, Typography } from "antd";

const { Text } = Typography;

function ConfigurationRow({ setting, isEditing }) {
  return (
    <Row
      style={{
        padding: "10px 0",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Col span={10}>
        <Text strong>{setting.label}</Text>
      </Col>

      <Col span={14}>
        {isEditing ? <Input value={setting.value}></Input> : <Text>{setting.value}</Text>}
      </Col>
    </Row>
  );
}

export default ConfigurationRow;
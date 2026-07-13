import { Col, Row, Typography } from "antd";

const { Text } = Typography;

function ConfigurationRow({ setting }) {
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
        <Text>{setting.value}</Text>
      </Col>
    </Row>
  );
}

export default ConfigurationRow;
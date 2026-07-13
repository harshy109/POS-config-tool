import { Col, Form, Input, Row, Typography } from "antd";

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
        {isEditing ? (
          <Form.Item
              name={setting.key}
              style={{ marginBottom: 12 }}
          >
              <Input defaultValue={setting.value}/>
          </Form.Item>
        ) : (
          <Text>{setting.value}</Text>
        )}
      </Col>
    </Row>
  );
}

export default ConfigurationRow;

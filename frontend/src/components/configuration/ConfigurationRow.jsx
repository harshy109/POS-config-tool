import { Col, Form, Input, Row, Typography } from "antd";

const { Text } = Typography;

function ConfigurationRow({ setting, isEditing }) {
 const valueContent = isEditing ? (
    <Form.Item
      name={setting.key}
      className="configuration-form-item"
    >
      <Input />
    </Form.Item>
  ) : (
    <div className="configuration-value-content">
      <Text>{setting.value}</Text>
    </div>
  );

  return (
    <Row className="configuration-row">
      <Col span={10} className="configuration-label">
        <Text strong>{setting.label}</Text>
      </Col>

      <Col span={14} className="configuration-value">
        {valueContent}
      </Col>
    </Row>
  );
}

export default ConfigurationRow;

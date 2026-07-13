import { Divider, Tag, Typography } from "antd";

const { Title, Text } = Typography;

function ConfigurationHeader({ configuration }) {
  return (
    <>
      <Title level={4}>{configuration.storeName}</Title>

      <Tag color="green">{configuration.status}</Tag>

      <br />

      <Text type="secondary">
        {configuration.location.district},{" "}
        {configuration.location.state},{" "}
        {configuration.location.country}
      </Text>

      <Divider />
    </>
  );
}

export default ConfigurationHeader;
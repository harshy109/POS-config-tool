import { Divider, Tag, Typography } from "antd";
import storeImage from '../../assets/store-img.jpg' 
import '../../index.css'
const { Title, Text } = Typography;

function ConfigurationHeader({ configuration }) {
  const hierarchy = configuration.hierarchyPath;

  const district = hierarchy.find(node => node.type === "district");
  const state = hierarchy.find(node => node.type === "state");
  const country = hierarchy.find(node => node.type === "country");
  return (
    <>

      <div className="flex flex-row gap-7">
        <div className="store-icon">
          <img
            src={storeImage}
            alt="Store"
            height="50"
            width="80"
          />
        </div>

        <div>
          <Title level={4}>{configuration.node.name}</Title>

          <Tag color="green">
            {configuration.node.type.toUpperCase()}
          </Tag>

          <br />

          <Text type="secondary">
            {district?.name}, {state?.name}, {country?.name}
          </Text>
        </div>
      </div>

      <Divider />
    </>
  );
}

export default ConfigurationHeader;
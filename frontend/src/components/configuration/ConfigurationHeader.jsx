import { Divider, Tag, Typography } from "antd";
import storeImage from '../../assets/store-img.jpg' 
import '../../index.css'
const { Title, Text } = Typography;

function ConfigurationHeader({ configuration }) {
  return (
    <>

      <div className="flex flex-row gap-7" >
        <div className="store-icon">
          <img src={storeImage} alt="Store image" height='50px' width='80px' />
        </div>
        <div>
          <Title level={4}>{configuration.storeName}</Title>

          <Tag color="green">{configuration.status}</Tag>

          <br />

          <Text type="secondary">
            {configuration.location.district},{" "}
            {configuration.location.state},{" "}
            {configuration.location.country}
          </Text>
        </div>
      </div>

      <Divider />
    </>
  );
}

export default ConfigurationHeader;
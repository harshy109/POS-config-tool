import { Card } from "antd";
import ConfigurationRow from "./ConfigurationRow";

function ConfigurationSection({ title, settings }) {
  return (
    <Card
      title={title}
      size="small"
      style={{ marginTop: 20 }}
    >
      {settings.map((setting) => (
        <ConfigurationRow
          key={setting.key}
          setting={setting}
        />
      ))}
    </Card>
  );
}

export default ConfigurationSection;
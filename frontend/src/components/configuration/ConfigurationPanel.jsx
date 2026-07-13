import { Card, Empty } from "antd";
import storeConfigurations from "../../mocks/storeConfigurations";
import ConfigurationHeader from "./ConfigurationHeader";
import ConfigurationTab from "./ConfigurationTab";
import ConfigurationSection from "./ConfigurationSection";

function ConfigurationPanel({ selectedNodeId }) {
  if (!selectedNodeId) {
    return (
      <Card>
        <Empty description="Select a store to view configuration" />
      </Card>
    );
  }

  const configuration = storeConfigurations[selectedNodeId];

  if (!configuration) {
    return (
      <Card>
        <Empty description = "Configuration not available" />
      </Card>
    );
  }

  return (
    <Card style={{ height: "100%" }}>
      <ConfigurationHeader configuration={configuration} />

      <ConfigurationTab />

      <ConfigurationSection
        title="General Settings"
        settings={configuration.generalSettings}
      />
    </Card>
  );
}

export default ConfigurationPanel;
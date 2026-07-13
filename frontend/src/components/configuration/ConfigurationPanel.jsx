import { Card, Empty } from "antd";
import storeConfigurations from "../../mocks/storeConfigurations";
import ConfigurationHeader from "./ConfigurationHeader";
import ConfigurationTab from "./ConfigurationTab";
import ConfigurationSection from "./ConfigurationSection";
import {useState} from 'react';

function ConfigurationPanel({ selectedNodeId }) {
  const [isEditing, setIsEditing] = useState(false);
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
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </Card>
  );
}

export default ConfigurationPanel;
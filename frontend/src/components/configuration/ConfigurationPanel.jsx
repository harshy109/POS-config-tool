import { Card, Empty, Form } from "antd";
import storeConfigurations from "../../mocks/storeConfigurations";
import ConfigurationHeader from "./ConfigurationHeader";
import ConfigurationTab from "./ConfigurationTab";
import ConfigurationSection from "./ConfigurationSection";
import { useState } from "react";

function ConfigurationPanel({ selectedNodeId }) {
  const [isEditing, setIsEditing] = useState(false);
  const configuration = storeConfigurations[selectedNodeId];
  const [form] = Form.useForm();
  const [configurationData, setConfigurationData] = useState(configuration);

  function handleSave(){

    const values =
        form.getFieldsValue();

    console.log(values);

}

  if (!selectedNodeId) {
    return (
      <Card>
        <Empty description="Select a store to view configuration" />
      </Card>
    );
  }

  if (!configuration) {
    return (
      <Card>
        <Empty description="Configuration not available" />
      </Card>
    );
  }

  return (
    <Card style={{ height: "100%" }}>
      <ConfigurationHeader configuration={configuration} />

      <ConfigurationTab />

      <Form form={form} layout="vertical" initialValues={configuration}>
        <ConfigurationSection
          settings={configuration.generalSettings}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          form={form}
          handleSave
        />
      </Form>
    </Card>
  );
}

export default ConfigurationPanel;

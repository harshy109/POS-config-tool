import { Card, Empty, Form } from "antd";
import storeConfigurations from "../../mocks/storeConfigurations";
import ConfigurationHeader from "./ConfigurationHeader";
import ConfigurationTab from "./ConfigurationTab";
import ConfigurationSection from "./ConfigurationSection";
import ConfigurationActions from "./ConfigurationActions";
import { useState } from "react";

function ConfigurationPanel({ selectedNodeId }) {
  
  const [isEditing, setIsEditing] = useState(false);
  const configuration = storeConfigurations[selectedNodeId];

   if (!selectedNodeId) {
    return (
      <Card className="card">
        <Empty description="Select a store to view configuration" />
      </Card>
    );
  }

  if (!configuration) {
    return (
      <Card className="card">
        <Empty description="Configuration not available" />
      </Card>
    );
  }

  const [form] = Form.useForm();
  const [configurationData, setConfigurationData] = useState(configuration);
  const initialValues = {};

  configuration.generalSettings.forEach((setting) => {
      initialValues[setting.key] = setting.value;
  });

  console.log(initialValues);

  function handleSave(){
    const values = form.getFieldsValue();
    console.log(values);
    setConfigurationData(values);
    setIsEditing(false);
  }

  function handleEdit(){
    setIsEditing(true);
  }

  function handleCancel(){
    setIsEditing(false);
  }  

 

  return (
    <Card style={{ height: "100%" }} className="card">
      <ConfigurationHeader configuration={configuration} />

      <ConfigurationTab />

      <Form form={form} layout="vertical" initialValues={initialValues}>
        <ConfigurationSection
          title="General Settings"
          settings={configuration.generalSettings}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          form={form}
        />
      </Form>
      {/* <ConfigurationActions isEditing={isEditing} onSave={handleSave} onCancel={handleCancel} onEdit = {handleEdit}/> */}
      <div
    style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: 20
    }}
>
    <ConfigurationActions  isEditing={isEditing} onSave={handleSave} onCancel={handleCancel} onEdit = {handleEdit} />
</div>
    </Card>
  );
}

export default ConfigurationPanel;

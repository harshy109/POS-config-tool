import { Card, Empty, Form, Spin } from "antd";
// import storeConfigurations from "../../mocks/storeConfigurations";
import {
  fetchConfiguration,
  updateConfiguration,
} from "../../services/configurationService";
import ConfigurationHeader from "./ConfigurationHeader";
import ConfigurationTab from "./ConfigurationTab";
import ConfigurationSection from "./ConfigurationSection";
import ConfigurationActions from "./ConfigurationActions";
import { useState, useEffect } from "react";

function ConfigurationPanel({ selectedNodeId }) {
  const [isEditing, setIsEditing] = useState(false);
  const [configuration, setConfiguration] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (selectedNodeId) {
  //     setConfiguration(structuredClone(fetchConfiguration));
  //   }
  // }, [selectedNodeId]);

  useEffect(() => {
    async function loadConfiguration() {
      if (!selectedNodeId) {
        setConfiguration(null);
        return;
      }

      setLoading(true);

      try {
        const data = await fetchConfiguration(selectedNodeId);
        // console.log(data);
        setConfiguration(data);
      } catch (error) {
        console.error(error);

        setConfiguration(null);
      } finally {
        setLoading(false);
      }
    }

    loadConfiguration();
  }, [selectedNodeId]);

  const [form] = Form.useForm();

  useEffect(() => {
    if (!configuration) return;

    const initialValues = Object.fromEntries(
      configuration.generalSettings.map((setting) => [
        setting.key,
        setting.value,
      ]),
    );

    form.setFieldsValue(initialValues);
  }, [configuration, form]);

  if (loading) {
    return <Spin className="loading-spin"/>;
  }

  if (!selectedNodeId) {
    return (
      <Card className="card loading-spin">
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

  async function handleSave() {
    try {
      const values = form.getFieldsValue();

      const generalSettings =
        configuration.generalSettings.map(setting => ({
          ...setting,
          value: values[setting.key],
        }));

      const updatedConfiguration =
        await updateConfiguration(
          selectedNodeId,
          generalSettings
        );

      setConfiguration(updatedConfiguration);

      form.setFieldsValue(
        Object.fromEntries(
          updatedConfiguration.generalSettings.map(setting => [
            setting.key,
            setting.value,
          ])
        )
      );

      setIsEditing(false);

    } catch (error) {
      console.error(error);
    }
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleCancel() {
    setIsEditing(false);
  }

  console.log(configuration);
  return (
    <Card style={{ height: "100%" }} className="card">
      <ConfigurationHeader configuration={configuration} />

      <ConfigurationTab />

      <Form form={form} layout="vertical">
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
          marginTop: 20,
        }}
      >
        <ConfigurationActions
          isEditing={isEditing}
          onSave={handleSave}
          onCancel={handleCancel}
          onEdit={handleEdit}
        />
      </div>
    </Card>
  );
}

export default ConfigurationPanel;

import { Tabs } from "antd";

function ConfigurationTab() {
  const items = [
    {
      key: "general",
      label: "Configuration",
    },
    {
      key: "override",
      label: "Overrides",
    },
    {
      key: "history",
      label: "History",
    },
    {
      key: "propagation",
      label: "Propagation",
    },
  ];

  return <Tabs defaultActiveKey="general" items={items} />;
}

export default ConfigurationTab;
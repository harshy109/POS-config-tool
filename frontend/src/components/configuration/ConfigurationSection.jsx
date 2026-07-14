import { Card } from "antd";
import ConfigurationRow from "./ConfigurationRow";
import ConfigurationActions from "./ConfigurationActions";

function ConfigurationSection({ title, settings, isEditing,form, setIsEditing }) {
    
  return (
    <>
    <Card
      title={title}
      size="medium"
    >
      {settings.map((setting) => (
        <ConfigurationRow
          key={setting.key}
          setting={setting}
          isEditing = {isEditing}
          setIsEditing = {setIsEditing}
        />
      ))}
      
    </Card>
    </>
  );
}

export default ConfigurationSection;
import { Card } from "antd";
import ConfigurationRow from "./ConfigurationRow";
import ConfigurationActions from "./ConfigurationActions";

function ConfigurationSection({ title, settings, isEditing,form, setIsEditing }) {
    
  return (
    <>
    <Card
      title={title}
      size="small"
      style={{ marginTop: 20 }}
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
    <ConfigurationActions isEditing={isEditing} setIsEditing={setIsEditing}/>
    </>
  );
}

export default ConfigurationSection;
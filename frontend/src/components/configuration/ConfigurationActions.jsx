import { Button, Space } from "antd";
import "./Configuration.css"
function ConfigurationActions({
    isEditing,
    onEdit,
    onSave,
    onCancel
}) {

    if(!isEditing){

        return (
            <Button
                type="primary"
                onClick={onEdit}
            >
                Edit
            </Button>
        );
    }

    return (

        <Space>

            <Button
                onClick={onCancel}
            >
                Cancel
            </Button>

            <Button
                type="primary"
                onClick={onSave}
            >
                Save
            </Button>

        </Space>

    );

}

export default ConfigurationActions;
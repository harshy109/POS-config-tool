import { Empty } from "antd";
import storeConfigurations from "../../mocks/storeConfigurations";
import ConfigurationHeader from "./ConfigurationHeader"
import "./Configuration.css"
function ConfigurationPanel({ selectedNodeId }) {

    const configuration = storeConfigurations.findIndex(selectedNodeId) ? storeConfigurations[selectedNodeId]: null;
    // const configuration = await api.get(`/stores/${selectedNodeId}`);

    if(!selectedNodeId){
        return (
            <Empty
                description="Select a store to view configuration"
            />
        );
    }

    // if(!configuration){
    //     return (
    //         <Empty
    //             description="No configuration available"
    //         />
    //     );
    // }

    return (
        <div className="configuration-panel">
            {!configuration && (<Empty description="No configuration available"/>)}
            <ConfigurationHeader configuration = {configuration}/>
        </div>
    );
}

export default ConfigurationPanel;
import HierarchyPanel from "../components/hierarchy/HierarchyPanel";
import { useState } from "react";
import ConfigurationPanel from "../components/configuration/ConfigurationPanel";
import "./StoreHierarchy.css"

function StoreHierarchy() {
  const [selectedNodeId, setSelectedNodeId] = useState("");

  return (
    <>
      <div className="store-page">
        <HierarchyPanel
          selectedNodeId={selectedNodeId}
          setSelectedNodeId={setSelectedNodeId}
        />
        <ConfigurationPanel selectedNodeId={selectedNodeId} />
      </div>
    </>
  );
}

export default StoreHierarchy;

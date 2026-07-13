import HierarchyPanel from "../components/hierarchy/HierarchyPanel";
import { useState } from "react";
import ConfigurationPanel from "../components/configuration/ConfigurationPanel";
function StoreHierarchy() {
  const [selectedNodeId, setSelectedNodeId] = useState("");

  return (
    <>
      <div className="store-page" style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
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

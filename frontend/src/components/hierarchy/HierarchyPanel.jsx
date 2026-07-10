import storeHierarchy from "../../mocks/storeHierarchy";
import TreeNode from "./TreeNode";
import {useState} from 'react';

function HierarchyPanel() {
  //console.log(storeHierarchy);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  return (
    <div className="hierarchy-panel">
      {storeHierarchy.map(node => (
    <TreeNode key={node.id} node={node} selectedNodeId = {selectedNodeId} setSelectedNodeId= {setSelectedNodeId}/>
))}
    </div>
  );
}

export default HierarchyPanel;
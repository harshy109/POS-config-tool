import { useState } from "react";
import { Button, Collapse } from "antd";
import {
  CaretDownOutlined,
  CaretLeftOutlined,
  FolderOpenOutlined,
  FolderOutlined,
  ShopOutlined,
} from "@ant-design/icons";

function TreeNode({ node,selectedNodeId, setSelectedNodeId }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isSelected, setIsSelected] = useState(node.id === selectedNodeId);

  function handleCollapse(e) {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  }

  return (
    <div>
      <div 
      style={!isSelected && {backgroundColor: "lightgoldenrodyellow"} }
      onClick={(e)=>setSelectedNodeId(node.id)}
      >
        {node.children.length > 0 && (
          <Button type="text" size="small" onClick={handleCollapse}>
            {isExpanded ? <CaretDownOutlined /> : <CaretRightOutlined />}
          </Button>
        )}
        <ShopOutlined />
        {node.name}
      </div>

      {isExpanded && (
        <div style={{ marginLeft: 20 }}>
          {node.children.length > 0 &&
            node.children.map((child) => (
              <TreeNode key={child.id} node={child}></TreeNode>
            ))}
        </div>
      )}
    </div>
  );
}

export default TreeNode;

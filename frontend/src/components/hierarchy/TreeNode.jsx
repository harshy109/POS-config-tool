import { useState } from "react";
import { Button, Collapse } from "antd";
import {
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  FolderOpenOutlined,
  FolderOutlined,
  GlobalOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import "./TreeNode.css";
import { highlightText } from "../../utils/highlightText";

function TreeNode({ node, selectedNodeId, setSelectedNodeId, searchInput }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const isSelected = node.id === selectedNodeId;
  const hasChildren = node.children.length > 0;

  function handleCollapse(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  }

  function handleSelect() {
    // console.time("select");
    setSelectedNodeId(node.id);
  }

  function getHierarchyIcon(type) {
    switch (type) {
      case "store":
        return <ShopOutlined />;
      case "global":
        return <GlobalOutlined />;
      default:
        return <FolderOutlined />;
    }
  }

  //  console.log("Rendering : ", node.name);

  return (
    <div>
      <div
        className={`tree-node ${isSelected ? "selected" : ""}`}
        onClick={handleSelect}
      >
        {hasChildren && (
          <Button type="text" size="small" onClick={handleCollapse}>
            {isExpanded ? <CaretDownOutlined /> : <CaretRightOutlined />}
          </Button>
        )}
        {/* <ShopOutlined /> */}
        {getHierarchyIcon(node.type)}
        {/* {node.name} */}
        <span>{highlightText(node.name, searchInput)}</span>
      </div>

      {isExpanded && (
        <div className="tree-children">
          {node.children.length > 0 &&
            node.children.map((child) => (
              <TreeNode
                key={child.id}
                node={child}
                selectedNodeId={selectedNodeId}
                setSelectedNodeId={setSelectedNodeId}
                searchInput={searchInput}
              ></TreeNode>
            ))}
        </div>
      )}
    </div>
  );
}

export default TreeNode;

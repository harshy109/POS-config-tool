import { Empty, Input } from "antd";
import storeHierarchy from "../../mocks/storeHierarchy";
import HierarchySearch from "./HierarchySearch.jsx";
import TreeNode from "./TreeNode";
import { useState } from "react";
import {filterTree} from "../../utils/filterTree.js";

function HierarchyPanel() {
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const treeToRender = searchInput.trim() ? filterTree(searchInput, storeHierarchy) ?? storeHierarchy: storeHierarchy;


  // function debouncedSearch(){
  //   const searchResult = filterTree(searchInput, storeHierarchy);
  //   console.log("Search result: ", searchResult);
  //   setFilteredTree(searchResult);
  // }

  return (
    <div className="hierarchy-panel">
      <HierarchySearch
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {treeToRender.length === 0 ? 
        <Empty description="No matching results found."/>
      :
      treeToRender.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          selectedNodeId={selectedNodeId}
          setSelectedNodeId={setSelectedNodeId}
        />
      ))}
      
    </div>
  );
}

export default HierarchyPanel;

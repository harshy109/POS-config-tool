import { Input } from "antd";
import storeHierarchy from "../../mocks/storeHierarchy";
import HierarchySearch from "./HierarchySearch.jsx";
import TreeNode from "./TreeNode";
import { useState } from "react";
import {filterTree} from "../../utils/filterTree.js"

function HierarchyPanel() {
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredTree, setFilteredTree] = useState(null);


  function debouncedSearch(){
    const searchResult = filterTree(searchInput, storeHierarchy);
    console.log("Search result: ", searchResult);
    setFilteredTree(searchResult);
  }

  return (
    <div className="hierarchy-panel">
      <HierarchySearch
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        tree={storeHierarchy}
        onSearch={debouncedSearch}
      />
      {!filteredTree && storeHierarchy.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          selectedNodeId={selectedNodeId}
          setSelectedNodeId={setSelectedNodeId}
        />
      ))}
      {filteredTree && 
      filteredTree.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          selectedNodeId={selectedNodeId}
          setSelectedNodeId={setSelectedNodeId}
        />
      ))
    }
    </div>
  );
}

export default HierarchyPanel;

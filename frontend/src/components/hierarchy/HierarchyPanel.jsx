import { Empty, Input , Spin} from "antd";
// import fetchHierarchy from "../../mocks/fetchHierarchy";
import { fetchHierarchy } from "../../services/hierarchyService";
import HierarchySearch from "./HierarchySearch.jsx";
import TreeNode from "./TreeNode";
import { useState , useEffect} from "react";
import {filterTree} from "../../utils/filterTree.js";
import "./HierarchyPanel.css"
function HierarchyPanel({selectedNodeId, setSelectedNodeId}) {
  // const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [hierarchy, setHierarchy] = useState([]);
  const [loading, setLoading] = useState(true);
   const treeToRender = searchInput.trim() ? filterTree(searchInput, hierarchy): hierarchy;

  useEffect(() => {
  async function loadHierarchy() {
    try {
      const data = await fetchHierarchy();
      setHierarchy(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  loadHierarchy();
}, []);

if (loading) {
  return <Spin size="large" />;
}

  return (
    <div className="hierarchy-panel bg-green-100">
      <div>
        <HierarchySearch
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      </div>
      <div className="hierarchy-tree">
        {treeToRender.length === 0 ? 
        <Empty description="No matching results found."/>
      :
      treeToRender.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          selectedNodeId={selectedNodeId}
          setSelectedNodeId={setSelectedNodeId}
          searchInput = {searchInput}
        />
      ))}
      </div>
      
    </div>
  );
}

export default HierarchyPanel;

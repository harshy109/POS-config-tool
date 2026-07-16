import { SearchOutlined } from "@ant-design/icons";
import "./HierarchySearch.css";
import { Input } from "antd";
import "./HierarchySearch.css"

const HierarchySearch = ({ searchInput, setSearchInput }) => {
  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }

  return (
    <div className="hierarchy-search">
      <Input.Search
        placeholder="Search"
        style={{ width: 280 }}
        value={searchInput}
        onChange={handleSearchInput}
      />
    </div>
  );
};

export default HierarchySearch;

import { SearchOutlined } from "@ant-design/icons";
import "./HierarchySearch.css";
import { Input } from "antd";
const HierarchySearch = ({ searchInput, setSearchInput, onSearch }) => {
  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }

  return (
    <div>
      <Input.Search
        placeholder="Search"
        style={{ width: 280 }}
        value={searchInput}
        onChange={handleSearchInput}
        onSearch={onSearch}
      />
    </div>
  );
};

export default HierarchySearch;

import { Card } from "antd";
import { useState } from "react";

import HierarchyPanel from "../components/hierarchy/HierarchyPanel";
import StoreToolbar from "../components/store/StoreToolbar";
import StoreTable from "../components/store/StoreTable";
import AddStoreModal from "../components/store/AddStoreModal";

function StoreManagement() {

  const [isAddStoreOpen, setIsAddStoreOpen] = useState(false);

  return (
    <>
      <StoreToolbar
        onAddStore={() => setIsAddStoreOpen(true)}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        <Card>
          <HierarchyPanel />
        </Card>

        <Card>
          <StoreTable />
        </Card>
      </div>

      <AddStoreModal
        open={isAddStoreOpen}
        onCancel={() => setIsAddStoreOpen(false)}
      />
    </>
  );
}

export default StoreManagement;
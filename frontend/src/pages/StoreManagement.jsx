import { Card } from "antd";
import { useState } from "react";
import { createStore }
from "../services/storeService";
import HierarchyPanel from "../components/hierarchy/HierarchyPanel";
import StoreToolbar from "../components/store/StoreToolbar";
import StoreTable from "../components/store/StoreTable";
import AddStoreModal from "../components/store/AddStoreModal";

function StoreManagement() {
const [creating, setCreating] = useState(false);
  const [isAddStoreOpen, setIsAddStoreOpen] = useState(false);
    async function handleCreateStore(values){

    try{

        setCreating(true);

        await createStore(values);

        alert("Store created successfully");
        setIsAddStoreOpen(false);

        return true;

    }
    catch(error){

       alert("Error");

        return false;

    }
    finally{

        setCreating(false);

    }

}

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
    onCreate={handleCreateStore}
    loading={creating}
/>
    </>
  );
}

export default StoreManagement;
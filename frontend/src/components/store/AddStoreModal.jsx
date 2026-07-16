import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  TreeSelect,
} from "antd";

const hierarchyData = [
  {
    title: "Global",
    value: 1,
    children: [
      {
        title: "North America",
        value: 2,
        children: [
          {
            title: "USA",
            value: 5,
            children: [
              {
                title: "Texas",
                value: 11,
                children: [
                  {
                    title: "Houston District",
                    value: 18,
                  },
                  {
                    title: "Dallas District",
                    value: 19,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Asia Pacific",
        value: 4,
        children: [
          {
            title: "India",
            value: 9,
            children: [
              {
                title: "Maharashtra",
                value: 15,
                children: [
                  {
                    title: "Mumbai District",
                    value: 24,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

function AddStoreModal({ open, onCancel }) {
  const [form] = Form.useForm();

  function handleCreate() {
    form.validateFields().then(values => {
      console.log(values);

      form.resetFields();

      onCancel();
    });
  }

  return (
    <Modal
      title="Add Store"
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="create"
          type="primary"
          onClick={handleCreate}
        >
          Create Store
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
      >
        <Form.Item
          label="Store Number"
          name="storeNumber"
          rules={[
            {
              required: true,
              message: "Enter store number",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Store Name"
          name="storeName"
          rules={[
            {
              required: true,
              message: "Enter store name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Parent Node"
          name="parentId"
          rules={[
            {
              required: true,
              message: "Select parent node",
            },
          ]}
        >
          <TreeSelect
            treeData={hierarchyData}
            placeholder="Select Parent"
            treeDefaultExpandAll
          />
        </Form.Item>

        <Form.Item
          label="Timezone"
          name="timezone"
        >
          <Select
            options={[
              { label: "UTC", value: "UTC" },
              { label: "CST", value: "CST" },
              { label: "EST", value: "EST" },
              { label: "IST", value: "IST" },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          initialValue="ACTIVE"
        >
          <Select
            options={[
              {
                label: "ACTIVE",
                value: "ACTIVE",
              },
              {
                label: "INACTIVE",
                value: "INACTIVE",
              },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddStoreModal;
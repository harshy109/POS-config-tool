import {
  AppstoreOutlined,
  BarChartOutlined,
  CheckCircleOutlined,
  DashboardOutlined,
  DeploymentUnitOutlined,
  FileTextOutlined,
  SettingOutlined,
  ShopOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'

const { Sider } = Layout

const menuItems = [
  { key: '/', icon: <DashboardOutlined />, label: <Link to="/">Dashboard</Link> },
  { key: '/hierarchy', icon: <ShopOutlined />, label: <Link to="/hierarchy">Store Hierarchy</Link> },
  { key: '/configurations', icon: <SettingOutlined />, label: <Link to="/configurations">Configurations</Link> },
  { key: '/overrides', icon: <FileTextOutlined />, label: <Link to="/overrides">Overrides</Link> },
  { key: '/templates', icon: <AppstoreOutlined />, label: <Link to="/templates">Templates</Link> },
  { key: '/deployment', icon: <DeploymentUnitOutlined />, label: <Link to="/deployment">Deployment</Link> },
  { key: '/approvals', icon: <CheckCircleOutlined />, label: <Link to="/approvals">Approvals</Link> },
  { key: '/reports', icon: <BarChartOutlined />, label: <Link to="/reports">Reports</Link> },
  { key: '/users', icon: <TeamOutlined />, label: <Link to="/users">Users</Link> },
  { key: '/settings', icon: <SettingOutlined />, label: <Link to="/settings">Settings</Link> },
]

const Sidebar = () => {
  const location = useLocation()

  return (
    <Sider width={260} theme="light" style={{ borderRight: '1px solid #eaecf0' }}>
      <Menu
        mode="inline"
        items={menuItems}
        selectedKeys={[location.pathname]}
        style={{ borderRight: 0, paddingTop: 16 }}
      />
    </Sider>
  )
}

export default Sidebar

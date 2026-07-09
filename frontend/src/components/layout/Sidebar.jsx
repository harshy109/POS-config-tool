import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { SIDEBAR_ITEMS } from '../../constants/sidebarMenu'

const { Sider } = Layout

const Sidebar = () => {
  const location = useLocation()
  const menuItems = SIDEBAR_ITEMS.map((item) => ({
    ...item,
    label: <Link to={item.key}>{item.label}</Link>,
  }))

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

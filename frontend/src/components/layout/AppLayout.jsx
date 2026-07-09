import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const { Content } = Layout

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content style={{ padding: 24 }}>
          <div style={{ marginBottom: 16, color: '#667085' }}>Home / Dashboard</div>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout

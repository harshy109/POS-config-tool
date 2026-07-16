import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import Configurations from '../pages/Configuration'
import Dashboard from '../pages/Dashboard'
import Settings from '../pages/Settings'
import StoreHierarchy from '../pages/StoreHierarchy'
import StoreManagement from '../pages/StoreManagement'

const PlaceholderPage = ({ title }) => {
  return <h1>{title}</h1>
}

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hierarchy" element={<StoreHierarchy />} />
          <Route path="/configurations" element={<Configurations />} />
          <Route path="/store" element={<StoreManagement />} />
          <Route path="/overrides" element={<PlaceholderPage title="Overrides" />} />
          <Route path="/templates" element={<PlaceholderPage title="Templates" />} />
          <Route path="/deployment" element={<PlaceholderPage title="Deployment" />} />
          <Route path="/approvals" element={<PlaceholderPage title="Approvals" />} />
          <Route path="/reports" element={<PlaceholderPage title="Reports" />} />
          <Route path="/users" element={<PlaceholderPage title="Users" />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

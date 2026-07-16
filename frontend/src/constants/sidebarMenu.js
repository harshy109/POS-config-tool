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
import { createElement } from 'react'

export const SIDEBAR_ITEMS = [
  {
    key: '/',
    label: 'Dashboard',
    icon: createElement(DashboardOutlined),
  },
  {
    key: '/hierarchy',
    label: 'Store Hierarchy',
    icon: createElement(ShopOutlined),
  },
  {
    key: '/store',
    label: 'Store Management',
    icon: createElement(ShopOutlined ),
  },
  {
    key: '/configurations',
    label: 'Configurations',
    icon: createElement(SettingOutlined),
  },
  {
    key: '/overrides',
    label: 'Overrides',
    icon: createElement(FileTextOutlined),
  },
  {
    key: '/templates',
    label: 'Templates',
    icon: createElement(AppstoreOutlined),
  },
  {
    key: '/deployment',
    label: 'Deployment',
    icon: createElement(DeploymentUnitOutlined),
  },
  {
    key: '/approvals',
    label: 'Approvals',
    icon: createElement(CheckCircleOutlined),
  },
  {
    key: '/reports',
    label: 'Reports',
    icon: createElement(BarChartOutlined),
  },
  {
    key: '/users',
    label: 'Users',
    icon: createElement(TeamOutlined),
  },
  {
    key: '/settings',
    label: 'Settings',
    icon: createElement(SettingOutlined),
  },
]

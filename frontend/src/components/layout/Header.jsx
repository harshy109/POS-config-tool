import { BellOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Avatar, Badge, Input, Layout, Space, Typography } from 'antd'

const { Header: AntHeader } = Layout
const { Text } = Typography

const Header = () => {
  return (
    <AntHeader
      style={{
        alignItems: 'center',
        background: '#ffffff',
        borderBottom: '1px solid #eaecf0',
        display: 'flex',
        gap: 24,
        height: 64,
        justifyContent: 'space-between',
        padding: '0 24px',
      }}
    >
      <Space size={12}>
        <div
          style={{
            alignItems: 'center',
            background: '#1677ff',
            borderRadius: 6,
            color: '#ffffff',
            display: 'flex',
            fontWeight: 700,
            height: 36,
            justifyContent: 'center',
            width: 36,
          }}
        >
          POS
        </div>
        <Text strong style={{ fontSize: 18 }}>
          POS Configuration Tool
        </Text>
      </Space>

      <Space size={20}>
        <Input.Search placeholder="Search" style={{ width: 280 }} />
        <Badge count={3} size="small">
          <BellOutlined style={{ fontSize: 20 }} />
        </Badge>
        <QuestionCircleOutlined style={{ fontSize: 20 }} />
        <Avatar style={{ backgroundColor: '#1677ff' }}>U</Avatar>
      </Space>
    </AntHeader>
  )
}

export default Header

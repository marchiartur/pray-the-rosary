import { Tabs, type TabsProps } from 'antd'
import React from 'react'
import useDeviceSize from 'src/hooks/useDeviceSize'
import { type Tab } from 'rc-tabs/lib/interface'

interface DesktopOrMobileTabsProps extends TabsProps {
  index?: number
  items?: Tab[]
}

const DesktopOrMobileTabs = ({ index, items, className }: DesktopOrMobileTabsProps): JSX.Element => {
  const window = useDeviceSize()

  console.log(className)

  return (
    <Tabs
      tabPosition={window.width >= 1024 ? 'left' : 'top'}
      defaultActiveKey="1"
      key={`tab__${index ?? 0}`}
      tabBarGutter={window.width >= 1024 ? 0 : undefined}
      size="small"
      items={items}
      className={className}
    />
  )
}

export default DesktopOrMobileTabs

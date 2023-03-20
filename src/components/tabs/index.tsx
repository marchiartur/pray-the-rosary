import React from 'react'
import { Tabs as AntdTabs } from 'antd'
import { type TabsProps } from './index.interface'

const Tabs: React.FunctionComponent = (props: TabsProps): JSX.Element => {
  const { children } = props

  return (
    <AntdTabs {...props}>{children}</AntdTabs>
  )
}

export default Tabs

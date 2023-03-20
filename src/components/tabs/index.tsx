import React from 'react'
import { Tabs as AntdTabs } from 'antd'
import { TabsProps } from './index.interface';

const Tabs = (props: TabsProps) => {
  const { children } = props;

  return (
    <AntdTabs {...props}>{children}</AntdTabs>
  )
}

export default Tabs
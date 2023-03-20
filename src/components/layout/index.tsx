import React, { type PropsWithChildren } from 'react'
import Header from './header'

interface LayoutProps {
  name?: 'Layout'
}

const Layout: React.FunctionComponent<PropsWithChildren<LayoutProps>> = (props) => {
  return (
    <React.Fragment {...props}>
      <Header />

      {props?.children}
    </React.Fragment>
  )
}

export default Layout

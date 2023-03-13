import React, { PropsWithChildren } from 'react';
import Header from './header';

interface LayoutProps {
  name?: 'Layout';
}

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  return (
    <React.Fragment {...props}>
      <Header></Header>

      {props?.children}
    </React.Fragment>
  );
};

export default Layout;

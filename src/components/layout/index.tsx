import React, { type PropsWithChildren } from 'react'
import Header from './header'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { INDEX_PAGE_NAME } from 'src/helpers/namespaces'

interface LayoutProps {
  name?: 'Layout'
}

const Layout: React.FunctionComponent<PropsWithChildren<LayoutProps>> = (props) => {
  const { t } = useTranslation(INDEX_PAGE_NAME)

  const browserTitle = t('browserTitle')

  return (
    <React.Fragment {...props}>
      <Header />

      <Head>
        <title>{browserTitle}</title>
        <meta property="og:title" content={browserTitle} key="title" />
      </Head>

      {props?.children}
    </React.Fragment>
  )
}

export default Layout

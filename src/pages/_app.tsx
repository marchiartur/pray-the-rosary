import React, { useMemo } from 'react'

import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import enUS from 'antd/locale/en_US'
import ptBR from 'antd/locale/pt_BR'
import { LanguageCode } from 'locales'
import useTranslation from 'next-translate/useTranslation'
import type { AppProps } from 'next/app'

import { MainLayout } from 'src/components'

const MyApp: React.FC<AppProps> = ({ Component }) => {
  const { lang } = useTranslation()

  const memoizedLocale = useMemo(() => {
    switch (lang) {
      case LanguageCode.BRAZILIAN_PORTUGUESE:
        return ptBR
      case LanguageCode.AMERICAN_ENGLISH:
        return enUS
      default:
        return ptBR
    }
  }, [lang])

  return (
    <ConfigProvider locale={memoizedLocale}>
      <MainLayout>
        <Component />
      </MainLayout>
    </ConfigProvider>
  )
}

export default MyApp

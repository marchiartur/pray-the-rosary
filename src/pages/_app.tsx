import React, { useEffect, useMemo } from 'react'

import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import enUS from 'antd/locale/en_US'
import ptBR from 'antd/locale/pt_BR'
import { LanguageCode } from 'locales'
import useTranslation from 'next-translate/useTranslation'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { getDefaultOptions } from 'date-fns'
import { setDateFnsDefaultOptions } from 'src/helpers/date'

const MainLayout = dynamic(async () => await import('src/components').then(layout => layout.MainLayout), { ssr: false })

interface DateFnsDefaultOptions {
  locale?: any
}

const MyApp: React.FC<AppProps> = ({ Component }) => {
  const { lang } = useTranslation()
  const defaultOptionsDateFns: DateFnsDefaultOptions = getDefaultOptions()

  useEffect(() => {
    if ((defaultOptionsDateFns?.locale) == null) {
      setDateFnsDefaultOptions(lang)
    }
  }, [defaultOptionsDateFns])

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

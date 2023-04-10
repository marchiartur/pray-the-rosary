import React, { useState, useRef, type RefObject } from 'react'
import { Drawer, Layout, Menu, Row } from 'antd'
import SelectCountry from 'src/domains/countries/SelectCountry'
import styles from './header.module.css'
import setLanguage from 'next-translate/setLanguage'
import useTranslation from 'next-translate/useTranslation'
import { setDateFnsDefaultOptions } from 'src/helpers/date'
import { MENU_NAMESPACE } from 'src/helpers/namespaces'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useDeviceSize from 'src/hooks/useDeviceSize'
import { MenuOutlined } from '@ant-design/icons'

const Routes = new Map([
  ['/', 'rosary'],
  ['/daily', 'daily']
])

const Header: React.FunctionComponent = (): JSX.Element => {
  async function onSelectLanguage (value: string, option: any): Promise<void> {
    setDateFnsDefaultOptions(value)

    await setLanguage(value)
  }

  const { t, lang } = useTranslation(MENU_NAMESPACE)
  const router = useRouter()

  const ref: RefObject<HTMLDivElement> = useRef(null)
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)

  const window = useDeviceSize()

  function renderMenuLabel ({ href, label }: { href: string, label: string }): JSX.Element {
    return (
      <Link href={href}>
        {label}
      </Link>
    )
  }

  const ITEMS = [
    {
      key: 'rosary',
      label: renderMenuLabel({ href: '/', label: t('rosaryMenu') })
    },
    {
      key: 'daily',
      label: renderMenuLabel({ href: '/daily', label: t('dailyMenu') })
    }
  ]

  function renderDefaultSelectedKeys (): string[] {
    return [Routes.get(router.pathname) ?? ' ']
  }

  function toggleDrawerVisibility (): void {
    setIsDrawerVisible(!isDrawerVisible)
  }

  return (
    <Layout.Header>
      {window?.width > 768
        ? (
          <Menu
            theme="dark"
            mode="horizontal"
            items={ITEMS}
            style={{
              float: 'left',
              width: `calc(100% - ${ref.current?.getBoundingClientRect().width ?? 0}px)`
            }}
            defaultSelectedKeys={renderDefaultSelectedKeys()}
          />
          )
        : (
        <>
          <MenuOutlined style={{ color: 'white' }} onClick={toggleDrawerVisibility}/>
        </>
          )}

      <Row justify="end" align="middle" className={styles.headerRow} ref={ref} >
        <SelectCountry
          handleOnSelect={onSelectLanguage}
          defaultValue={lang}
          variableCountryAttribute="language"
          showFlag={false}
        />
      </Row>

      <Drawer
        open={isDrawerVisible}
        placement='left'
        title={t('menuTitle')}
        style={{
          width: `calc(${window.width} - 100px) !important`
        }}
        onClose={toggleDrawerVisibility}
      >
        <Menu
          theme="light"
          mode="vertical"
          items={ITEMS}
          className={styles.menu}
          defaultSelectedKeys={renderDefaultSelectedKeys()}
          onClick={toggleDrawerVisibility}
          style={{
            borderInlineEnd: ''
          }}
        />
      </Drawer>
    </Layout.Header>
  )
}

export default Header

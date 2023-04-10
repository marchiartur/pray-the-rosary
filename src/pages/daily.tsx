import { Col, Row } from 'antd'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import DesktopOrMobileTabs from 'src/components/desktopOrMobileTabs'
import MultipleCollapsiblePrays from 'src/components/multipleCollapsiblePrays'
import { Pray } from 'src/domains/prays/interface'
import { DAILY_NAMESPACE, type DailyContentNameSpace } from 'src/helpers/namespaces'

import styles from './daily.module.css'
import { Text, Title } from 'src/components'

const Daily = (): JSX.Element => {
  const { t } = useTranslation()
  const daily: any = t(`${DAILY_NAMESPACE}:.`, { count: 1 }, { returnObjects: true })
  const dailyContent: DailyContentNameSpace = daily?.content

  const DAILY_KEYS = [
    'afterWakeUp',
    'afterWakeUpAndDressUp',
    'beforeWork',
    'beforeMeal',
    'afterMeal',
    'beforeSleep',
    'beforeFallingSleep'
  ]

  const DAILY_PRAYS: Array<{ label: JSX.Element, key: string, children: JSX.Element }> = DAILY_KEYS.map((element) => {
    const item = dailyContent[element]

    const formattedPrays = item?.prays?.map(pray => {
      return {
        pray: new Pray({ key: pray }),
        times: 1
      }
    })

    return {
      label: (
        <>
        {item?.name}
        </>
      ),
      key: element,
      children: <MultipleCollapsiblePrays
      header={{
        description: item.description,
        title: item?.name
      }}
      prays={formattedPrays ?? []}
      />
    }
  })

  return (
    <Col className={styles.col}>
      <Row className={styles.row}>
        <Title level={3}>
          {daily?.title}
        </Title>
      </Row>

      <Row className={styles.rowDescription}>
        <Text>
          {daily.description}
        </Text>
      </Row>

      <DesktopOrMobileTabs className={styles.tabs} items={DAILY_PRAYS} />
    </Col>
  )
}

export default Daily

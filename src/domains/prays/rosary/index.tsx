import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Tabs, TextMultipleLines } from 'src/components'
import { PRAYS_NAMESPACE, Pray, PraysNamespaceAttributes } from '../index'
import { Row } from 'antd'

import styles from './index.module.css'

interface RosaryPrayProps {
  children?: React.ReactNode
}

const RosaryPray = (props: RosaryPrayProps) => {
  const PRAYS = ["paterNoster", "gloriaPatri"]

  const { t } = useTranslation(PRAYS_NAMESPACE);
  const namespaceKeys: PraysNamespaceAttributes = t(`${PRAYS_NAMESPACE}:.`, { count: 1 }, { returnObjects: true })

  return (
    <Row justify="center" className={styles.row}>
      <Tabs
        tabPosition='left'
        defaultActiveKey="1"
        items={PRAYS.map((value, index) => {
          const id = String(index);

          const translatedPray = namespaceKeys[value]

          const currentPray = new Pray(translatedPray.name, translatedPray.pray).getAttributes()

          console.log(currentPray)

          return {
            label: currentPray.name,
            key: id,
            children: <TextMultipleLines text={currentPray.pray} />,
          };
        })} />

      {props.children}
    </Row>
  )
}

export default RosaryPray
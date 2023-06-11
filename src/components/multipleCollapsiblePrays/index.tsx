import type MultipleCollapsiblePraysItem from './MultipleCollapsiblePraysItem'
import styles from './index.module.css'
import { Col, Collapse, Divider, Row, Space } from 'antd'
import { Collapse as MobileCollapse } from 'antd-mobile'
import React from 'react'
import { Text, TextMultipleLines, Title } from 'src/components'
import { Pray } from 'src/domains/prays/interface'
import useDeviceSize from 'src/hooks/useDeviceSize'

interface MultipleCollapsiblePraysProps {
  prays?: MultipleCollapsiblePraysItem[]
  header?: {
    description?: string
    title?: string
  }
  width?: number
}

const MultipleCollapsiblePrays = (
  props: MultipleCollapsiblePraysProps
): JSX.Element => {
  const { prays = [], header } = props

  const window = useDeviceSize()

  return (
    <Space direction="vertical" className={styles.space}>
      <Title level={5} className={styles.title}>
        {header?.title}
      </Title>

      <Text>{header?.description}</Text>

      {prays.map((element, index) => {
        function renderHeader(): string {
          const formattedTitle = element.pray.name

          if (element.times > 1) {
            return formattedTitle + ' ' + `(${element.times}x)`
          }

          return formattedTitle
        }

        const CollapseComponent = window.width < 768 ? MobileCollapse : Collapse

        const latinPray = new Pray({ key: element.pray.key, latin: true })

        const vernacularPray = <TextMultipleLines text={element.pray.content} />

        return (
          <CollapseComponent
            accordion
            size="small"
            key={element.pray.name + index.toString()}
          >
            <CollapseComponent.Panel
              key={element.pray.name}
              title={renderHeader()}
              header={renderHeader()}
            >
              {latinPray.content.length > 0 ? (
                <Row>
                  <Col span={10}>{vernacularPray}</Col>

                  <Col span={1}>
                    <Divider type="vertical" className={styles.divider} />
                  </Col>

                  <Col span={10}>
                    <TextMultipleLines text={latinPray.content} />
                  </Col>
                </Row>
              ) : (
                <>{vernacularPray}</>
              )}
            </CollapseComponent.Panel>
          </CollapseComponent>
        )
      })}
    </Space>
  )
}

export default MultipleCollapsiblePrays

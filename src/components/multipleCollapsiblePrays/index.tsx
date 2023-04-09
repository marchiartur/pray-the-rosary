import React from 'react'
import { Text, TextMultipleLines, Title } from 'src/components'
import { Collapse as MobileCollapse } from 'antd-mobile'
import styles from './index.module.css'
import { Collapse, Space } from 'antd'
import useDeviceSize from 'src/hooks/useDeviceSize'
import type MultipleCollapsiblePraysItem from './MultipleCollapsiblePraysItem'

interface MultipleCollapsiblePraysProps {
  prays?: MultipleCollapsiblePraysItem[]
  header?: {
    description?: string
    title?: string
  }
  width?: number
}

const MultipleCollapsiblePrays = (props: MultipleCollapsiblePraysProps): JSX.Element => {
  const {
    prays = [],
    header
  } = props

  const window = useDeviceSize()

  return (
    <Space direction="vertical" className={styles.space}>
      <Title level={5} className={styles.title}>
        {header?.title}
      </Title>

      <Text>
        {header?.description}
      </Text>

      {
        prays.map((element, index) => {
          function renderHeader (): string {
            const formattedTitle = element.pray.name

            if (element.times > 1) {
              return formattedTitle + ' ' + `(${element.times}x)`
            }

            return formattedTitle
          }

          const CollapseComponent = window.width < 768 ? MobileCollapse : Collapse

          return (
            <CollapseComponent accordion size="small" key={element.pray.name + index.toString()}>
              <CollapseComponent.Panel key={element.pray.name} title={renderHeader()} header={renderHeader()}>
                <TextMultipleLines text={element.pray.content} />
              </CollapseComponent.Panel>
            </CollapseComponent>
          )
        })
      }
    </Space>
  )
}

export default MultipleCollapsiblePrays

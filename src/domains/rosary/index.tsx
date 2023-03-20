import useTranslation from 'next-translate/useTranslation'
import React, { useMemo, useRef } from 'react'
import { Tabs, Text, TextMultipleLines } from 'src/components'
import { PRAYS_NAMESPACE, Pray, PraysNames, PraysNamespaceAttributes } from '../prays/interface'
import { format, getDay } from 'date-fns';
import styles from './index.module.css'
import { MYSTERIES_NAMESPACE, MysteriesNamespaceAttributes, MysteriesByDay, RosaryMysteriesNames, Mystery, MysteriesSeriesInterface, MysteriesSeries } from 'src/domains/mysteries/interface';
import { Col, Collapse, Row, Space } from 'antd';
import { CommonNamespaceAttribute, DATE_NAMESPACE, INDEX_PAGE_NAME } from 'src/helpers/namespaces';
import useDeviceSize from 'src/helpers/useDeviceSize';

interface RosaryPrayProps {
  children?: React.ReactNode
}

interface RosaryPrayItem {
  key: string
  times: number
  type: typeof Pray | typeof Mystery
  collapsible: RosaryPrayItem[]
}

interface MultipleCollapsiblePraysItem {
  pray: Pray;
  times: number
}

interface MultipleCollapsiblePraysProps {
  prays: MultipleCollapsiblePraysItem[]
}

const MultipleCollapsiblePrays = (props: MultipleCollapsiblePraysProps) => {
  const {
    prays
  } = props;

  return (
    <Space direction="vertical" className={styles.space}>
      {
        prays.map(element => {
          function renderHeader() {
            const formattedTitle = element.pray.name

            if (element.times > 1) {
              return formattedTitle + ' ' + `(${element.times}x)`
            }

            return formattedTitle
          }

          return (
            <Collapse size="small" key={element.pray.name + Math.random()}>
              <Collapse.Panel key={element.pray.name} header={renderHeader()}>
                <TextMultipleLines text={element.pray.content}></TextMultipleLines>
              </Collapse.Panel>
            </Collapse>
          )
        })
      }
    </Space>
  )
}

const RosaryPray = (props: RosaryPrayProps) => {
  const currentDate = new Date();
  const weekdayName = format(currentDate, 'EEEE')
  const weekdayNumber = getDay(currentDate)

  const ROSARY_DECADE = [
    {
      key: PraysNames.OUR_FATHER,
      times: 1,
      type: Pray,
      collapsible: []
    },
    {
      key: PraysNames.HAIL_MARY,
      times: 10,
      type: Pray,
      collapsible: []
    },
    {
      key: PraysNames.GLORY_BE,
      times: 1,
      type: Pray,
      collapsible: []
    },
    {
      key: PraysNames.FATIMA_PRAYER,
      times: 1,
      type: Pray,
      collapsible: []
    },
  ]

  const INITIAL_PRAYS = [
    {
      key: PraysNames.SIGN_OF_THE_CROSS,
      times: 1,
      type: Pray,
      collapsible: []
    },
    {
      key: PraysNames.CREED,
      times: 1,
      type: Pray,
      collapsible: []
    },
    {
      key: PraysNames.OUR_FATHER,
      times: 1,
      type: Pray,
      collapsible: []
    },
    {
      key: PraysNames.HAIL_MARY,
      times: 3,
      type: Pray,
      collapsible: []
    },
    {
      key: PraysNames.GLORY_BE,
      times: 1,
      type: Pray,
      collapsible: []
    },
  ]

  const FINAL_PRAYS = [
    {
      key: PraysNames.HAIL_HOLY_QUEEN,
      times: 1,
      type: Pray,
      collapsible: []
    },
    {
      key: PraysNames.FINAL_ROSARY_PRAY,
      times: 1,
      type: Pray,
      collapsible: []
    },
    {
      key: PraysNames.SIGN_OF_THE_CROSS,
      times: 1,
      type: Pray,
      collapsible: []
    }
  ]

  const rosaryPrayerList: RosaryPrayItem[] = [
    {
      key: 'initialPraysLabel',
      times: 1,
      type: Pray,
      collapsible: INITIAL_PRAYS
    },
    {
      key: 'first',
      times: 1,
      type: Mystery,
      collapsible: ROSARY_DECADE,
    },
    {
      key: 'second',
      times: 1,
      type: Mystery,
      collapsible: ROSARY_DECADE,
    },
    {
      key: 'third',
      times: 1,
      type: Mystery,
      collapsible: ROSARY_DECADE,
    },
    {
      key: 'fourth',
      times: 1,
      type: Mystery,
      collapsible: ROSARY_DECADE,
    },
    {
      key: 'fifth',
      times: 1,
      type: Mystery,
      collapsible: ROSARY_DECADE,
    },
    {
      key: 'finalPraysLabel',
      times: 1,
      type: Pray,
      collapsible: FINAL_PRAYS
    },
  ]

  const mysteries: string[] = Object.values(RosaryMysteriesNames)

  const { t } = useTranslation(INDEX_PAGE_NAME);

  const prayNamespaceKeys: PraysNamespaceAttributes = t(`${PRAYS_NAMESPACE}:.`, { count: 1 }, { returnObjects: true })
  const mysteriesNamespaceKeys: MysteriesNamespaceAttributes = t(`${MYSTERIES_NAMESPACE}:.`, { count: 1 }, { returnObjects: true });
  const date: CommonNamespaceAttribute = t(`${DATE_NAMESPACE}:.`, { count: 1 }, { returnObjects: true });

  const defaultValueMysteriesTabs = MysteriesByDay[weekdayNumber];
  const window = useDeviceSize();

  return (
    <>
      <Col span={24}>
        <Row justify="center">
          <Text>
            {date?.todayIs}{' '}{weekdayName} ({mysteriesNamespaceKeys[defaultValueMysteriesTabs].name})
          </Text>
        </Row>
      </Col>

      <Col span={24}>
        <Tabs
          defaultActiveKey={defaultValueMysteriesTabs}
          size="small"
          tabBarStyle={{
            justifyContent: "center",
            ...(window?.width >= 768 && { margin: "auto" })
          }}
          items={mysteries.map((value, index) => {
            const mysterySeries = mysteriesNamespaceKeys[value]
            const mysteries = new MysteriesSeries(mysterySeries)

            let mysteriesCount = 0;

            return {
              label: `${mysterySeries.name}`,
              key: mysterySeries.key,
              children: (
                <Tabs
                  tabPosition={window.width >= 1024 ? "left" : "top"}
                  defaultActiveKey="1"
                  tabBarGutter={window.width >= 1024 ? 0 : undefined}
                  size="small"
                  items={rosaryPrayerList.map((value, index) => {
                    const collapsible = value?.collapsible;

                    if (value.type === Pray) {
                      const prays = collapsible?.map(element => {
                        const translatedPrayElement = prayNamespaceKeys[element.key]

                        return {
                          pray: new Pray(translatedPrayElement),
                          times: element.times
                        }
                      })

                      return {
                        label: (
                          <>
                            {index + 1} - {t(value.key)}
                          </>
                        ),
                        key: value.key,
                        children: <MultipleCollapsiblePrays prays={prays} />,
                      };
                    } else if (value.type === Mystery) {
                      const mystery = mysteries.mysteries[mysteriesCount]

                      mysteriesCount = mysteriesCount + 1

                      const prays = collapsible?.map(element => {
                        const translatedPrayElement = prayNamespaceKeys[element.key]

                        return {
                          pray: new Pray(translatedPrayElement),
                          times: element.times
                        }
                      })

                      return {
                        label: (
                          <>
                            {index + 1} - {mystery.name}
                          </>
                        ),
                        key: mystery.name + index,
                        children: <MultipleCollapsiblePrays prays={prays} />,
                      }
                    }

                    return {
                      label: '',
                      key: Math.random().toString()
                    }
                  })} />
              )
            };
          })}
        />
      </Col>

      {props.children}
    </>
  )
}

export default RosaryPray
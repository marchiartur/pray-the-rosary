import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Text } from 'src/components'
import { Pray, PraysNames } from '../prays/interface'
import { format, getDay } from 'date-fns'
import { MYSTERIES_NAMESPACE, type MysteriesNamespaceAttributes, MysteriesByDay, RosaryMysteriesNames, Mystery, MysteriesSeries } from 'src/domains/mysteries/interface'
import { Col, Row, Tabs } from 'antd'
import { type CommonNamespaceAttribute, DATE_NAMESPACE, INDEX_PAGE_NAME } from 'src/helpers/namespaces'
import useDeviceSize from 'src/hooks/useDeviceSize'
import MultipleCollapsiblePrays from 'src/components/multipleCollapsiblePrays'
import DesktopOrMobileTabs from 'src/components/desktopOrMobileTabs'

interface RosaryPrayProps {
  children?: React.ReactNode
}

interface RosaryPrayItem {
  key: string
  times: number
  type: typeof Pray | typeof Mystery
  collapsible: RosaryPrayItem[]
}

const RosaryPray = (props: RosaryPrayProps): JSX.Element => {
  const currentDate = new Date()
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
    }
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
    }
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
      collapsible: ROSARY_DECADE
    },
    {
      key: 'second',
      times: 1,
      type: Mystery,
      collapsible: ROSARY_DECADE
    },
    {
      key: 'third',
      times: 1,
      type: Mystery,
      collapsible: ROSARY_DECADE
    },
    {
      key: 'fourth',
      times: 1,
      type: Mystery,
      collapsible: ROSARY_DECADE
    },
    {
      key: 'fifth',
      times: 1,
      type: Mystery,
      collapsible: ROSARY_DECADE
    },
    {
      key: 'finalPraysLabel',
      times: 1,
      type: Pray,
      collapsible: FINAL_PRAYS
    }
  ]

  const mysteries: string[] = Object.values(RosaryMysteriesNames)

  const { t } = useTranslation(INDEX_PAGE_NAME)

  const mysteriesNamespaceKeys: MysteriesNamespaceAttributes = t(`${MYSTERIES_NAMESPACE}:.`, { count: 1 }, { returnObjects: true })
  const date: CommonNamespaceAttribute = t(`${DATE_NAMESPACE}:.`, { count: 1 }, { returnObjects: true })

  const defaultValueMysteriesTabs = MysteriesByDay[weekdayNumber]
  const window = useDeviceSize()

  const keysOrdinal = [
    'firstMisteryOrdinary',
    'secondMisteryOrdinary',
    'thirdMisteryOrdinary',
    'fourthMisteryOrdinary',
    'fifthMisteryOrdinary'
  ]

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
            justifyContent: 'center',
            flex: '1 1 0%',
            paddingBottom: 20,
            ...(window?.width >= 768 && { margin: 'auto' })
          }}
          items={mysteries.map((value, index) => {
            const mysterySeries = mysteriesNamespaceKeys[value]
            const mysteries = new MysteriesSeries(mysterySeries)

            let mysteriesCount = 0

            return {
              label: `${mysterySeries.name}`,
              key: mysterySeries.key,
              children: (
                <DesktopOrMobileTabs
                  index={index}
                  items={rosaryPrayerList.map((value, index) => {
                    const collapsible = value?.collapsible

                    if (value.type === Pray) {
                      const prays = collapsible?.map(element => {
                        return {
                          pray: new Pray({ key: element?.key }),
                          times: element.times
                        }
                      })

                      return {
                        label: (
                          <>
                            {t(value.key)}
                          </>
                        ),
                        key: value.key,
                        children: <MultipleCollapsiblePrays prays={prays} />
                      }
                    } else if (value.type === Mystery) {
                      const mystery = mysteries.mysteries[mysteriesCount]

                      mysteriesCount = mysteriesCount + 1

                      const prays = collapsible?.map(element => {
                        return {
                          pray: new Pray({ key: element?.key }),
                          times: element.times
                        }
                      })

                      const label = keysOrdinal[index - 1]

                      const header = {
                        title: mystery.name,
                        description: mystery.event
                      }

                      return {
                        label: t(`${label ?? ' '}`),
                        key: mystery.name + index.toString(),
                        children: <MultipleCollapsiblePrays
                          header={header}
                          prays={prays}
                          />
                      }
                    }

                    return {
                      label: '',
                      key: Math.random().toString()
                    }
                  })} />
              )
            }
          })}
        />
      </Col>

      {props.children}
    </>
  )
}

export default RosaryPray

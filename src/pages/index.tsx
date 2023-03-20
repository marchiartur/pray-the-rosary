import React from 'react'
import type { NextPage } from 'next'

import useTranslation from 'next-translate/useTranslation'
import RosaryPray from 'src/domains/rosary'
import { INDEX_PAGE_NAME } from 'src/helpers/namespaces'
import { Title } from 'src/components/typography'
import { Row } from 'antd'
import styles from './index.module.css'

const Home: NextPage = () => {
  const { t } = useTranslation(INDEX_PAGE_NAME)
  const pageTitle = t('title')

  return (
    <>
      <Row className={styles.row}>
        <Title level={4}>
          {pageTitle}
        </Title>
      </Row>

      <Row className={styles.row}>
        <RosaryPray />
      </Row>
    </>
  )
}

export default Home

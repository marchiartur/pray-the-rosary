import React from 'react'
import type { NextPage } from 'next'

import useTranslation from 'next-translate/useTranslation'
import RosaryPray from 'src/domains/prays/rosary'

const pageName = 'index'

const Home: NextPage = () => {
  const { t } = useTranslation(pageName)
  const pageTitle = t('title')

  return (
    <RosaryPray />
  )
}

export default Home

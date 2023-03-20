import React, { PropsWithChildren } from 'react'
import { Typography } from 'antd'
import styles from './Text.module.css'
import classNames from 'classnames'
import { omit } from 'src/helpers/omit'
import { type TitleProps } from './Title.interface'

const { Title: AntdComponent } = Typography

const Title: React.FunctionComponent<PropsWithChildren<TitleProps>> = (props) => {
  const { upperCase = false } = props

  const classnames = classNames(
    [
      upperCase ? styles.upperCase : '',
      styles.text
    ]
  )

  const newProps = omit(props, ['upperCase'])

  return (
    <AntdComponent className={classnames} {...newProps}>{props.children}</AntdComponent>
  )
}

export default Title

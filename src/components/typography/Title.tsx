import React from 'react'
import { Typography } from 'antd'
import styles from './Text.module.css';
import classNames from 'classnames';
import { omit } from 'src/helpers/omit';
import { TitleProps } from './Title.interface';

const { Title: AntdComponent } = Typography;

const Title = (props: TitleProps) => {
  const { upperCase = false } = props;

  const classnames = classNames(
    [
      upperCase ? styles.upperCase : '',
      styles.text,
    ]
  )

  const newProps = omit(props, ['upperCase'])

  return (
    <AntdComponent className={classnames} {...newProps}>{props.children}</AntdComponent>
  )
}

export default Title
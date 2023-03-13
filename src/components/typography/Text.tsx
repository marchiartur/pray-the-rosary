import React from 'react'
import { Typography } from 'antd'
import { TextProps } from './Text.interface';
import styles from './Text.module.css';
import classNames from 'classnames';

const { Text: AntdText } = Typography;


const Text = (props: TextProps) => {
  const { upperCase = false } = props;

  const classnames = classNames(
    [
      upperCase ? styles.upperCase : '',
      styles.text,
    ]
  )


  return (
    <AntdText className={classnames} {...props}>{props.children}</AntdText>
  )
}

export default Text
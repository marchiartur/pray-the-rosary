import React from 'react'
import { Typography } from 'antd'
import { TextProps } from './Text.interface';
import styles from './Text.module.css';
import classNames from 'classnames';
import { omit } from 'src/helpers/omit';

const { Text: AntdText } = Typography;

const Text = (props: TextProps) => {
  const { upperCase = false } = props;

  const classnames = classNames(
    [
      upperCase ? styles.upperCase : '',
      styles.text,
    ]
  )

  const newProps = omit(props, ['upperCase'])

  return (
    <AntdText className={classnames} {...newProps}>{props.children}</AntdText>
  )
}

export default Text
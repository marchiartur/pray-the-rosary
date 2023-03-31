import { type TextProps as AntdTextProps } from 'antd/es/typography/Text'

export interface TextProps extends AntdTextProps {
  upperCase?: boolean
  children?: any | string
}

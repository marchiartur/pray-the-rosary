import React, { type FunctionComponent } from 'react'

import AntdSelect from 'antd/lib/select'
import { SelectProps } from './index.interface'

const Select: FunctionComponent<SelectProps> = (props) => {
  return <AntdSelect size="large" {...props} />
}

// export const SelectOption: FunctionComponent<SelectOptionProps> = (props) => {
//   return <AntdSelect.Option {...props}>{props.children}</AntdSelect.Option>;
// };

export const SelectOption = AntdSelect.Option

export default Select

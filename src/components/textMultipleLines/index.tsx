import React from 'react'
import { Text } from '../typography'

interface TextMultipleLinesProps {
  text: string
  className: string
}

const TextMultipleLines = (props: TextMultipleLinesProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const { text = '' } = props

  const lines: string[] = text.split('\n')

  return (
    <div className={props?.className}>
      {lines?.map((line, i) => (
        <React.Fragment key={i}>
          <Text>
            {line}
          </Text>
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default TextMultipleLines

// import { Text } from '../typography'
import React from 'react'

interface TextMultipleLinesProps {
  text: string
  className?: string
}

const TextMultipleLines = (
  props: TextMultipleLinesProps & React.HTMLAttributes<HTMLDivElement>
): JSX.Element => {
  const { text = '' } = props

  // const lines: string[] = text.split('\n')

  return (
    <div className={props?.className}>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      {/* {lines?.map((line, i) => (
        <React.Fragment key={i}>
          <Text>{line}</Text>

          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))} */}
    </div>
  )
}

export default TextMultipleLines

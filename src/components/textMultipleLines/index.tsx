import React from "react";
import { Text } from "../typography";

interface TextMultipleLinesProps {
    text: string;
}

const TextMultipleLines = (props: TextMultipleLinesProps) => {
    const { text } = props;

    const lines = text.split('\n');

    return (
        <div>
            {lines.map((line, i) => (
                <React.Fragment key={i}>
                    <Text>
                        {line}
                    </Text>
                    {i < lines.length - 1 && <br />}
                </React.Fragment>
            ))}
        </div>
    );
}

export default TextMultipleLines
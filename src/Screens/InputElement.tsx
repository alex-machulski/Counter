import React, {ChangeEvent} from "react";

type InputElementType = {
    finalClassName: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    inputCounterValue: number
}

export function InputElement(props: InputElementType) {

    return (
        <input
            type={"number"}
            className={props.finalClassName}
            value={props.inputCounterValue}
            onChange={props.onChange}
        />
    )
}
import React from "react";

type OneButtonType = {
    name: string
    buttonFunction: () => void
    isDisabled: boolean
}

export function ButtonElement(props: OneButtonType) {

    return (
        <button disabled={props.isDisabled} onClick={props.buttonFunction}>
            {props.name}
        </button>
    )
}
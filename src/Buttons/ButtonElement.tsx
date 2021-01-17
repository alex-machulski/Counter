import React from "react";

type OneButtonType = {
    name: string
    buttonFunction: () => void
    isDisabled: boolean
}

export function ButtonElement(props: OneButtonType) {

    return (
        <button className={props.isDisabled ? "disabled" : ""} disabled={props.isDisabled}
                onClick={props.buttonFunction}>
            {props.name}
        </button>
    )
}
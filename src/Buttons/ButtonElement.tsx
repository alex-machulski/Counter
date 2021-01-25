import React from "react";

type ButtonElementType = {
    name: string
    buttonFunction: () => void
    isDisabled: boolean
}

export function ButtonElement(props: ButtonElementType) {

    return (
        <button
            className={props.isDisabled ? "disabled" : ""}
            disabled={props.isDisabled}
            onClick={props.buttonFunction}
        >
            {props.name}
        </button>
    )
}
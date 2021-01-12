import React from "react";
import {ButtonElement} from "./ButtonElement";
import {maxValue, minValue} from "./App";

type ButtonsType = {
    counter: number
    OnClickInc: () => void
    OnClickReset: () => void
}

export function Buttons(props: ButtonsType) {
    return (
        <div className={"buttons"}>
            <ButtonElement
                name={"inc"}
                buttonFunction={props.OnClickInc}
                isDisabled={props.counter === maxValue}
            />
            <ButtonElement
                name={"reset"}
                buttonFunction={props.OnClickReset}
                isDisabled={props.counter === minValue}
            />
        </div>
    )
}
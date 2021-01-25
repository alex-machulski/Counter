import React from "react";
import {ButtonElement} from "./ButtonElement";
import './Buttons.css';

type ButtonsCounterType = {
    counterMaxValue: number
    counterMinValue: number
    inputStartValue: number
    inputMaxValue: number
    counter: number
    OnClickInc: () => void
    OnClickReset: () => void
}

export function ButtonsCounter(props: ButtonsCounterType) {

    const isDisabledBInc = props.inputStartValue >= props.inputMaxValue ||
        props.inputStartValue < 0 || props.counter === props.counterMaxValue;
    const isDisabledReset = props.inputStartValue >= props.inputMaxValue ||
        props.inputStartValue < 0 || props.counter === props.counterMinValue;

    return (
        <div className={"buttons"}>
            <ButtonElement
                name={"inc"}
                buttonFunction={props.OnClickInc}
                isDisabled={isDisabledBInc}
            />
            <ButtonElement
                name={"reset"}
                buttonFunction={props.OnClickReset}
                isDisabled={isDisabledReset}
            />
        </div>
    )
}
import React, {ChangeEvent} from "react";
import '../App.css';
import {InputElement} from "./InputElement";

type SetMenuScreenType = {
    changeMaxValue: (maxValue: number) => void
    changeStartValue: (minValue: number) => void
    startInputValue: number
    maxInputValue: number
}

export function SetMenuScreen(props: SetMenuScreenType) {

    const menuError = props.startInputValue >= props.maxInputValue;
    const startValueError = props.startInputValue < 0;

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(parseInt(e.currentTarget.value));
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(parseInt(e.currentTarget.value));
    }

    const maxValueClass = `${menuError ? "inputError" : ""} ${"setMenuInput"}`;
    const startValueClass = `${menuError || startValueError ? "inputError" : ""} ${"setMenuInput"}`;

    return (
        <div className={"screen"}>
            <div>
                <span>max value: </span>
                <InputElement
                    finalClassName={maxValueClass}
                    onChange={onChangeMaxValue}
                    inputCounterValue={props.maxInputValue}
                />
            </div>
            <div>
                <span>start value: </span>
                <InputElement
                    finalClassName={startValueClass}
                    onChange={onChangeStartValue}
                    inputCounterValue={props.startInputValue}
                />
            </div>
        </div>
    )
}
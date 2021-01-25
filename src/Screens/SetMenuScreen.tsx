import React, {ChangeEvent} from "react";
import '../App.css';

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
                <input
                    type={"number"}
                    className={maxValueClass}
                    value={props.maxInputValue}
                    onChange={onChangeMaxValue}
                />
            </div>
            <div>
                <span>start value: </span>
                <input
                    type={"number"}
                    className={startValueClass}
                    value={props.startInputValue}
                    onChange={onChangeStartValue}
                />
            </div>
        </div>
    )
}
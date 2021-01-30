import React from "react";
import {CounterScreen} from "../Screens/CounterScreen";
import {ButtonsCounter} from "../Buttons/ButtonsCounter";

type CounterAppType = {
    counter: number
    counterStart: number
    counterMax: number
    inputValueStart: number
    inputValueMax: number
    counterScreenError: boolean
    editMode: boolean
    onClickInc: () => void
    onClickReset: () => void
}

export function CounterApp(props: CounterAppType) {

    return (
        <div className="App-Counter">
            <CounterScreen
                counter={props.counter}
                counterMaxValue={props.counterMax}
                counterScreenError={props.counterScreenError}
                editMode={props.editMode}
            />
            <ButtonsCounter
                counter={props.counter}
                OnClickInc={props.onClickInc}
                OnClickReset={props.onClickReset}
                counterMinValue={props.counterStart}
                counterMaxValue={props.counterMax}
                inputStartValue={props.inputValueStart}
                inputMaxValue={props.inputValueMax}
            />
        </div>
    )
}
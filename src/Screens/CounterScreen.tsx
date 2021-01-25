import React from "react";
import {ERROR_MESSAGE, SET_MESSAGE} from "../App";

type CounterScreenType = {
    counter: number
    counterMaxValue: number
    counterScreenError: boolean
    editMode: boolean
}

export function CounterScreen(props: CounterScreenType) {

    return (
        <div className={"screen"}>
            {props.counterScreenError
                ? <p className={"errMsg"}>{ERROR_MESSAGE}</p>
                : props.editMode
                    ? <p className={"setMsg"}>{SET_MESSAGE}</p>
                    : <p className={props.counter === props.counterMaxValue ? "lastDigit  number" : "number"}>
                        {props.counter}
                    </p>}
        </div>
    )
}
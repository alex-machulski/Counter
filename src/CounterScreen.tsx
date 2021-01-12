import React from "react";
import {maxValue} from "./App";

type CounterScreenType = {
    counter: number
}

export function CounterScreen(props: CounterScreenType) {
    return (
        <div className={props.counter === maxValue ? "lastDigit screen" : "screen"}>
            {props.counter}
        </div>
    )
}
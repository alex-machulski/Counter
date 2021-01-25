import React from "react";
import {ButtonElement} from "./ButtonElement";
import './Buttons.css';

type ButtonsMenuType = {
    OnClickSet: () => void
    editMode: boolean
    counterStartValue: number
    counterMaxValue: number
}

export function ButtonsMenu(props: ButtonsMenuType) {

    const isSetDisabled = props.counterStartValue >= props.counterMaxValue ||
        props.counterStartValue < 0 || !props.editMode;

    return (
        <div className={"buttons"}>
            <ButtonElement
                name={"set"}
                buttonFunction={props.OnClickSet}
                isDisabled={isSetDisabled}
            />
        </div>
    )
}
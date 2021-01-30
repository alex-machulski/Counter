import React from "react";
import {SetMenuScreen} from "../Screens/SetMenuScreen";
import {ButtonsMenu} from "../Buttons/ButtonsMenu";

type MenuAppType = {
    inputValueStart: number
    inputValueMax: number
    changeInputStartValue: (startValue: number) => void
    changeInputMaxValue: (maxValue: number) => void
    onClickSet: () => void
    editMode: boolean
}

export function MenuApp(props: MenuAppType) {

    return (
        <div className="Menu">
            <SetMenuScreen
                startInputValue={props.inputValueStart}
                maxInputValue={props.inputValueMax}
                changeStartValue={props.changeInputStartValue}
                changeMaxValue={props.changeInputMaxValue}
            />
            <ButtonsMenu
                OnClickSet={props.onClickSet}
                editMode={props.editMode}
                counterStartValue={props.inputValueStart}
                counterMaxValue={props.inputValueMax}
            />
        </div>
    )
}
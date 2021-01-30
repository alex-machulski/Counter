import React, {useState} from 'react';
import './App.css';
import './Screens/Screens.css';
import {CounterScreen} from "./Screens/CounterScreen";
import {ButtonsCounter} from "./Buttons/ButtonsCounter";
import {SetMenuScreen} from "./Screens/SetMenuScreen";
import {ButtonsMenu} from "./Buttons/ButtonsMenu";
import {restoreState, saveState} from "./localStorage";
import {MenuApp} from "./AppParts/MenuApp";
import {CounterApp} from "./AppParts/CounterApp";

export const SET_MESSAGE = "enter values and press 'set'";
export const ERROR_MESSAGE = "Incorrect value!"

function App() {

    //initial states
    const savedStartValue = restoreState("startValue", 0);
    const savedMaxValue = restoreState("maxValue", 1);
    const [counterStart, setCounterStart] = useState<number>(savedStartValue);
    const [counterMax, setCounterMax] = useState<number>(savedMaxValue);

    //inputs' states
    const [inputValueStart, setInputStartValue] = useState<number>(savedStartValue);
    const [inputValueMax, setInputMaxValue] = useState<number>(savedMaxValue);
    const [counter, setCounter] = useState<number>(inputValueStart);
    const [editMode, setEditMode] = useState<boolean>(true);

    //functions
    const OnClickInc = () => {
        if (counter < counterMax)
            setCounter(counter + 1);
    }
    const OnClickReset = () => setCounter(counterStart);
    const OnClickSet = () => {
        setCounterStart(inputValueStart);
        setCounterMax(inputValueMax);
        setCounter(inputValueStart);
        saveState("startValue", inputValueStart);
        saveState("maxValue", inputValueMax)
        setEditMode(false);
    }
    const ChangeInputStartValue = (startValue: number) => {
        setInputStartValue(startValue);
        setEditMode(true);
    }
    const ChangeInputMaxValue = (maxValue: number) => {
        setInputMaxValue(maxValue);
        setEditMode(true);
    }

    const counterScreenError = inputValueStart >= inputValueMax || inputValueStart < 0;

    return (
        <div>
            <MenuApp
                inputValueStart={inputValueStart}
                inputValueMax={inputValueMax}
                changeInputStartValue={ChangeInputStartValue}
                changeInputMaxValue={ChangeInputMaxValue}
                onClickSet={OnClickSet}
                editMode={editMode}
            />
            <CounterApp
                counter={counter}
                counterStart={counterStart}
                counterMax={counterMax}
                inputValueStart={inputValueStart}
                inputValueMax={inputValueMax}
                counterScreenError={counterScreenError}
                editMode={editMode}
                onClickInc={OnClickInc}
                onClickReset={OnClickReset}
            />
        </div>
    );
}

export default App;

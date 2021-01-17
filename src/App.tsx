import React, {useState} from 'react';
import './App.css';
import './Screens/Screens.css';
import {CounterScreen} from "./Screens/CounterScreen";
import {ButtonsCounter} from "./Buttons/ButtonsCounter";
import {SetMenuScreen} from "./Screens/SetMenuScreen";
import {ButtonsMenu} from "./Buttons/ButtonsMenu";
import {restoreState, saveState} from "./localStorage";

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
            <div className="Menu">
                <SetMenuScreen startInputValue={inputValueStart}
                               maxInputValue={inputValueMax}
                               changeStartValue={ChangeInputStartValue}
                               changeMaxValue={ChangeInputMaxValue}
                />
                <ButtonsMenu
                    OnClickSet={OnClickSet}
                    editMode={editMode}
                    counterStartValue={inputValueStart}
                    counterMaxValue={inputValueMax}
                />
            </div>
            <div className="App-Counter">
                <CounterScreen counter={counter}
                               counterMaxValue={counterMax}
                               counterScreenError={counterScreenError}
                               editMode={editMode}
                />
                <ButtonsCounter
                    counter={counter}
                    OnClickInc={OnClickInc}
                    OnClickReset={OnClickReset}
                    counterMinValue={counterStart}
                    counterMaxValue={counterMax}
                    inputStartValue={inputValueStart}
                    inputMaxValue={inputValueMax}
                />
            </div>
        </div>
    );
}

export default App;

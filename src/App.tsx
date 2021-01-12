import React, {useState} from 'react';

import './App.css';
import {CounterScreen} from "./CounterScreen";
import {Buttons} from "./Buttons";

export const minValue = 0;
export const maxValue = 5;

function App() {

    const [counter, setCounter] = useState<number>(minValue);
    const OnClickInc = () => {
        if (counter < maxValue)
            setCounter(counter + 1);
    }
    const OnClickReset = () => setCounter(minValue);

    return (
        <div className="App">
            <CounterScreen counter={counter}/>
            <Buttons
                counter={counter}
                OnClickInc={OnClickInc}
                OnClickReset={OnClickReset}
            />
        </div>
    );
}

export default App;

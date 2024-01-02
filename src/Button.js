import React from 'react';
import s from "./Button.module.css";

function Button({handleStartTimer, isTimerStarted}) {

    console.log('RENDER BTN', handleStartTimer)

    return (
        <button
            className={`${s.clockBtn} ${s[`clockBtn${isTimerStarted ? 'Stop' : 'Start'}`]}`}
            onClick={ handleStartTimer}
        >
            {isTimerStarted ? 'Stop' : 'Start'}
        </button>
    );
}

export default Button;
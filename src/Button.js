import React from 'react';
import s from "./Button.module.css";

function Button({handleStartTimer, isTimerStarted, type="button"}) {

    console.log('RENDER BTN', handleStartTimer)

    return (
        <button
            className={`${s.clockBtn} ${s[`clockBtn${isTimerStarted ? 'Stop' : 'Start'}`]}`}
            onClick={ handleStartTimer}
            type={type}
        >
            {isTimerStarted ? 'Stop' : 'Start'}
        </button>
    );
}

export default Button;
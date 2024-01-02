import { useState} from "react";
import s from './Timer.module.css';
import ClockDisplay from "./ClockDisplay";
let timerId;

function Timer(props) {

    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const [time, setTime] = useState(0);



    const handleStartTimer = () => {

        if (isTimerStarted) {

            clearInterval(timerId);

            props.saveTime(time);

            setIsTimerStarted(false);
            setTime(0)

        }else {

            setIsTimerStarted(true);

            timerId = setInterval(() => {
                setTime((prevTime) => {
                    return prevTime + 1;
                });
            }, 1000);
        }
    }

    return (
        <>
            {/*<p className={s.clockTimer}>{secondsToHms(this.state.time)}</p>*/}
            <ClockDisplay classname={s.clockTimer} time={time} />

            <button
                className={`${s.clockBtn} ${s[`clockBtn${isTimerStarted ? 'Stop' : 'Start'}`]}`}
                onClick={ handleStartTimer}
            >
                {isTimerStarted ? 'Stop' : 'Start'}
            </button>
        </>
    )
}

export default Timer;
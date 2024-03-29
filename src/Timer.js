import { useState} from "react";
import s from './Timer.module.css';
import ClockDisplay from "./ClockDisplay";
import Button from "./Button";
import TaskForm from "./TaskForm";
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
    
    /*const displayParagraph = useMemo(() => {
        return (
            <p>{isTimerStarted ? 'Le timer est demarré' : 'Le timer est arreté'}</p>
        )
    }, [isTimerStarted]);*/


    return (
        <>
            {/*<p className={s.clockTimer}>{secondsToHms(this.state.time)}</p>*/}
            <ClockDisplay classname={s.clockTimer} time={time} />

            <Button isTimerStarted={isTimerStarted} handleStartTimer={handleStartTimer} />
            <TaskForm isTimerStarted={isTimerStarted} onSubmit={handleStartTimer} />

        </>
    )
}

export default Timer;
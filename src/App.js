import Timer from "./Timer";
import TimersTable from "./TimersTable";
import s from './App.module.css'
import {useState} from "react";
import useTimeParser from "./hooks/useTimeParser";


function App() {
    const [timers, setTimers] = useState([]);

    const { parseSecondsToHms } = useTimeParser();

    const saveTime = (time) => {
        const date = new Date();

        setTimers([...timers, {time, date}]);
    }

    const displayTimerDetails = timer => {
        const date = new Date();

        alert(`${timer.date.toLocaleDateString()} at ${timer.date.toLocaleTimeString()} \n${parseSecondsToHms(timer.time)}`);

    }

    return (
        <div className={s.container}>
            <h1 className={s['main-title']}>Pomodoro Timer</h1>
            <Timer saveTime={saveTime}  />
            <TimersTable timers={timers} onDisplayTimerDetails={ displayTimerDetails} />
        </div>
    );
}

export default App;
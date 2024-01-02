import Timer from "./Timer";
import TimersTable from "./TimersTable";
import s from './App.module.css'
import {useState} from "react";

function secondsToHms(timeInSeconds) {
    timeInSeconds = Number(timeInSeconds);
    const h = Math.floor(timeInSeconds / 3600);
    const m = Math.floor(timeInSeconds % 3600 / 60);
    const s = Math.floor(timeInSeconds % 3600 % 60);

    const hdisplay = h < 10 ? `0${h}` : h;
    const mdisplay = m < 10 ? `0${m}` : m;
    const sdisplay = s < 10 ? `0${s}` : h;

    return `${hdisplay}:${mdisplay}:${sdisplay}`;
}

function App() {
    const [timers, setTimers] = useState([]);

    const saveTime = (time) => {
        const date = new Date();

        setTimers([...timers, {time, date}]);
    }

    const displayTimerDetails = timer => {
        const date = new Date();

        alert(`${timer.date.toLocaleDateString()} at ${timer.date.toLocaleTimeString()} \n${secondsToHms(timer.time)}`);

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
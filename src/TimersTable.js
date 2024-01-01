import {Component} from "react";
import s from './TimersTable.module.css'

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

class TimersTable extends Component {
    render() {
        return (
            <table className={s['timmers-table']}>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>time</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.timers.map((timer) => (
                        <tr key={timer.date.getMilliseconds()}>
                            <td>{timer.date.toLocaleDateString()} at {timer.date.toLocaleTimeString()}</td>
                            <td>{secondsToHms(timer.time)}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        );
    }
}

export default TimersTable;
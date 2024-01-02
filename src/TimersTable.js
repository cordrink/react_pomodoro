import s from './TimersTable.module.css'
import ClockDisplay from "./ClockDisplay";


function TimersTable(props) {
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
                props.timers.map((timer) => (
                    <tr onClick={ () => props.onDisplayTimerDetails(timer) } key={timer.date.getMilliseconds()}>
                        <td>{timer.date.toLocaleDateString()} at {timer.date.toLocaleTimeString()}</td>
                        <td><ClockDisplay time={timer.time} /></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default TimersTable;
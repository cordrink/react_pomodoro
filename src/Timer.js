import {Component} from "react";
import s from './Timer.module.css';

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

class Timer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isTimerStarted: false,
            time: 0,
        }
    }

    handleStartTimer = () => {
        if (this.state.isTimerStarted) {

            clearInterval(this.timerId);

            this.props.saveTime(this.state.time);

            this.setState({
                isTimerStarted: false,
                time: 0
            })

        }else {
            this.setState({
                isTimerStarted: true
            })

            this.timerId = setInterval(() => {
                this.setState(({time}) => {
                    return {
                        time: time + 1
                    }
                })
            }, 1000)
        }
    }

    render() {
        return (
            <>
                <p className={s.clockTimer}>{secondsToHms(this.state.time)}</p>
                <button className={`${s.clockBtn} ${s[`clockBtn${this.state.isTimerStarted ? 'Stop' : 'Start'}`]}`} onClick={this.handleStartTimer}>{this.state.isTimerStarted ? 'Stop' : 'Start'}</button>
            </>

        );
    }
}

export default Timer;
import {Component} from "react";
import Timer from "./Timer";
import TimersTable from "./TimersTable";
import s from './App.module.css'

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            timers: [],
        }
    }

    saveTime = (time) => {
        const date = new Date();

        this.setState({
            timers: [...this.state.timers, {time, date}],
        })
    }

    render() {
        return (
          <div className={s.container}>
              <h1 className={s['main-title']}>Pomodoro Timer</h1>
              <Timer saveTime={this.saveTime}  />
              <TimersTable timers={this.state.timers} />
          </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
  state = {
     deadline: "Jan 01, 2020",
     newDeadLine: ""
  }

  changeDeadline = () => {
    this.setState({
      deadline: this.state.newDeadLine
    })
  }

  render() {
    return (
      <div className="App">
      <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
          <div className="container">
            <input 
              className="input"
              placeholder="Enter new date"
              onChange={e => this.setState({ newDeadLine: e.target.value })}
            />
            <button
              className="button" 
              onClick={() => this.changeDeadline()}
            >Submit</button>
          </div>
      </div>
    );
  }
}

export default App;

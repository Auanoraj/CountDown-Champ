import React, { Component } from 'react';

import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import Clock from './Clock';
import './App.css';

class App extends Component {
  state = {
     deadline: "Jan 01, 2020",
     newDeadLine: "",
     calendarFocused: false
  }

  changeDeadline = () => {
    this.setState({
      deadline: moment(this.state.newDeadLine).format('MMM D, YYYY')
    })
  }

  render() {
    return (
      <div className="App">
      <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
          <div className="container">
            <SingleDatePicker
              displayFormat='DD/MM/YYYY'
              date={!!this.state.newDeadLine ? moment(this.state.newDeadLine) : moment()}
              onDateChange={date => this.setState({ newDeadLine: date })}
              focused={this.state.calendarFocused}
              onFocusChange={({ focused }) => this.setState(() => ({ calendarFocused: focused }))}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
            <button
              className="button" 
              onClick={() => this.changeDeadline()}
            >
              Submit
            </button>
          </div>
      </div>
    );
  }
}

export default App;

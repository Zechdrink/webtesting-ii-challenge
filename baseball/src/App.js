import React, { Component } from 'react';
import Dashboard from './dash/Dashboard';
import Display from './display/Display';
import Nav from './navbar/Nav';
import './App.css';
import { getNodeText } from 'react-testing-library';

class App extends Component {

  state = {
    strikes: 0,
    balls: 0,
    outs: 0,
  }

  render() {
    return (
      <div className="App">
        <Nav newInning = {this.newInning}/>
        <div className = "appBody">
        <Dashboard 
          onStrike = {this.onStrike} 
          onBall = {this.onBall} 
          onHit = {this.onHit}
          onFoul = {this.onFoul}/>
        
        <Display 
          strikes = {this.state.strikes} 
          balls = {this.state.balls}
          outs = {this.state.outs}
          />
        </div>
      </div>
    );
  }

  onStrike = (event) => {
    event.preventDefault();
    if(this.state.outs === 3){
      alert('And the inning is OVERRR!!!')
    }
    else if(this.state.strikes < 2 && this.state.strikes >= 0){
      this.setState({
        strikes: this.state.strikes + 1
      })
    } else if (this.state.strikes === 2 && this.state.outs < 2) {
        this.setState({
          strikes: 0,
          balls: 0,
          outs: this.state.outs + 1
        })
    } else {
      this.setState({
        outs: 3,
        strikes: 0,
        balls: 0
      })
    }
  }

  onBall = (event) => {
    event.preventDefault();
    if(this.state.outs === 3){   
      alert('The inning is over dummy')
    }
    else if(this.state.balls >= 0 && this.state.balls < 3){
      this.setState({
        balls: this.state.balls + 1
      })
    } else {
      this.setState({
        balls: 0,
        strikes: 0,
      })
    }
  }

  onHit = (event) => {
    event.preventDefault();
    if(this.state.outs === 3){
      alert('You can\'t hit when you are out dummy')
    } else {
    this.setState({
      strikes: 0,
      balls: 0,
    })
  }
  }

  onFoul = (event) => {
    event.preventDefault();
    if(this.state.outs === 3){
      alert('Get off the field moron')
    }
    else if(this.state.strikes === 2){
      alert('Way to make contact with the ball!!! Hit it out of the park next time!!')
    } else {
      this.setState({
        strikes: this.state.strikes + 1
      })
    }
  }

  newInning = (event) => {
    event.preventDefault();
    this.setState({
      strikes: 0,
      balls: 0,
      outs: 0,  
    })
  }

}



export default App;

import React, { Component } from 'react';
import Areas from './Areas';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      areas: ['kitchen', 'bathroom', 'bedroom', 'miscellaneous']

    }
  }
  render() {
    return (
      <div className="App">
        <h1>Hello hello!</h1>
        <Areas areas={this.state.areas} />
      </div>
    )
  }
}

export default App;

//The user comes onto the app
//They see cards that have areas of the house on them (Kitchen, Bathroom, Etc), which will be clickable links.
//You want to pass the categories down to cards, in order to... add them on AreaCards
//They will link to different projects they might have (Leaky faucet, clogged toilet)
//They will click on ONE project, which will also be a link, which will lead them to
//A youtube video.

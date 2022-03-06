import React, { Component } from "react";
import '../NavBar.css'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      userInput: ""
    }
 }
  
  handleChange = (event) => {
    this.setState({[event.target.name] : [event.target.value]})
  }
  
  render() {
   return (
      <div className="nav-bar">
        <div className="page-name">
          <NavLink className="page-title" to="/">
            <h1>MY FIX</h1>
            <p>For those who need to justify the amount of tools they own...</p>
          </NavLink>
       </div>
        <div className="user-search">
          <form>
      <input
          id="toolSearch"
          type="text"
          name="userInput"
          placeholder="Tools I have..."
          value={this.state.userInput}
          onChange={(event) => this.handleChange(event)}
          />
          <button>FIX IT!</button>

          </form>
        </div>
      </div>
      
    )
  }
}


export default NavBar;
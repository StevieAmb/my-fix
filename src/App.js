import React, { Component } from 'react';
import Areas from './Areas';
import NavBar from './NavBar';
import Projects from './Projects';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      areas: ['kitchen', 'bathroom', 'bedroom', 'miscellaneous'],
      projects: [
        {
          id: 1,
          areaOfHome: 'Kitchen',
          Project: 'Leaky Faucet',
          toolsNeeded: [],
          video1: '',
          video2: ''
        },
        {
          id: 2,
          areaOfHome: 'Kitchen',
          Project: 'Broken Garbage Disposal',
          toolsNeeded: [],
          video1: '',
          video2: ''
        },
        {
          id: 3,
          areaOfHome: 'Bathroom',
          Project: 'Broken table chair',
          toolsNeeded: [],
          video1: '',
          video2: ''
        },
          ]

    }
  }

  returnProjects = (projects, category) => {
     let filteredProjects = projects.filter(project => {
       let lowerCaseArea = project.areaOfHome.toLowerCase()
       let lowerCaseCategory = category.toLowerCase()
        if(lowerCaseArea === lowerCaseCategory) {
          return project;
        }
      })
      {console.log("here", filteredProjects)}
      return (
      <Projects category={filteredProjects} />
      )
    }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={() => <Areas areas={this.state.areas} /> } />
        <Route exact path="/:area" render={( {match} ) =>  this.returnProjects(this.state.projects, match.params.area)} />
      </div>
    )
  }
}

export default App;



//And then, when the project buttons are clicked, that's when it takes you to the page with the video,
//Which can be on the same page?

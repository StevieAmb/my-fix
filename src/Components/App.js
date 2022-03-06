import React, { Component } from 'react';
import Areas from '../Components/Areas';
import  getHomeRepairs  from '../apiCalls';
import NavBar from './NavBar';
import Projects from './Projects';
import { Route } from 'react-router-dom'
import '../App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      areas: ['kitchen', 'bathroom', 'bedroom', 'miscellaneous'],
      homeRepairs: []
    }
  }

  componentDidMount() {
    getHomeRepairs()
    .then(data => this.setState({homeRepairs: data}))
  }

  returnProjects = (projects, category) => {
     if(projects.length > 0) {
       console.log("repairs", projects)
      let filteredProjects = projects.filter(project => {
          console.log("cat", category)
          console.log('proj', project.areaOfHome)
          let lowerCaseArea = project.areaOfHome.toLowerCase()
          let lowerCaseCategory = category.toLowerCase()
            if(lowerCaseCategory === lowerCaseArea) {
               return project;
            }
          })
       return (
       <Projects category={filteredProjects} />
       )
    }
    }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={() => <Areas areas={this.state.areas} /> } />
        <Route exact path="/:area" render={( {match} ) =>  this.returnProjects(this.state.homeRepairs, match.params.area)} />
      </div>
    )
  }
}

export default App;



//And then, when the project buttons are clicked, that's when it takes you to the page with the video,
//Which can be on the same page?

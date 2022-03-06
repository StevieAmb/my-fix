import React, { Component } from 'react';
import Areas from '../Components/Areas';
import  getHomeRepairs  from '../apiCalls';
import NavBar from './NavBar';
import Videos from '../Videos';
import Projects from './Projects';
import { Route, Switch } from 'react-router-dom'
import '../App.css';
import CatchError from '../CatchError';

class App extends Component {
  constructor() {
    super()
    this.state = {
      areas: ['kitchen', 'bathroom', 'bedroom', 'miscellaneous'],
      homeRepairs: [],
      error: ''
    }
  }

  componentDidMount() {
    getHomeRepairs()
    .then(data => this.setState({homeRepairs: data}))
    .catch(error => this.setState({error: error.message}))
  }

  returnProjects = (projects, category) => {
     if(projects.length > 0) {
      let filteredProjects = projects.filter(project => {
          let lowerCaseArea = project.areaOfHome.toLowerCase()
          let lowerCaseCategory = category.toLowerCase()
            if(lowerCaseCategory === lowerCaseArea) {
               return project;
            }
          })
       return (
       <Projects 
       category={filteredProjects} />
       )
    }
    }

    findVideo = (repairs, project) => {
      if(repairs.length > 0) {
        let foundVideo = repairs.find(repair => {
          if(project === repair.project) {
            return repair
          }
        })
        return (
          <Videos repairVideo={foundVideo} />
        )
      }
    }

    renderCatchError = (error) => {
      if(error) {
        return <CatchError error={error} />
      }
    }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
        <Route exact path="/" render={() => <Areas areas={this.state.areas} /> } />
        <Route exact path="/:area/home-improvement-repairs" render={( { match } ) =>  this.returnProjects(this.state.homeRepairs, match.params.area)} />
        <Route exact path="/video/:project" render={( { match }) => this.findVideo(this.state.homeRepairs, match.params.project)} />
        <Route render={() => <CatchError error={this.state.error} /> } />
        </Switch>
        <Route render={() => this.renderCatchError(this.state.error)} />
      </div>
    )
  }
}

export default App;



//And then, when the project buttons are clicked, that's when it takes you to the page with the video,
//Which can be on the same page?

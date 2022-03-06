import React, { Component } from 'react';
import Areas from '../Components/Areas';
import  getHomeRepairs  from '../apiCalls';
import NavBar from './NavBar';
import Videos from '../Videos';
import Projects from './Projects';
import Tries from '../Tries';
import { Route, Switch } from 'react-router-dom'
import '../App.css';
import CatchError from '../CatchError';

class App extends Component {
  constructor() {
    super()
    this.state = {
      areas: ['kitchen', 'bathroom', 'bedroom', 'miscellaneous'],
      homeRepairs: [],
      error: '',
      toTry: []
    }
  }

  addToTry = (projectVid) => {
    if(!this.state.toTry.includes(projectVid)) {
      this.setState({toTry: [...this.state.toTry, projectVid] })
    }
  }

  listProjectsToTry = (projects, tryVideo) => {
    let triedProj = []
    if(projects.length > 0) {
      tryVideo.forEach(video => {
        projects.forEach(project => {
          if(project.videos === video) {
            triedProj.push(project)
          }
        })
      })
      if(triedProj.length > 0) {
        return (
          <Tries category={triedProj} />
        )
       } else {
         return (
           <h4>It seems you have not added a project yet. Get your tools and get going!</h4>
         )
       }
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
          <Videos toTry={this.addToTry} repairVideo={foundVideo} />
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
        <Route exact path="/tryThis" render={() => this.listProjectsToTry(this.state.homeRepairs, this.state.toTry)} />
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

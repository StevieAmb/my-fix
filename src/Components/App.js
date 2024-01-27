import React, { useEffect, useState } from 'react';
import Areas from '../Components/Areas';
import  getHomeRepairs  from '../apiCalls';
import NavBar from './NavBar';
import Videos from './Videos';
import Projects from './Projects';
import Tries from './Tries';
import { Route, Switch } from 'react-router-dom';
import CatchError from './CatchError';

const App = () =>  {
    let areas =  ['kitchen', 'bathroom', 'bedroom', 'misc']
    let [error, setError ] = useState('')
    let [toTry, setToTry] = useState([])
    let [homeRepairs, setHomeRepairs] = useState([])

    useEffect(() => {
      getHomeRepairs()
      .then(data => setHomeRepairs(data))
      .catch(error => setError(error))
    },[])

  const addToTry = (projectVid) => {
    if (!this.state.toTry.includes(projectVid)) {
      this.setState({toTry: [...this.state.toTry, projectVid] })
    }
  }

  const listProjectsToTry = (projects, tryVideo) => {
    let triedProj = []
    if(projects.length > 0) {
      tryVideo.forEach(video => {
        projects.forEach(project => {
          if(project.videos === video) {
            triedProj.push(project)
          }
        })
      })
      if (triedProj.length > 0) {
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

const returnProjects = (projects, category) => {
  let lowerCaseCategory;
  let lowerCaseArea;
  if (projects.length > 0) {
    var filteredProjects = projects.filter(project => {
      lowerCaseCategory = category.toLowerCase()
      lowerCaseArea = project.areaOfHome.toLowerCase()
    if (lowerCaseCategory === lowerCaseArea) {
      return project
    }
    })
    return (
    <Projects 
    category={filteredProjects} />
    )
  } else {
    return (
    <p>Can't seem to find any projects for you to do. Go back home.</p>
    )
  }
}

const findVideo = (repairs, project) => {
  if (repairs.length > 0) {
  let foundVideo = repairs.find(repair => repair.project === project)
    return (
      <Videos toTry={this.addToTry} repairVideo={foundVideo} />
    )
  }
}

const renderCatchError = (error) => {
  if(error) {
    return <CatchError error={error} />
  }
}

  return (
    <div className="App">
      <NavBar />
      <div className='hero-image'>
      </div>
      <Switch>
        <Route exact path="/" render={() => <Areas areas={areas} /> } />
        <Route exact path="/:area/home-improvement-repairs" render={( { match } ) =>  this.returnProjects(homeRepairs, match.params.area)} />
        <Route exact path="/video/:project" render={( { match }) => this.findVideo(this.state.homeRepairs, match.params.project)} />
        <Route exact path="/tryThis" render={() => this.listProjectsToTry(this.state.homeRepairs, this.state.toTry)} />
      </Switch>
      {/* <Route render={() => <CatchError error={this.state.error} /> } /> */}
    </div>
  )
}

export default App;


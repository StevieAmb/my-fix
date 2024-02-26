import React, { useEffect, useState } from 'react';
import AreasContainer from './AreasContainer';
import getHomeRepairs  from '../apiCalls';
import NavBar from './NavBar';
import SavedProjects from './SavedProjects';
import { Route, Switch } from 'react-router-dom';
import CatchError from './CatchError';
import VideosContainer from './VideosContainer';

const App = () =>  {
    let areas =  ['kitchen', 'bathroom', 'bedroom', 'misc']
    let [error, setError ] = useState('')
    let [saved, setToSaved] = useState([])
    let [homeRepairs, setHomeRepairs] = useState([])
    let [loading, setLoading] = useState()

    useEffect(() => {
      getHomeRepairs()
      .then(data => setHomeRepairs(data))
      .catch(error => setError(error))
    },[])

  const addToSaved = (projectVid) => {
    if (!saved.includes(projectVid)) {
      setToSaved([...saved, projectVid] )
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
          <SavedProjects category={triedProj} />
        )
      } else {
        return (
          <h4>It seems you have not added a project yet. Get your tools and get going!</h4>
        )
      }
    }
  }

const findVideo = (repairs, project) => {
  if (repairs.length > 0) {
  let foundVideo = repairs.find(repair => repair.project === project)
    return (
      <VideosContainer toTry={addToSaved} repairVideo={foundVideo} />
    )
  }
}

// const renderCatchError = (error) => {
//   if(error) {
//     return <CatchError error={error} />
//   }
// }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <AreasContainer areas={areas} homeRepairs={homeRepairs} /> } />
        <Route exact path="/video/:project" render={( { match }) => findVideo(homeRepairs, match.params.project)} />
        <Route exact path="/tryThis" render={() => listProjectsToTry(homeRepairs, saved)} />
      </Switch>
      {/* <Route render={() => <CatchError error={this.state.error} /> } /> */}
    </div>
  )
}

export default App;


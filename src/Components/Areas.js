import React from "react";
import AreaCards from "../Components/AreaCards";
import '../Areas.css'

const Areas = ({areas}) => {
  let allAreas = areas.map(area => {
    return (
      <AreaCards 
        key={area}
        homeArea={area}/>
    )
  })
  return (
   <div className="area-cards-container">
     {allAreas}
   </div>
  )
}

export default Areas; 
import React from "react";
import PropTypes from 'prop-types'

const CatchError = ({error}) => {
  return (
      <div className="catch-error">
    <h3>{error}</h3>
    <p>Something is clearly broken. Maybe you can reach down into your toolbox and help us fix it?</p>
      </div>
  )
}


export default CatchError; 

CatchError.propTypes = {
  error: PropTypes.string.isRequired
}
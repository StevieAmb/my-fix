import React from "react";
import PropTypes from 'prop-types';

const CatchError = ({error}) => {
  return (
    <div className="catch-error">
      <h3>{error}</h3>
      <p>Something is clearly broken. Go back HOME and see if you can fix it for me, will ya? </p>
    </div>
  )
}


export default CatchError; 

CatchError.propTypes = {
  error: PropTypes.string.isRequired
}
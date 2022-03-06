const getHomeRepairs = () => {
  return fetch('https://young-everglades-39392.herokuapp.com/')
  .then(response => response.json())
}

export default getHomeRepairs
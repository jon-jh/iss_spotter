const { getIP } = require('./iss_promised');

getIP()
  .then((response) => console.log(response));

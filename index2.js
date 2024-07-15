// const { getIP, getCoords, flyoverT } = require('./iss_promised');
const { ISSflyoverT} = require('./iss_promised');
// // Testing
// getIP()
//   .then((response) => getCoords(response))
//   .then((coords) => flyoverT(coords))
//   .then(body => console.log(body));

// Final

ISSflyoverT();

// Note: error handling (.catch) not added
// time formatter not added
// maybe in the future when I have time to come back to it
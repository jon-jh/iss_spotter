const needle = require('needle');

// getIP using promise syntax instead of callback syntax

const getIP = function() {
  let url = 'https://api.ipify.org?format=json';
  return needle('get', url)

    .then((response) => {
      const body = response.body;
      const ip = body.ip;
      console.log(ip);
      return ip;
    // console.log(body) // prints object with ip: x.x.x.x
    // console.log(ip) // prints user ip
    // returning a value in a 'then' passes it on to the next in the chain, which is just what we need.
    });
};
//Test
// getIP()

const getCoords = function(ip) { //remember this function needs to take the up from the previous function, here.
  let url = `http://ipwho.is/${ip}`;
  return needle('get', url)

    .then((response) => {
      const body = response.body;
      const lat = body.latitude;
      const long = body.longitude;
      console.log({lat, long});
      return {lat, long};
    });
};

const flyoverT = function(coords) {
  const latitude = coords.lat;
  const longitude = coords.long;
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return needle('get', url)
    .then((response) => {
      const body = response.body;
      const passtimes = body.response;
      return passtimes;
    });
};


const ISSflyoverT = function() {
  return getIP()
    .then((ip) => getCoords(ip))
    .then((coords) => flyoverT(coords))
    .then((passtimes) => {
      console.log(passtimes);
      return passtimes;
    });
};

module.exports = { ISSflyoverT };
// module.exports = { getIP, getCoords, flyoverT };
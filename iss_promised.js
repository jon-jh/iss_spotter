const needle = require('needle');

// getIP using promise syntax instead of callback syntax

const getIP = function() {
  let url = 'https://api.ipify.org?format=json';
  return needle('get', url)

    .then((response) => {
      const body = response.body;
      const ip = body.ip;
      return ip;
    // console.log(body) // prints object with ip: x.x.x.x
    // console.log(ip) // prints user ip
    // returning a value in a 'then' passes it on to the next in the chain, which is just what we need.
    });
};
//Test
// getIP()

module.exports = { getIP };
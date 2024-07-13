// The goal of this program is to: 1. Get the users IP adress using a web API. 2. Get the geo coordinates of IP adress. 3. Get the next ISS flyover times of the coordinates. Each step depends on the data of the previous on, so make and test one at a time.

// The index.js file should not contain most of the code, instead just call the modules from the other files.

// Step 1: Fetch our IP adress. => Start with the other js files then import the module to here.

const { issFlyoverTimes, fetchMyIP, geoLocate } = require('./iss.js');

fetchMyIP((ip) => {
  geoLocate(ip, (data) => {
    console.log('Located your IP adress at:', data);
    issFlyoverTimes(data);
  });
});
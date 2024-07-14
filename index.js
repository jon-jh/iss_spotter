// The goal of this program is to: 1. Get the users IP adress using a web API. 2. Get the geo coordinates of IP adress. 3. Get the next ISS flyover times of the coordinates. Each step depends on the data of the previous on, so make and test one at a time.

// The index.js file should not contain most of the code, instead just call the modules from the other files.

// Step 1: Fetch our IP adress. => Start with the other js files then import the module to here.
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, coords } = require('./iss');

// Testing / Calling fetchMyIP

fetchMyIP((error, ip) => {
  if (error) {
    console.log('There was an error fetching your IP', error);
    return;
  }
  console.log('Success! Fetched your IP as:', ip);
});

// Testing the fetchCoordsByIP

fetchCoordsByIP((error, lat, long) => {
  if (error) {
    console.log('There was an error fetching your coords', error);
    return;
  }
  console.log('Success! Fetched your coords as:', lat, long);
});

// Testing fetchISSFlyOverTimes

fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
  if (error) {
    console.error("There was an error getting the ISS flyover times:", error);
  } else {
    console.log('Success! Got flyover times:', flyOverTimes);
  }
});
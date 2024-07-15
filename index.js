// The goal of this program is to: 1. Get the users IP adress using a web API. 2. Get the geo coordinates of IP adress. 3. Get the next ISS flyover times of the coordinates. Each step depends on the data of the previous on, so make and test one at a time.

const {
  fetchMyIP,
  // fetchCoordsByIP,
  // fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
} = require('./iss');


// Testing
fetchMyIP((error, ip) => {
  if (error) {
    console.log('There was an error fetching your IP', error);
    return;
  }
  console.log('Success! Fetched your IP as:', ip);
});

nextISSTimesForMyLocation((error, flyoverTimes) => {
  if (error) {
    console.log("It didn't work!", error);
  } else {
    console.log('It worked! Returned flyover times:', flyoverTimes);
  }
});


// Due to removing the test coordinates, these can no longer work independantly.
// Testing the fetchCoordsByIP

// fetchCoordsByIP((error, lat, long) => {
//   if (error) {
//     console.log('There was an error fetching your coords', error);
//     return;
//   }
//   console.log('Success! Fetched your coords as:', lat, long);
// });

// Testing fetchISSFlyOverTimes

// fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
//   if (error) {
//     console.error("There was an error getting the ISS flyover times:", error);
//   } else {
//     console.log('Success! Got flyover times:', flyOverTimes);
//   }
// });


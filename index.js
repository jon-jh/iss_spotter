// The goal of this program is to: 1. Get the users IP adress using a web API. 2. Get the geo coordinates of IP adress. 3. Get the next ISS flyover times of the coordinates. Each step depends on the data of the previous on, so make and test one at a time.

const {
  // fetchMyIP,
  // fetchCoordsByIP,
  // fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
} = require('./iss');


// Removed tests as per instructions
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('There was an error fetching your IP', error);
//     return;
//   }
//   console.log('Success! Fetched your IP as:', ip);
// });

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

// The returned times could use some formatting to make it more understandable!

const formatOutput = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`ISS at your location on ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("There was an error. It is, what it is.", error);
  }
  formatOutput(passTimes);
});
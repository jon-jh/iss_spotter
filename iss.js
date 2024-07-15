/* Define a function fetchMyIP which will asynchronously return our IP Address using an API.

needle syntax:

needle.get(url, function(error, response) {
    if (error) {
      callback(error);
    }
    callback(null, response.body);


 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 * // parse and extract the IP address using JSON and then pass that through to the callback (as the second argument) if there is no error
 */

const needle = require('needle');

const fetchMyIP = function(callback) {

  const url = 'https://api.ipify.org?format=json';

  needle.get(url, function(error, response) {
    if (error) {
      callback(error);
    }
    callback(null, response.body.ip); // added .ip to callback the right data, not the whole body.
    
    //Remember, you are calling fetchMyIP with 2 arguments, so you must include 2 here.
  });
};

// Our next function, fetchCoordsByIP will be one that takes in an IP address and returns the latitude and longitude for it.

const fetchCoordsByIP = function(ip, callback) { //added placeholder for ip since it needs to get the ip from the earlier function in this case.
  const url = `http://ipwho.is/${ip}`;
  needle.get(url, function(error, response) {
    if (error) {
      callback(error);
    }
    const { latitude, longitude } = response.body;// Changed this to callback the objects as a const = response.body
    callback(null, latitude, longitude);
  });
};


//Now, insert a function to get the ISS flyover times for coords.
/*
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
// disabled test coords to make the chain function which gets coords from the previous function.
// let coords = { latitude: 0, longitude: 0 };

const fetchISSFlyOverTimes = function(coords, callback) {

  let url = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;
  
  needle.get(url, function(error, data) {
    if (error) {
      callback(error, null);
    }
    callback(null, data.body.response);
  }
  );
};


const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      callback(error, null);
    } //If fetchMyIP succeeds, it calls fetchCoordsByIP with the IP address.
    fetchCoordsByIP(ip, (error, latitude, longitude) => {
      if (error) {
        callback(error, null);
      } //If fetchCoordsByIP succeeds, it calls fetchISSFlyOverTimes with the coordinates.
      const coords = { latitude, longitude };
      fetchISSFlyOverTimes(coords, (error, flyoverTimes) => {
        if (error) {
          callback(error, null);
        } //If fetchISSFlyOverTimes succeeds, it calls the final callback with the flyover times
        callback(null, flyoverTimes);
      });
    });
  });
};



module.exports = {
  fetchMyIP,
  // fetchCoordsByIP,
  // fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
}; // must always be at the bottom of the file to allow for proper initialization of the functions.
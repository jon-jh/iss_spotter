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
    callback(null, response.body); // Remember, you are calling fetchMyIP with 2 arguments, so you must include 2 here.
  });
};

// Our next function, fetchCoordsByIP will be one that takes in an IP address and returns the latitude and longitude for it.

const fetchCoordsByIP = function(callback) {
  let ipOrig = '0.0.0.0';
  let url = `http://ipwho.is/${ipOrig}`;

  needle.get(url, function(error, response) {
    if (error) {
      callback(error);
    }

    callback(error, response.body.latitude, response.body.longitude); // Remember, you are calling with 3 arguments, so you must include 3 here.
    // console.log(typeof(response))

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

const coords = { latitude: 0, longitude: 0 };

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



module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, coords }; // must always be at the bottom of the file to allow for proper initialization of the functions.
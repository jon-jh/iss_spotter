/* Define a function fetchMyIP which will asynchronously return our IP Address using an API.

needle syntax:

needle.get(url, function(error, response) {
if (!error && response.statusCode == 200)
  console.log(response.body);
  });


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

module.exports = { fetchMyIP }; // must always be at the bottom of the file to allow for proper initialization of the functions.
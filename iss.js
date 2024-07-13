// Define a function fetchMyIP which will asynchronously return our IP Address using an API.

const needle = require("needle");

const fetchMyIP = function(callback) {
  needle.get(('https://api.ipify.org?format=json'), (err, response, body) => {
    if (err) {
      console.log('There was an error.', err);
      return;
    }

    if (response.statusCode !== 200) {
      console.log(`There was an error with status code: ${response.statusCode}`);
    }

    console.log('Success! Here is your IP:', body.ip);
    return;
  });
};
  

// Test

// fetchMyIP()

module.exports = { fetchMyIP };

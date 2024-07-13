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
    callback(body.ip); //use this instead of "return" to pass the ip adress back into the callback function. This is because these functions are asyncronous.
  });
};
  

// Test

// fetchMyIP()

// Step 2 - input fetchMyIp into another api that returns the geo location.

const geoLocate = function(ip, callback) {
  needle.get((`http://ipwho.is/${ip}`), (err, response, body) => {
    // console.log(body)

    //we want to extract the properties called 'latitude' and 'longitude' from the object 'body'
    const latitude = body.latitude;
    const longitude = body.longitude;


    callback({latitude, longitude});//use this instead of "return" to pass the ip adress back into the callback function. This is because these functions are asyncronous.





  });
};



module.exports = { fetchMyIP, geoLocate};
const Weather = require("./weather");
const Geo = require("./geo");

const Fulldata = (location) => {
  Geo(location)
    .then((data) => {
      return Weather(data.lat, data.lon, data.country, data.city);
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.error);
    });
};

Fulldata("colombo");

require("dotenv").config();
const axios = require("axios");

const Weather = (lat, lon, country, city) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY}`
      )
      .then((res) => {
        resolve({
          weather: res.data.main.temp,
          description: res.data.weather[0].description,
          country: country,
          city: city,
        });
      })
      .catch((err) => {
        reject({ error: err.response.data.message });
      });
  });
};

module.exports = Weather;

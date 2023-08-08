const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Weather = require("./weather");
const Geo = require("./geo");

app.use(cors());

app.get("/api", (req, res) => {
  const d = new Date();
  res.send({ currentDate: d.toDateString() });
});

app.post("/api", cors(), async (req, res) => {
  const { val } = req.body;
  Geo(val)
    .then((data) => {
      return Weather(data.lat, data.lon, data.country, data.city);
    })
    .then((data) => {
      res.json({
        weather: data.weather,
        description: data.description,
        main: data.main,
        country: data.country,
        city: data.city,
        icon: data.icon,
        max_t: data.max_t,
        min_t: data.min_t,
        pressure: data.pressure,
        humidity: data.humidity,
      });
    })
    .catch((err) => {
      res.json({
        error: err.error,
      });
    });
});

app.listen(5000, () => {
  console.log("5000");
});

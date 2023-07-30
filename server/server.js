const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const cros = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Weather = require("./weather");
const Geo = require("./geo");

app.use(cros());

app.get("/ap", (res, req) => {});

app.post("/api", cros(), async (req, res) => {
  const { val } = req.body;
  Geo(val)
    .then((data) => {
      return Weather(data.lat, data.lon, data.country, data.city);
    })
    .then((data) => {
      res.json({
        weather: data.weather,
        description: data.description,
        country: data.country,
        city: data.city,
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

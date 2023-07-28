const express = require("express");
const app = express();

const cros = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Weather = require("./weather");
const Geo = require("./geo");

app.use(cros());

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

app.post("/", async (req, res) => {
  const { val } = req.body;

  return Fulldata(val);
});

app.get("/", async (req, res) => {
  res.send({ name: "madush" });
});

app.listen(5000, () => {
  console.log("5000");
});

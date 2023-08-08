import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [val, setVal] = useState("");

  const [backend, setbackend] = useState([]);
  const [backendDate, setbackendDate] = useState("");

  async function submit(e) {
    e.preventDefault();

    await axios
      .post("http://localhost:5000/api", {
        val,
      })
      .then((response) => {
        setbackend({
          weather: response.data.weather,
          description: response.data.description,
          main: response.data.main,
          country: response.data.country,
          city: response.data.city,
          icon: response.data.icon,
          max_t: response.data.max_t,
          min_t: response.data.min_t,
          pressure: response.data.pressure,
          humidity: response.data.humidity,
        });
      })
      .catch((error) => {
        setbackend({
          error: "Unable to find location",
        });
      });

    await axios
      .get("http://localhost:5000/api")
      .then((response) => {
        setbackendDate({
          date: response.data.currentDate,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <section class="App">
        <div class="left_containe">
          <div class="weather_header">
            <div class="header_containe">
              <h5>Weather</h5>
            </div>
            <div class="location_containe">
              <i class="bi bi-geo-alt-fill loc_icon"></i>
              <div>
                {
                  <div class="search_location">
                    <p class="current_location">Current Location</p>
                    <p>
                      {backend.country} , {backend.city}
                    </p>
                  </div>
                }
              </div>
            </div>
          </div>

          <div class="input_containe">
            <div>
              <h6>The Only Weather Forecast You Need</h6>
              <div class="input_one">
                <div>
                  <div class="line_containe"></div>

                  <div class="input_location">
                    <form>
                      <input
                        class="input_container"
                        name="text"
                        onChange={(e) => {
                          setVal(e.target.value);
                        }}
                        placeholder="Enter Location"
                      />
                      <i
                        type="submit"
                        onClick={submit}
                        class="bi bi-search button"
                      ></i>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="right_containe">
          <h2>Today</h2>

          <div class="weater_containe">
            <div class="temp_containe">
              <div>
                <h1>{Math.round(backend.weather)} </h1>
                <h3 class="main_container">{backend.main}</h3>
                <h6> {backend.description}</h6>
                <p>{backendDate.date}</p>
              </div>
            </div>
            <div class="line"></div>
            <div class="more_containe">
              <div>
                <p>
                  <span>
                    Min Temperature <i class="bi bi-caret-right-fill"></i>
                  </span>
                  {backend.min_t}
                </p>
                <p>
                  <span>
                    Pressure <i class="bi bi-caret-right-fill"></i>
                  </span>
                  {backend.pressure}
                </p>
              </div>
              <div>
                <p>
                  <span>
                    Max Temperature <i class="bi bi-caret-right-fill"></i>
                  </span>
                  {backend.max_t}
                </p>
                <p>
                  <span>
                    Humidity <i class="bi bi-caret-right-fill"></i>
                  </span>
                  {backend.humidity}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

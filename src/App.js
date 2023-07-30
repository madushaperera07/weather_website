import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [val, setVal] = useState("");

  const [backend, setbackend] = useState([]);

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
          country: response.data.country,
          city: response.data.city,
        });
      })
      .catch((error) => {
        setbackend({
          error: error.err.error,
        });
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
                  <div>
                    <p>Current Location</p>
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
                    <form action="POST">
                      <input
                        name="text"
                        onChange={(e) => {
                          setVal(e.target.value);
                        }}
                        placeholder="Enter Location"
                      />
                      <input type="submit" onClick={submit} class="button" />
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
            {
              <div>
                <h4>{backend.weather}</h4>
                <p>{backend.description}</p>
                <p>{backend.country}</p>
                <p>{backend.city}</p>
                <p>{backend.error}</p>
              </div>
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

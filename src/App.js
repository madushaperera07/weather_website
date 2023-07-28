import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [val, setVal] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/", {
        val,
      });
    } catch (e) {
      console.log(e);
    }
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
                <p>Current Location</p>

                <p>country , city</p>
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
          <div class="weater_containe"></div>
        </div>
      </section>
    </>
  );
}

export default App;

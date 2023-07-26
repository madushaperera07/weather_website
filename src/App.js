
import './App.css';

function App() {
  return (
  <>

    <section className="App">
      <div className="left_containe">
          <div className="weather_header">
            <div className="header_containe">
              <h5>Weather</h5>
            </div>    
            <div className="location_containe">
              
              <i class="bi bi-geo-alt-fill loc_icon"></i>
              <div>

              <p>Current Location</p>

              <p>country , city</p>
              </div>
            </div>
          </div>
      
        
        <form className="input_containe">
          <div>
          <h6>The Only Weather Forecast You Need</h6>
          <div className="input_one">
            <div>
            <div className="line_containe"></div>
            <div className="input_location">
            
              <input type="text" class="form-control input_all" placeholder="Enter Location"/>
              <button type="submit" class="btn btn-outline-light"><i class="bi bi-search"></i></button>
            
            </div>

                       
            </div>
          </div>

          </div>
        </form>
      </div>
      
          
      <div className="right_containe">
      <h2>Today</h2>
      <div className="weater_containe">

      </div>
      </div>
    </section>
  </>
  );
}

export default App;


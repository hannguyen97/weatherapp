import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

RegionMain.propTypes = {
  
};

function RegionMain() {
  const [weather, setWeather] = useState([]);
  useEffect(()=>{
      fetch('http://api.openweathermap.org/data/2.5/find?lat=21&lon=105.5&cnt=10&appid=6150648e44d686852caa04818c28403d')
           .then(res => res.json())
           .then((data) => {
             setWeather(data.list);
             console.log("weather",weather)
          })
           
  },[])
 

  return (
    <div>
        {/* {weather.map(weather => weather.main = "Mist").map(weatherTE =>  */}
            <main className="region-main" >
            <div className="Card-main">
              <section className="card">
                <div className="CurrentConditions-header">
                  <h1 className="locationPageTitle">
                    <strong>   </strong>
                  </h1>
                  <div className="timestamp">As of 9:35 am ICT</div>
                </div>
                <div className="CurrentConditions-dataWrapper">
                  <div className="CurrentConditions-primary">
                    <span className="TemperatureValue">21°</span>
                    <div className="phraseValue"></div>
                  </div>
                  <div className="CurrentConditions-secondary">
                    <i className="fas fa-cloud-sun" />
                    <div className="tempHiLoValue"> 
                      <span>21°</span>
                      /<span>16°</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="TodayweatherCard">
              <section className="card TodayweatherCard">
                <div className="CurrentConditions-header">
                  <h1 className="locationPageTitle">
                    <strong> Today's Forecast for An Khê, Da Nang, Vietnam</strong>
                  </h1>
                </div>
                <div className="TableWrapper">
                  <ul className="WeatherTable--columns">
                    <li>
                      <a>
                        <h3 className="Column-label"><span>Morning</span></h3>
                        <div className="Column-temp"><span>18°</span></div>
                        <div className="Column-icon"><i className="fas fa-cloud-sun" /></div>
                        <div className="Column-precip"><span>2°</span></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <h3 className="Column-label"><span>Afternoon</span></h3>
                        <div className="Column-temp"><span>21°</span></div>
                        <div className="Column-icon"><i className="fas fa-cloud-sun" /></div>
                        <div className="Column-precip"><span>2°</span></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <h3 className="Column-label"><span>Evening</span></h3>
                        <div className="Column-temp"><span>15°</span></div>
                        <div className="Column-icon"><i className="fas fa-cloud-showers-heavy" /></div>
                        <div className="Column-precip"><span>2°</span></div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <h3 className="Column-label"><span>Overnight</span></h3>
                        <div className="Column-temp"><span>17°</span></div>
                        <div className="Column-icon"><i className="fas fa-cloud-rain" /></div>
                        <div className="Column-precip"><span>2°</span></div>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </main>
          {/* )} */}
    </div>
  );
}

export default RegionMain;
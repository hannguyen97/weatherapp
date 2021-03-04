import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Clock from '../Clock/Clock';

RegionMain.propTypes = {
  
};

function RegionMain() {
  const [weather, setWeather] = useState([]);
  useEffect(()=>{
      fetch('http://api.openweathermap.org/data/2.5/weather?q=Turan&appid=6150648e44d686852caa04818c28403d')
           .then(res => res.json())
           .then((data) => {
             setWeather(data);
             console.log("weatherRG",weather)
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
                    <strong>  {weather.name} {weather.sys?.country} </strong>
                  </h1>
                  <div className="timestamp">As of <Clock></Clock> am ICT</div>
                </div>
                <div className="CurrentConditions-dataWrapper">
                  <div className="CurrentConditions-primary">
                    <span className="TemperatureValue">{weather.main?.temp -273.15}°C</span>
                    <div className="phraseValue">{weather?.weather?.description}</div>
                  </div>
                  <div className="CurrentConditions-secondary">
                    <i className="fas fa-cloud-sun" />
                    <div className="tempHiLoValue"> 
                      <span>{weather.main?.temp_max -273.15}°</span>
                      /<span>{weather.main?.temp_min -273.15}°</span>
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
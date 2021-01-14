import React from 'react';
import PropTypes from 'prop-types';

WeatherDetailItem.propTypes = {
  
};

function WeatherDetailItem(props) {
  return (
    <div>
      <aside className="region-sidebar">
        <section className="card TodayweatherCard">
          <div className="CurrentConditions-header">
            <h1 className="locationPageTitle">
            </h1><h6>Weather Today in  Da Nang, Vietnam</h6>
          </div>
          <div className="todayDetailCard">
            <span>21°C</span>
            <span>Fells Like</span>
          </div>
          <div className="TodayDetailsCard-detailsContainer">
            <div className="ListItem">
              <div><i className="fas fa-cloud-rain" />
                High/Low</div>
              <div>
                <span>22</span>/
                <span>16</span>
              </div>
            </div>
            <div className="ListItem">
              <div><i className="fas fa-tint" />
                Humidity</div>
              <div>
                <span>64%</span>
              </div>
            </div>
            <div className="ListItem">
              <div><i className="fas fa-wind" />
                Wind</div>
              <div>
                <span>2 km/h</span>
              </div>
            </div>
            <div className="ListItem">
              <div><i className="far fa-eye" />
                Visibility</div>
              <div>
                <span>8.05 km</span>
              </div>
            </div>
          </div>
          <div className="TableWrapper">
          </div>
        </section>
      </aside>
    </div>
  );
}

export default WeatherDetailItem;
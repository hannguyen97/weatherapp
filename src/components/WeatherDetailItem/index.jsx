import React from 'react';
import PropTypes from 'prop-types';

WeatherDetailItem.propTypes = {
  
};

function WeatherDetailItem(props) {
  const { name,lon,wind,humidity } = props
  return (
    <div>
      <aside className="region-sidebar">
        <section className="card TodayweatherCard">
          <div className="CurrentConditions-header">
            <h1 className="locationPageTitle">
            </h1><h6>  {name}</h6>
          </div>
          <div className="todayDetailCard">
            <span>{lon}</span>
            <span> ° </span>
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
                <span>{humidity} %</span>
              </div>
            </div>
            <div className="ListItem">
              <div><i className="fas fa-wind" />
                Wind</div>
              <div>
                <span>{wind}</span>
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
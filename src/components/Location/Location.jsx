import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Location.propTypes = {
  
};

function Location() {
  const [location, setLocation] = useState([]);
  useEffect(()=>{
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Turan&appid=6150648e44d686852caa04818c28403d')
         .then(res => res.json())
         .then((data) => {
           setLocation(data);
           
        })
         
},[])
  return (
    <div>
        <div className="location">
          <div className="container">
            <a className="location-style">
              <i className="fas fa-cloud-sun" />
              <span> {location.main?.temp - 273.15}°C </span>
              <span>{location.name}, VN</span>
            </a>
          </div>
        </div>
    </div>
  );
}

export default Location;
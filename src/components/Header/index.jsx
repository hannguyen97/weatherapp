import React, { useState } from 'react';
import Search from './Search';

Header.propTypes = {
  
};

function Header(props) {
  const [inputs, setInputs] = useState({
    keyword : ""
 });
 const onHandleSearch =(keyword) => {
  props.onSearch1(keyword);
      // setInputs(keyword)
      // console.log(keyword)
  }

  return (
    <div>
       <header>
        <nav className="navbar navbar-expand-sm navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">Weather App</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">Today <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">Hourly <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">Wekeend <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">Montly <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">Radar <span className="sr-only">(current)</span></a>
                </li>
              </ul>
             <Search    onSearch={onHandleSearch}></Search>
            </div>
          </div>
        </nav>
        <div className="location">
          <div className="container">
            <a className="location-style">
              <i className="fas fa-cloud-sun" />
              <span>19° C</span>
              <span>An Khe,Da Nang, VN</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
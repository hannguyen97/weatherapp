import React, { useState } from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
  
};

function Search(props) {
  
  const [inputs, setInputs] = useState({
    keyword : ""
 });
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value })); 
  }
  const sendData = e => {
    e.preventDefault();
    props.onSearch(inputs.keyword);
  }
  return (
    <div>
         <form className="form-inline my-2 my-lg-0" onSubmit={sendData}>
                <input className="form-control mr-sm-2"
                 name="keyword" 
                 type="text" 
                 placeholder="Search"
                 onChange={handleChange}
                  />
                <button className="btn  my-2 my-sm-0" 
                type="submit"
                ><i className="fas fa-search-location" /></button>
              </form>
    </div>
  );
}

export default Search;
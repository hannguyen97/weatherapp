
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Header/Search';
import RegionMain from './components/RegionMain';
import WeatherDetailItem from './components/WeatherDetailItem';

function App() {
  function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return str;
};
  const [search , setSearch] = useState("")
  const [weatherTask , setWeatherTask] = useState([]);
   const urlCityName ='http://api.openweathermap.org/data/2.5/weather?q=London&appid=6150648e44d686852caa04818c28403d' 
   const urlCityCirle = 'http://api.openweathermap.org/data/2.5/find?lat=16&lon=108&cnt=50&appid=6150648e44d686852caa04818c28403d'
  useEffect(()=>{
      fetch(urlCityCirle)
           .then(res => res.json())
           .then((data) => {
             setWeatherTask(data.list);
            
             console.log("weather",weatherTask)
          })
           
  },[])
  console.log("weather",weatherTask)
  const onHandleSearch = (keyword)=>{
      const result = removeVietnameseTones(keyword)
      console.log(result);
      setSearch(result);

  }
  useEffect(()=>{
    
    
  })

  return (
    <div className="App">
       <div className="appWrapper">
        <Header onSearch1={onHandleSearch}></Header>
        <main id="Maincontent">
          <div className="LargeScreens">
            <RegionMain></RegionMain>
            {weatherTask
        .filter((val) => {
          if (search == "") {
            return val;
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
        .map((val, key) => {
          if (search != ""){
                    return (
              <div   key={key}>
              <WeatherDetailItem
                name={val.name}
                lon={(val.main.temp-273.15).toFixed(0)}
                wind={val.wind.speed}
                humidity={val.main.humidity}
                high={val.main.temp_max -273.15}
                low={val.main.temp_min -273.15}
              ></WeatherDetailItem>
             </div>
          );
          } 
  
        })}
          </div>
   
     
        </main>


      </div>
      
    </div>
  );
}

export default App;

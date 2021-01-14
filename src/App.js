
import './App.css';
import Header from './components/Header';
import RegionMain from './components/RegionMain';
import WeatherDetailItem from './components/WeatherDetailItem';

function App() {
  return (
    <div className="App">
         <div class="appWrapper">
          <Header></Header>
          <main id="Maincontent">
            <div class="LargeScreens">
              <RegionMain></RegionMain>
              <WeatherDetailItem></WeatherDetailItem>
            </div>  
        </main>
        </div>
    </div>
  );
}

export default App;

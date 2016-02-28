import React from 'react';
import L from 'leaflet';

class WeatherMap extends React.Component {
  constructor() {
    super()
    this.closeDrawer = this.closeDrawer.bind(this);

    // this.temp = new ReactiveVar();
    this.temp = '';
    // this.getLatestTimestamp = this.getLatestTimestamp(this);
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    Session.set('drawerVisibility', 'false');

    const {stations} = this.props;

    //Store all this data in db
    const northEast = L.latLng(21.924058, 115.342984);
    const southWest = L.latLng(4.566972, 128.614468);   
    const bounds = L.latLngBounds(southWest, northEast);

    const map = L.map('map', {
      maxBounds: bounds,
      center: [14.154604, 121.247505],
      zoom: 8,
      minZoom: 7
    });
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg', {
      // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 14,
      id: 'mcarandang.p67769a5',
      accessToken: 'pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg'
    }).addTo(map);

    const markerIcon = L.icon({
      iconUrl: '/images/real-time-data/map_marker.png',
      iconSize: [40, 40],
      iconAnchor: [20, 39],
      popupAnchor: [0, -40]
    });

    

    for (let station of stations) {
      L.marker(
        [station.coords[0], station.coords[1]],
        {icon: markerIcon}).bindPopup(station.label).on('click', () => {

          if (Session.get('drawerVisibility') == 'false') {
            //Increase drawer width
            let drawer = document.getElementById('drawer');
            drawer.classList.remove('hidden-drawer', 'hidden-element');
            drawer.classList.add('visible-drawer', 'visible-element');
            
            //Un-hide drawer content
            let drawerContent = document.getElementById('drawer-content');
            drawerContent.classList.remove('hidden-element');
            drawerContent.classList.add('visible-element');

            Session.set('drawerVisibility', 'true');

            //Get last timestamp
            $.getJSON(
              //`http:\/\/localhost:3080/api/${station.name}/last`,
              `https:\/\/sarai-realtime-tjmonsi1.c9users.io/api/${station.name}/last`,
              (data) => {
                console.log(`Success: Latest from ${station.name} is ${data}`);

                //$.getJSON(`http:\/\/localhost:3080/api/${station.name}/get/${data}`,
                $.getJSON(`https:\/\/sarai-realtime-tjmonsi1.c9users.io/api/${station.name}/get/${data}`,

                  (data) => {
                    console.log(data);
                    // this.temp.set(data.temperature.outside.value);
                    this.temp = data.temperature.outside.value;
                    Session.set('temperature.outside.value', data.temperature.outside.value);
                    Session.set('temperature.outside.min', data.temperature.outside.min);
                    Session.set('temperature.outside.max', data.temperature.outside.max);

                    Session.set('humidity.outside', data.humidity.outside);
                    Session.set('humidity.inside', data.humidity.inside);

                    Session.set('solar.UV.average', data.solar.UV.average);
                    Session.set('solar.UV.max', data.solar.UV.max);


                    Session.set('barometer', data.barometer);
                    Session.set('station', data.station);
                    Session.set('rainfall.value', data.rainfall.value);
                    Session.set('solar.radiation.value', data.solar.radiation.value);

                    Session.set('soil.temperature.0', data.soil.temperature[0]);
                    Session.set('soil.temperature.1', data.soil.temperature[1]);
                    Session.set('soil.temperature.2', data.soil.temperature[2]);
                    Session.set('soil.temperature.3', data.soil.temperature[3]);

                    Session.set('soil.humidity.0', data.soil.humidity[0]);
                    Session.set('soil.humidity.1', data.soil.humidity[1]);
                    Session.set('soil.humidity.2', data.soil.humidity[2]);
                    Session.set('soil.humidity.3', data.soil.humidity[3]);

                    Session.set('wind.direction.prevailing', data.wind.direction.prevailing);
                    Session.set('wind.speed.average', data.wind.speed.average);
                  });

              }
            );
          }
        }).addTo(map);
    }

  }

  

  closeDrawer() {

    if (Session.get('drawerVisibility') == 'true') {

      //Decrease drawer width to 0 
      let drawer = document.getElementById('drawer');
      drawer.classList.remove('visible-drawer');
      drawer.classList.add('hidden-drawer');

      //Hide drawer contents
      let drawerContent = document.getElementById('drawer-content');
      drawerContent.classList.remove('visible-element');
      drawerContent.classList.add('hidden-element');

      Session.set('drawerVisibility', 'false');
    }
  }

  renderDrawerContent() {
    let windDirection = Session.get('wind.direction.prevailing') - 45;
    // console.log(windDirection);

    const windSpeedRotation = {
      transform: `rotate(${windDirection}deg)`
    }

    return (
      <div id="drawer" className="hidden-drawer">
        <div id="drawer-content" className="hidden-element">

          <div className="mdl-grid">


            <div className="mdl-cell mdl-cell--6-col">
              <div id="station-name">
                {Session.get('station')}
              </div>
              <div id="last-updated">
                Updated just now
              </div>              
            </div>

            <div className="mdl-cell mdl-cell--6-col">              
              <div id="temp-minmax">
                {Session.get('temperature.outside.min')}&deg; | {Session.get('temperature.outside.max')}&deg;
              </div>

              <div id="temp">
                {Session.get('temperature.outside.value')}&deg; F
              </div>                
            </div>

            <div className="mdl-cell mdl-cell--6-col first-row">
              <div className="first-row-title">
                <img className="label-icon" src="images/weather-monitoring/icons/precip.png" /><span className="icon-title"> PRECIP</span>
              </div>
              <div className="first-row-value">
                {Session.get('rainfall.value')} mm<sup>&nbsp;</sup>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--6-col first-row">
              <div className="first-row-title">
                <img className="label-icon" src="images/weather-monitoring/icons/solar.png" /> SOLAR
              </div>
              <div className="first-row-value">
                {Session.get('solar.radiation.value')} w/m<sup>2</sup>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--2-offset mdl-cell--8-col">
              <hr />
            </div>

            <div id="soil-depth-header" className="mdl-cell mdl-cell--4-col">
              SOIL
            </div>

            <div id="soil-temp-header" className="mdl-cell mdl-cell--4-col">
              <img className="label-icon" src="images/weather-monitoring/icons/temp.png" /><span className="icon-title"> TEMP</span>
            </div>

            <div id="soil-moisture-header" className="mdl-cell mdl-cell--4-col">
              <img className="label-icon" src="images/weather-monitoring/icons/soil_moisture.png" /><span className="icon-title"> MOISTURE</span>
            </div>

            <div className="mdl-cell mdl-cell--4-col soil-depth">
              1ft&darr;
            </div>
            <div className="mdl-cell mdl-cell--4-col soil-temp">
              {Session.get('soil.temperature.0')}&deg; F
            </div>
            <div className="mdl-cell mdl-cell--4-col soil-moisture">
              {Session.get('soil.humidity.0')} cb
            </div>

            <div className="mdl-cell mdl-cell--4-col soil-depth">
              2ft&darr;
            </div>
            <div className="mdl-cell mdl-cell--4-col soil-temp">
              {Session.get('soil.temperature.1')}&deg; F
            </div>
            <div className="mdl-cell mdl-cell--4-col soil-moisture">
              {Session.get('soil.humidity.1')} cb
            </div>

            <div className="mdl-cell mdl-cell--4-col soil-depth">
              3ft&darr;
            </div>
            <div className="mdl-cell mdl-cell--4-col soil-temp">
              {Session.get('soil.temperature.2')}&deg; F
            </div>
            <div className="mdl-cell mdl-cell--4-col soil-moisture">
              {Session.get('soil.humidity.2')} cb
            </div>

            <div className="mdl-cell mdl-cell--4-col soil-depth">
              4ft&darr;
            </div>
            <div className="mdl-cell mdl-cell--4-col soil-temp">
              {Session.get('soil.temperature.3')}&deg; F
            </div>
            <div className="mdl-cell mdl-cell--4-col soil-moisture">
              {Session.get('soil.humidity.3')} cb
            </div>

            <div className="mdl-cell mdl-cell--2-offset mdl-cell--8-col">
              <hr />
            </div>

            <div id="wind-header" className="mdl-cell mdl-cell--12-col simple-weather-header">
              WIND
            </div>

            <div id="wind" className="mdl-cell mdl-cell--12-col">
              <img id="wind-direction-icon" src="images/weather-monitoring/icons/compass.png" style={windSpeedRotation}/> Ave: {Session.get('wind.speed.average')} m/s
            </div>

            <div className="mdl-cell mdl-cell--2-offset mdl-cell--8-col">
              <hr />
            </div>

            <div id="humidity-header" className="mdl-cell mdl-cell--6-col simple-weather-header">
              HUMIDITY
            </div>

            <div id="humidity-header" className="mdl-cell mdl-cell--6-col simple-weather-header">
              PRESSURE
            </div>

            <div className="mdl-cell mdl-cell--6-col simple-weather-header">
              {Session.get('humidity.outside')}%
            </div>

            <div className="mdl-cell mdl-cell--6-col simple-weather-header">
              {Session.get('barometer')} inHG
            </div>





          </div>
          
          <div id="drawer-controls">
            <button id="drawer-close-button" onClick={this.closeDrawer}>x</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (

      <div id="map-container">
        <div id="map"></div>
        {this.renderDrawerContent()}
      </div>
        
    );
  }
}

export default WeatherMap;
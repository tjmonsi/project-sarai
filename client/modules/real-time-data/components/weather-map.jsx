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
      minZoom: 7,
    });
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
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
              `http:\/\/localhost:3080/api/${station.name}/last`,
              (data) => {
                console.log(`Success: Latest from ${station.name} is ${data}`);

                $.getJSON(`http:\/\/localhost:3080/api/${station.name}/get/${data}`,
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

                    Session.set('wind.speed.max', data.wind.speed.max);
                    Session.set('wind.speed.average', data.wind.speed.average);


                    console.log(`Outside temp is currently ${this.temp}`);
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

    return (
      <div id="drawer" className="hidden-drawer">
        <div id="drawer-content" className="hidden-element">
          <div id="drawer-header">
            <div className="left">
              <span className="station-name">{Session.get('station')}</span>
              <br />
              <span className="last-updated">Updated just now </span>
              
            </div>
            <div className="right">
              <div className="temp-minmax">
                {Session.get('temperature.outside.min')}&deg; | {Session.get('temperature.outside.max')}&deg;
              </div>
              <div className="temp">
                {Session.get('temperature.outside.value')}&deg; F
              </div>
            </div>
          </div>

          <div className="row detail">
            <div className="left">
              Pressure
            </div>
            <div className="right detail">
              {Session.get('barometer')} inHg
            </div>
          </div>

          <div className="row detail">
            <div className="left">
              Outside Humidity
            </div>
            <div className="right detail">
              {Session.get('humidity.outside')}%
            </div>
          </div>

          <div className="row detail">
            <div className="left">
              Inside Humidity
            </div>
            <div className="right detail">
              {Session.get('humidity.inside')}%
            </div>
          </div>
          
           <div className="row detail">
            <div className="left">
              Average Radiation
            </div>
            <div className="right detail">
              {Session.get('solar.UV.average')}
            </div>
          </div>
          
           <div className="row detail">
            <div className="left">
              Max Radiation
            </div>
            <div className="right detail">
              {Session.get('solar.UV.max')}
            </div>
          </div>
          
          <div className="row detail">
            <div className="left">
              Max Wind Speed
            </div>
            <div className="right detail">
              {Session.get('wind.speed.max')}
            </div>
          </div>
          
          <div className="row detail">
            <div className="left">
              Average Wind Speed
            </div>
            <div className="right detail">
              {Session.get('wind.speed.average')}
            </div>
          </div>


          
          <div id="drawer-controls">
            <button onClick={this.closeDrawer}>x</button>
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
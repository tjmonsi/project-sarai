import React from 'react';
import L from 'leaflet';

import DrawerContent from './drawer-content.jsx';

class WeatherMap extends React.Component {
  constructor() {
    super()
    this.closeDrawer = this.closeDrawer.bind(this);
    this.temp = '';
    // this.getLatestTimestamp = this.getLatestTimestamp(this);
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    //Modal stuff
    // const dialog = document.querySelector('#rainfall-dialog');
    // const showDialogButton = document.querySelector('#show-dialog');
    // if (! dialog.showModal) {
    //   dialogPolyfill.registerDialog(dialog);
    // }
    // showDialogButton.addEventListener('click', function() {
    //   dialog.showModal();
    // });
    // dialog.querySelector('.close').addEventListener('click', function() {
    //   dialog.close();
    // });


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
      // maxZoom: 14,
      id: 'mcarandang.p67769a5',
      accessToken: 'pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg'
    }).addTo(map);

    const markerIcon = L.icon({
      iconUrl: '/images/weather-monitoring/map/marker.png',
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

            //What is with this line???
            //Session.set('drawerVisibility', 'true');

            //Get last timestamp
            $.getJSON(
              `http:\/\/localhost:3080/api/${station.name}/last`,
              // `https:\/\/sarai-realtime-tjmonsi1.c9users.io/api/${station.name}/last`,
              (data) => {
                console.log(`Success: Latest from ${station.name} is ${data}`);

                $.getJSON(`http:\/\/localhost:3080/api/${station.name}/get/${data}`,
                // $.getJSON(`https:\/\/sarai-realtime-tjmonsi1.c9users.io/api/${station.name}/get/${data}`,

                  (data) => {
                    console.log(data);
                    // What is this.temp
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

    //Instruction modal
    const instructionDialog = document.querySelector('#instruction-dialog');
    if (! instructionDialog.showModal) {
      dialogPolyfill.registerDialog(instructionDialog);
    }
    instructionDialog.querySelector('.close').addEventListener('click', function() {
      instructionDialog.close();
    });
    instructionDialog.showModal();

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

  toCelsius(f_temp) {
    if (f_temp == -1) return 'NA';

    let c = (f_temp - 32) * (0.5556);
    c = Number(Math.round(c+'e1')+'e-1');

    return `${c} °C`;
  }

  toCelsiusNoUnit(f_temp) {
    if (f_temp == -1) return 'NA';

    let c = (f_temp - 32) * (0.5556);
    c = Number(Math.round(c+'e1')+'e-1');

    return `${c}`;
  }

  formatRain(rain) {
    if (rain == -1) return 'NA';
    else return rain + 'mm';
  }

  formatSolar(solar) {
    if (solar == -1) return 'NA';
    else return solar;
  }

  formatSoilMoisture(sm) {
    if (sm <= 0 || sm >= 255) return 'NA';
    else return `${sm} cb`;
  }

  formatHumidity(humidity) {
    if (humidity <= 0 || humidity > 100) return 'NA';
    else return `${humidity}%`;
  }

  formatPressure(ap) {
    if (ap < 20 || ap > 40) return 'NA';
    else return `${ap} inHG`;
  }

  renderDrawerContent() {
    let windDirection = Session.get('wind.direction.prevailing') - 45;
    // console.log(windDirection);

    const windSpeedRotation = {
      transform: `rotate(${windDirection}deg)`
    }

    const dialogStyle = {
      width: '500px'
    }

    return (
        <div id="drawer" className="hidden-drawer">
          <div id="drawer-content" className="hidden-element">
            <DrawerContent
              data="sample line"
              temperatureOutsideValue={this.toCelsius(Session.get('temperature.outside.value'))}
              temperatureOutsideMin={this.toCelsiusNoUnit(Session.get('temperature.outside.min'))}
              temperatureOutsideMax={this.toCelsiusNoUnit(Session.get('temperature.outside.max'))}
              humidityOutside={this.formatHumidity(Session.get('humidity.outside'))}
              humidityInside={this.formatHumidity(Session.get('humidity.inside'))}
              solarUVAverage={Session.get('solar.UV.average')}
              solarUVMax={Session.get('solar.UV.max')}
              solarRadiationValue={this.formatSolar(Session.get('solar.radiation.value'))}
              barometer={this.formatPressure(Session.get('barometer'))}
              station={Session.get('station')}
              rainfallValue={this.formatRain(Session.get('rainfall.value'))}
              soilTemperature0={this.toCelsius(Session.get('soil.temperature.0'))}
              soilTemperature1={this.toCelsius(Session.get('soil.temperature.1'))}
              soilTemperature2={this.toCelsius(Session.get('soil.temperature.2'))}
              soilTemperature3={this.toCelsius(Session.get('soil.temperature.3'))}
              soilHumidity0={this.formatSoilMoisture(Session.get('soil.humidity.0'))}
              soilHumidity1={this.formatSoilMoisture(Session.get('soil.humidity.1'))}
              soilHumidity2={this.formatSoilMoisture(Session.get('soil.humidity.2'))}
              soilHumidity3={this.formatSoilMoisture(Session.get('soil.humidity.3'))}
              windDirectionPrevailing={Session.get('wind.direction.prevailing')}
              windSpeedAverage={Session.get('wind.speed.average')}
            />
          </div>
        </div>
    );

  }

  render() {
    return (

      <div id="map-container">
        <div id="map"></div>
        {this.renderDrawerContent()}
        <dialog id="instruction-dialog" className="mdl-dialog">
          <div className="mdl-dialog__content">
            {'Select a weather station from the map to view its latest reading.'}
          </div>
          <div className="mdl-dialog__actions">
            <button type="button" className="mdl-button close">OK</button>
          </div>
        </dialog>
      </div>

    );
  }
}

export default WeatherMap;
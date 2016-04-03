import React from 'react';
import L from 'leaflet';

import Meteogram from './meteogram.jsx';

class WeatherMap extends React.Component {
  constructor() {
    super()
    this.renderForecast = this.renderForecast.bind(this);
    Session.set('weatherFetched', 'false');
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
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
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
          {icon: markerIcon})
        .bindPopup(`<h5>${station.label}</h5>`)
        .on('click', () => {
          //Store key somewhere

          // $.getJSON(
          //   `http:\/\/api.wunderground.com/api/9470644e92f975d3/forecast10day/conditions/hourly10day/q/pws:${station.id}.json`,
          //   (data) => {
          //     this.data = data;
          //     Session.set('forecast', data.forecast.simpleforecast.forecastday);
          //     Session.set('conditions', data.current_observation);
          //     Session.set('hourlyForecast', data.hourly_forecast);

          //     this.extractData(data.hourly_forecast)

          //     Session.set('weatherFetched', 'true');
          //   })

          /*********** TEST DATA ***********/
          const {getSampleResponse} = this.props;

          const sampleData = getSampleResponse();

          Session.set('forecast', sampleData.forecast.simpleforecast.forecastday);
          Session.set('conditions', sampleData.current_observation)
          Session.set('hourlyForecast', sampleData.hourly_forecast);

          Session.set('meteogramData', this.getMeteogramData(sampleData));

          Session.set('weatherFetched', 'true');
          /*********** TEST DATA ***********/
        })
        .addTo(map);
    }

  }

  toMeters(elevationFeet) {
    let m = parseInt(elevationFeet) * 0.3048;
    return Number(Math.round(m));
  }

  formatCoordinates(c) {
    return Number(Math.round(c+'e2')+'e-2');
  }

  getMeteogramData(data) {
    const series = this.getSeries(data.hourly_forecast);
    const tickPositions = this.getTickPositions(data.forecast.simpleforecast.forecastday);

    const altTickPositions = this.getAltTickPositions(data.forecast.simpleforecast.forecastday);

    const meteogramData = {
      "series": series,
      "tickPositions": tickPositions,
      "altTickPositions": altTickPositions
    }

    return meteogramData;
  }

  getTickPositions(df) {
    const tickPositions = [];
    let year = 0;
    let month = 0;
    let day = 0;

    for (let entry of df) {
      const date = entry.date;
      year = date.year;
      month = date.month - 1;
      day = date.day;

      tickPositions.push(Date.UTC(year, month, day, 0))
    }

    const nextDay = day < 31 ? day + 1 : 1
    tickPositions.push(Date.UTC(year, month, nextDay, 0));

    return tickPositions;
  }

  getAltTickPositions(df) {
    const altTickPositions = [];
    let year = 0;
    let month = 0;
    let day = 0;

    for (let entry of df) {
      const date = entry.date;
      year = date.year;
      month = date.month - 1;
      day = date.day;

      altTickPositions.push(Date.UTC(year, month, day, 12))
    }

    const nextDay = day < 31 ? day + 1 : 1
    altTickPositions.push(Date.UTC(year, month, nextDay, 12));

    return altTickPositions;
  }

  getSeries(hf) {
    const temperature = [];
    const wind = [];
    const pressure = [];
    const pop = []

    for (let entry of hf) {
      const ftc = entry.FCTTIME;
      const utcDate = Date.UTC(ftc.year, ftc.mon-1, ftc.mday, ftc.hour);

      temperature.push([utcDate, parseFloat(entry.temp.metric)]);

      pressure.push([utcDate, parseFloat(entry.mslp.metric)]);

      pop.push([utcDate, parseFloat(entry.pop)]);

    }

    const hourlyData = {
      "temperature": temperature,
      "wind": wind,
      "pressure": pressure,
      "pop": pop
    }

    return hourlyData;
  }


  renderForecast() {
    if (Session.get('weatherFetched') == 'true') return (
      <div id="forecast-grid">

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--1-offset-desktop mdl-cell--10-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone">
            <div className="mdl-grid">

              <div className="mdl-cell mdl-cell--3-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--12-col">
                    <h5>{Session.get('conditions').observation_location.city}</h5>
                  </div>
                  <div className="mdl-cell mdl-cell--12-col">
                    <div className="mdl-grid">
                      <div id="current-coordinates" className="mdl-cell mdl-cell--12-col">
                        Elevation <span className="number">{this.toMeters(Session.get('conditions').observation_location.elevation)}</span> m <span className="number">{this.formatCoordinates(Session.get('conditions').observation_location.latitude)}</span> °N <span className="number">{this.formatCoordinates(Session.get('conditions').observation_location.longitude)}</span> °E
                      </div>


                      <div className="mdl-cell mdl-cell--4-col-desktop mdl-cell--2-col-tablet mdl-cell--2-col-phone center">
                        <img src={Session.get('conditions').icon_url} />
                      </div>

                      <div id="current-temperature" className="mdl-cell mdl-cell--4-col-desktop mdl-cell--3-col-tablet mdl-cell--1-col-phone center">
                        {Session.get('conditions').temp_c} °C
                      </div>

                      <div id="current-wind" className="mdl-cell mdl-cell--4-col-desktop mdl-cell--3-col-tablet mdl-cell--1-col-phone center">
                      Humidity<br/>
                        <span className="value">{Session.get('conditions').relative_humidity}</span>
                      </div>

                      <div id="current-weather-text" className="mdl-cell mdl-cell--4-col-desktop mdl-cell--2-col-tablet mdl-cell--2-col-phone center">
                        {Session.get('conditions').weather}
                      </div>

                      <div id="current-heat-index" className="mdl-cell mdl-cell--4-col-desktop mdl-cell--3-col-tablet mdl-cell--1-col-phone center">
                        Feels like<br /><span className="temp">{Session.get('conditions').feelslike_c} °C</span>
                      </div>

                      <div id="current-wind-string" className="mdl-cell mdl-cell--4-col-desktop mdl-cell--3-col-tablet mdl-cell--1-col-phone center">
                        Wind from <span className="value">{Session.get('conditions').wind_dir}</span>
                        <br/><span className="value">{Session.get('conditions').wind_gust_kph}</span> km/h gusts
                      </div>

                      <div id="current-updated" className="mdl-cell mdl-cell--12-col">
                        {Session.get('conditions').observation_time}
                      </div>

                    </div>
                  </div>
                </div>
                
              </div>

              <div className="mdl-cell mdl-cell--9-col mdl-cell--4-col-phone">
                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--12-col">
                    <h5>Forecast</h5>
                  </div>
                  <div className="mdl-cell mdl-cell--12-col">
                    <div className="mdl-grid">
                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[0].date.monthname_short} {Session.get('forecast')[0].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[0].low.celsius}° | {Session.get('forecast')[0].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={Session.get('forecast')[0].icon_url} />
                            <br/>{Session.get('forecast')[0].conditions}
                            <br/>{Session.get('forecast')[0].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[1].date.monthname_short} {Session.get('forecast')[1].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[1].low.celsius}° | {Session.get('forecast')[1].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={Session.get('forecast')[1].icon_url} />
                            <br/>{Session.get('forecast')[1].conditions}
                            <br/>{Session.get('forecast')[1].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[2].date.monthname_short} {Session.get('forecast')[2].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[2].low.celsius}° | {Session.get('forecast')[2].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={Session.get('forecast')[2].icon_url} />
                            <br/>{Session.get('forecast')[2].conditions}
                            <br/>{Session.get('forecast')[2].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[3].date.monthname_short} {Session.get('forecast')[3].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[3].low.celsius}° | {Session.get('forecast')[3].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={Session.get('forecast')[3].icon_url} />
                            <br/>{Session.get('forecast')[3].conditions}
                            <br/>{Session.get('forecast')[3].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[4].date.monthname_short} {Session.get('forecast')[4].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[4].low.celsius}° | {Session.get('forecast')[4].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={Session.get('forecast')[4].icon_url} />
                            <br/>{Session.get('forecast')[4].conditions}
                            <br/>{Session.get('forecast')[4].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[5].date.monthname_short} {Session.get('forecast')[5].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[5].low.celsius}° | {Session.get('forecast')[5].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={Session.get('forecast')[5].icon_url} />
                            <br/>{Session.get('forecast')[5].conditions}
                            <br/>{Session.get('forecast')[5].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[6].date.monthname_short} {Session.get('forecast')[6].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[6].low.celsius}° | {Session.get('forecast')[6].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={Session.get('forecast')[6].icon_url} />
                            <br/>{Session.get('forecast')[6].conditions}
                            <br/>{Session.get('forecast')[6].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[7].date.monthname_short} {Session.get('forecast')[7].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[7].low.celsius}° | {Session.get('forecast')[7].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={Session.get('forecast')[7].icon_url} />
                            <br/>{Session.get('forecast')[7].conditions}
                            <br/>{Session.get('forecast')[7].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[8].date.monthname_short} {Session.get('forecast')[8].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[8].low.celsius}° | {Session.get('forecast')[8].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={Session.get('forecast')[8].icon_url} />
                            <br/>{Session.get('forecast')[8].conditions}
                            <br/>{Session.get('forecast')[8].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[9].date.monthname_short} {Session.get('forecast')[9].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {Session.get('forecast')[9].low.celsius}° | {Session.get('forecast')[9].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={Session.get('forecast')[9].icon_url} />
                            <br/>{Session.get('forecast')[9].conditions}
                            <br/>{Session.get('forecast')[9].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              

            </div>
          </div>
        </div>

        
      </div>
    )
  }

  renderMeteogram() {
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       console.log(`Lat: ${position.coords.latitude} Lon: ${position.coords.longitude}`);
    //     });
    // } else {
    //     console.log('Geolocation is not supported by this browser.');
    // }

    if (Session.get('weatherFetched') == 'true') {
      return (
        <Meteogram
          chartData={Session.get('meteogramData')}
        />
      )  
    }
  }

  render() {
    return (
      <div>
        <div id="map-container">
          <div id="map"></div>
        </div>
        {this.renderMeteogram()}
        {this.renderForecast()}
        
      </div>
    );
  }
}

export default WeatherMap;
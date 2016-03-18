import React from 'react';

class DrawerContent extends React.Component {
  constructor() {
    super()
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  componentDidMount() {
    const {data, temperatureOutsideMin} = this.props;
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

  }
  componentDidUpdate() {
    const {data, temperatureOutsideMin} = this.props;
    
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }

  closeDrawer() {
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

  render() {
    const {
      data,
      temperatureOutsideMin,
      temperatureOutsideMax,
      temperatureOutsideValue,
      humidityOutside,
      humidityInside,
      solarUVAverage,
      solarUVMax,
      solarRadiationValue,
      barometer,
      station,
      rainfallValue,
      soilTemperature0,
      soilTemperature1,
      soilTemperature2,
      soilTemperature3,
      soilHumidity0,
      soilHumidity1,
      soilHumidity2,
      soilHumidity3,
      windDirectionPrevailing,
      windSpeedAverage} = this.props;

      let windDirection = {windDirectionPrevailing} - 45;
      // console.log(windDirection);

      const windSpeedRotation = {
        transform: `rotate(${windDirection}deg)`
      }

    return (
      <div>
        <div className="mdl-grid">
          <div className="mdl-`cell mdl-cell--6-col">
            <div id="station-name">
              {station}
            </div>
            <div id="last-updated">
              Updated just now
            </div>
          </div>

          <div className="mdl-cell mdl-cell--6-col">
            <div id="temp-minmax">
              {temperatureOutsideMin} | {temperatureOutsideMax}
            </div>

            <div id="temp">
              {temperatureOutsideValue}
            </div>
          </div>

          <div className="mdl-cell mdl-cell--6-col first-row">
            <div className="first-row-title">
              <img className="label-icon" src="images/weather-monitoring/icons/precip.png" /><span className="icon-title"> PRECIP</span>
            </div>
            <div className="first-row-value">
              {rainfallValue}<sup>&nbsp;</sup>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--6-col first-row">
            <div className="first-row-title">
              <img className="label-icon" src="images/weather-monitoring/icons/solar.png" /> SOLAR
            </div>
            <div className="first-row-value">
              {solarRadiationValue} w/m<sup>2</sup>
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
            {soilTemperature0}
          </div>
          <div className="mdl-cell mdl-cell--4-col soil-moisture">
            {soilHumidity0}
          </div>

          <div className="mdl-cell mdl-cell--4-col soil-depth">
            2ft&darr;
          </div>
          <div className="mdl-cell mdl-cell--4-col soil-temp">
            {soilTemperature1}
          </div>
          <div className="mdl-cell mdl-cell--4-col soil-moisture">
            {soilHumidity1}
          </div>

          <div className="mdl-cell mdl-cell--4-col soil-depth">
            3ft&darr;
          </div>
          <div className="mdl-cell mdl-cell--4-col soil-temp">
            {soilTemperature2}
          </div>
          <div className="mdl-cell mdl-cell--4-col soil-moisture">
            {soilHumidity2}
          </div>

          <div className="mdl-cell mdl-cell--4-col soil-depth">
            4ft&darr;
          </div>
          <div className="mdl-cell mdl-cell--4-col soil-temp">
            {soilTemperature3}
          </div>
          <div className="mdl-cell mdl-cell--4-col soil-moisture">
            {soilHumidity3}
          </div>

          <div className="mdl-cell mdl-cell--2-offset mdl-cell--8-col">
            <hr />
          </div>

          <div id="wind-header" className="mdl-cell mdl-cell--12-col simple-weather-header">
            WIND
          </div>

          <div id="wind" className="mdl-cell mdl-cell--12-col">
            <img id="wind-direction-icon" src="images/weather-monitoring/icons/compass.png" style={windSpeedRotation}/> Ave: {windSpeedAverage} m/s
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
            {humidityOutside}
          </div>

          <div className="mdl-cell mdl-cell--6-col simple-weather-header">
            {barometer}
          </div>
        </div>

        <div id="drawer-controls">
          <button id="drawer-close-button" onClick={this.closeDrawer}>x</button>
          </div>
      </div>
    );
  }
}

export default DrawerContent;

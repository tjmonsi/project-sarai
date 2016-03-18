import React from 'react';
import L from 'leaflet';

import HighChart from './high-chart.jsx';

class MonitoringMapCharts extends React.Component {
  constructor() {
    super();
    this.displayInformation = this.displayInformation.bind(this);
    this.clearMarkers = this.clearMarkers.bind(this);
    this.addYieldMarkers = this.addYieldMarkers.bind(this);
    this.addSoilMarkers = this.addSoilMarkers.bind(this);
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
      
    }

    Session.set('selected_area', 'none');
    Session.set('selected_marker', 'none');
    Session.set('current_marker_group', 'yield');

    const {areas, labels, soilData} = this.props;

    const northEast = L.latLng(20.355148, 114.300721);
    const southWest = L.latLng(4.010501, 135.367402);   
    const bounds = L.latLngBounds(southWest, northEast);

    this.map = L.map('monitoring-map', {
      maxBounds: bounds,
      center: [13.624467, 126.456410],
      zoom: 7,
      minZoom: 7,
      zoomControl: false
    });

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 14,
      id: 'mcarandang.p67769a5',
      accessToken: 'pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg'
    }).addTo(this.map);

    //???
    //document.getElementById('monitoring-map').style.display = 'block';

    const riceMarker = L.icon({
      iconUrl: '/images/monitoring/map/rice_marker.png',
      iconSize: [40, 40],
      iconAnchor: [20, 39],
      popupAnchor: [0, -40]
    });

    const weatherMarker = L.icon({
      iconUrl: '/images/monitoring/map/weather_marker.png',
      iconSize: [40, 40],
      iconAnchor: [20, 39],
      popupAnchor: [0, -40]
    });

    const soilMarker = L.icon({
      iconUrl: '/images/monitoring/map/soil_marker.png',
      iconSize: [40, 40],
      iconAnchor: [20, 39],
      popupAnchor: [0, -40]
    });

    this.yieldGroup = new L.FeatureGroup();
    this.soilGroup = new L.FeatureGroup();
    this.weatherGroup = new L.FeatureGroup();



    //Create group for yield markers
    for (let area of areas) {
      L.marker([area.coordinates[0], area.coordinates[1]], {icon: riceMarker})
        .bindPopup(area.name)
        .on('click', () => {
          Session.set('selected_marker', 'rice_yield');
          Session.set('selected_area', area.name);
        })
        .addTo(this.yieldGroup);
    }
    this.map.addLayer(this.yieldGroup);

    //Create group for soil markers
    for (let sd of soilData) {
      L.marker([sd.coordinates[0], sd.coordinates[1]], {icon: soilMarker})
        .bindPopup(sd.location)
        .on('click', () => {
          Session.set('selected_marker', 'soil');
          Session.set('selected_area', sd.identifier);
        })
        .addTo(this.soilGroup)
    }


  }

  displayInformation() {
    const {callback, areas, labels, soilData} = this.props;
    let id = 'monitoring-drawer'


    if (Session.get('selected_marker') == 'none'
      || Session.get('selected_area') === undefined) {
      return (
        <div id={id}>
          <h4>{'Select a location from the map.'}</h4>
        </div>  
        
      );
    } else if (Session.get('selected_marker') == 'rice_yield') {

      //Passing around the db call didn't work so doing this for now ._.
      let selected_area = '';

      for (let a of areas) {
        if (a.name == Session.get('selected_area')) {
          selected_area = a;
        }
      }
      console.log(`Clicked ${Session.get('selected_area')}.`);

      let series_data = [];
      let highest_yield_week = 17;

      for (let y = 17; y <= 51; y++) {
        let entry = []
        let y_temp = selected_area.simulatedYield[0].weeklyYield[y];

        entry.push(`${labels.labels[y]}`);
        entry.push(y_temp);

        if (y_temp > selected_area.simulatedYield[0].weeklyYield[highest_yield_week]) {
          highest_yield_week = y;
        }

        series_data.push(entry);
      }
      //Redo this LATER

      const chartData = {
        chart: {
            type: 'column'
        },
        title: {
            text: `Simulated Yield for ${selected_area.name}`
        },
        subtitle: {
            //First one is the 50%
            text: `${selected_area.simulatedYield[0].exceedanceProbability}% Probability of Exceedance`
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '17px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'kg/ha'
            },
            labels: {
                style: {
                    fontSize: '17px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<b>{point.y:.0f} kg/ha</b>'
        },
        series: [{
            name: 'Simulated Yield',
            data: series_data,
            dataLabels: {
                enabled: false,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '17px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
          }]
        };

      return (
        <div id={id}>

          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--9-col">
              <HighChart id = {
                `${Session.get('selected_area')}-simulated-yield-chart`}
                chartData = {chartData}
              />
            </div>

            <div className="mdl-cell mdl-cell--3-col">
              <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--12-col">
                  <div className="quick-fact-header">BEST PLANTING DATE</div>
                  <div className="quick-fact">Week {highest_yield_week + 1}
                    <br />
                    {labels.labels[highest_yield_week]}</div>
                </div>

                <div className="mdl-cell mdl-cell--2-offset mdl-cell--8-col">
                  <hr />
                </div>

                <div className="mdl-cell mdl-cell--12-col">
                  <div className="quick-fact-header">BEST YIELD</div>
                  <div className="quick-fact">
                    {selected_area.simulatedYield[0].weeklyYield[highest_yield_week]} kg/ha
                  </div>
                </div>

                <div className="mdl-cell mdl-cell--2-offset mdl-cell--8-col">
                  <hr />
                </div>

                <div className="mdl-cell mdl-cell--12-col">
                  <div className="quick-fact-header">
                    PROBABILITY OF EXCEEDANCE
                  </div>
                  <div className="quick-fact">
                    {selected_area.simulatedYield[0].exceedanceProbability}%
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      );
    }

    else if (Session.get('selected_marker') == 'soil') {

      let selected_area = '';

      for (let s of soilData) {
        if (s.identifier == Session.get('selected_area')) {
          selected_area = s;

        }
      }

      console.log(`Clicked ${Session.get('selected_area')}.`);

      return (
        <div id={id}>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--8-col">
              <div className="soil-data-header">LOCATION</div>
              <div className="soil-data-info">
                {selected_area.location}
              </div>
            </div>

            <div className="mdl-cell mdl-cell--4-col">
              <div className="soil-data-header">ELEVATION</div>
              <div className="soil-data-info">
                {selected_area.elevation_m} m
              </div>
            </div>

            <div className="mdl-cell mdl-cell--2-offset mdl-cell--8-col">
              <hr />
            </div>

            <div className="mdl-cell mdl-cell--4-col">
              <div className="soil-data-header">TEXTURE</div>
              <div className="soil-data-info">
                {selected_area.texture}
              </div>
            </div>

            <div className="mdl-cell mdl-cell--4-col">
              <div className="soil-data-header">PERMEABILITY</div>
              <div className="soil-data-info">
                {selected_area.permeability} cm/hr
              </div>
            </div>

            <div className="mdl-cell mdl-cell--4-col">
              <div className="soil-data-header">POROSITY</div>
              <div className="soil-data-info">
                {selected_area.porosity}%
              </div>
            </div>

            

            <div className="mdl-cell mdl-cell--4-col">
              <div className="soil-data-header">BULK DENSITY</div>
              <div className="soil-data-info">
                {selected_area.bulkDensity}gm/cm<sup>3</sup>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--4-col">
              <div className="soil-data-header">FIELD CAPACITY</div>
              <div className="soil-data-info">
                {selected_area.fieldCapacity}%<sup> </sup>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--4-col">
              <div className="soil-data-header">PERMANENT WILTING POINT</div>
              <div className="soil-data-info">
                {selected_area.permanentWilting}%<sup> </sup>
              </div>
            </div>

            

            

            <div className="mdl-cell mdl-cell--4-col">
              <div className="soil-data-header">DRY WEIGHT - MOISTURE</div>
              <div className="soil-data-info">
                {selected_area.moisture.dryWeight}%
              </div>
            </div>

            <div className="mdl-cell mdl-cell--4-col">
              <div className="soil-data-header">VOLUME - MOISTURE</div>
              <div className="soil-data-info">
                {selected_area.moisture.volume}%
              </div>
            </div>

            <div className="mdl-cell mdl-cell--3-col">
              <div className="soil-data-header">DEPTH - MOISTURE</div>
              <div className="soil-data-info">
                {selected_area.moisture.depth}%
              </div>
            </div>



          </div>
        </div>
      );
    }

    else if (Session.get('selected_marker') == 'weather') {

      return (
        <div>
          <h4>Under construction</h4>
        </div>
      );
    }
  }

  clearMarkers() {
    console.log("Removing markers");
    if (Session.get('current_marker_group') == 'yield') {
      this.map.removeLayer(this.yieldGroup);
    }

    else if (Session.get('current_marker_group') == 'soil') {
      this.map.removeLayer(this.soilGroup);
    }

    else if (Session.get('current_marker_group') == 'weather') {
      this.map.removeLayer(this.weatherGroup);
    }
  }

  addYieldMarkers() {
    this.clearMarkers();
    this.map.addLayer(this.yieldGroup);
  }

  addSoilMarkers() {
    this.clearMarkers();
    this.map.addLayer(this.soilGroup);
  }

  render() {
    return (
      <div id="monitoring-map-container">
        <div id="monitoring-map"></div>

        <div id="layer-selection">
          
          <button className="mdl-button mdl-js-button mdl-button--primary" onClick={this.addYieldMarkers}>
            YIELD
          </button>

          <button className="mdl-button mdl-js-button mdl-button--primary" onClick={this.addSoilMarkers}>
            SOIL
          </button>
        </div>

        {this.displayInformation()}
      </div>        
    );
  }

}

MonitoringMapCharts.propTypes = {
  callback: React.PropTypes.func
}


MonitoringMapCharts.defaultProps = {
  callback: () => {}
}
export default MonitoringMapCharts;
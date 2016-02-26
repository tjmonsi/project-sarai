import React from 'react';
import L from 'leaflet';

import {HighChart} from '/client/modules/eskwela';

class MonitoringMapCharts extends React.Component {
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
      this.displayCharts = this.displayCharts.bind(this);
    }

    Session.set('selected_area', 'none');

    const {areas, labels} = this.props;

    const northEast = L.latLng(21.924058, 115.342984);
    const southWest = L.latLng(4.566972, 128.614468);   
    const bounds = L.latLngBounds(southWest, northEast);

    const map = L.map('monitoring-map', {
      maxBounds: bounds,
      center: [14.154604, 121.247505],
      zoom: 8,
      minZoom: 7,
      zoomControl: false
    });

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg', {
      // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 14,
      id: 'mcarandang.p67769a5',
      accessToken: 'pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg'
    }).addTo(map);

    //???
    document.getElementById('monitoring-map').style.display = 'block';

    const markerIcon = L.icon({
      iconUrl: '/images/real-time-data/map_marker.png',
      iconSize: [40, 40],
      iconAnchor: [20, 39],
      popupAnchor: [0, -40]
    });

    //Add markers
    for (let area of areas) {
      L.marker([area.coordinates[0], area.coordinates[1]], {icon: markerIcon})
        .bindPopup(area.name)
        .on('click', () => {
          Session.set('selected_area', area.name);
        })
        .addTo(map);
    }
  }

  displayCharts() {
    const {callback, areas, labels} = this.props;
    // const data = callback('NE01');
    // console.log(`Callback sends ${data}`);

    if (Session.get('selected_area') == 'none') {
      return (
        <h4>{'Select a location from the map.'}</h4>
      );
    } else if (!(Session.get('selected_area') === undefined)) {

      //Passing around the db call didn't work so doing this for now ._.
      let selected_area = '';

      for (let a of areas) {
        if (a.name == Session.get('selected_area')) {
          selected_area = a;
        }
      }
      console.log(`Clicked ${Session.get('selected_area')}.`);

      let series_data = [];
      let highest_yield_week = 0;
      let i = 0;

      for (let y of selected_area.simulatedYield[0].weeklyYield) {
        // console.log(`["${labels.labels[i]}", ${y}]`);
        
        let entry = [];

        entry.push(`${labels.labels[i]}`);
        entry.push(y);

        if (y > selected_area.simulatedYield[0].weeklyYield[highest_yield_week]) {
          highest_yield_week = i;
        }

        i++;
        series_data.push(entry);
      }
      //Redo this LATER

      console.log(`Highest Yield week is ${highest_yield_week + 1}`);

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
                    fontSize: '15px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'kg/ha'
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
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '15px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
          }]
        };

      return (
        <div>
          <HighChart
            id = {`${Session.get('selected_area')}-simulated-yield-chart`}
            chartData = {chartData}
          />
          <br/>
          <div className="mdl-grid">
            <div className="mdl-cell--4-col">
              <div className="quick-fact-title">
                <h5>Recommended Planting Date</h5>
              </div>
              
              <div className="quick-fact">
                Week {highest_yield_week + 1}: {labels.labels[highest_yield_week]}
              </div>
            </div>

            <div className="mdl-cell--4-col">
              <div className="quick-fact-title">
                <h5>Highest Simulated Yield</h5>
              </div>
              
              <div className="quick-fact">
                {selected_area.simulatedYield[0].weeklyYield[highest_yield_week]} kg/ha
              </div>
            </div>

            <div className="mdl-cell--4-col">
              <div className="quick-fact-title">
                <h5>Probability of Exceedance</h5>
              </div>
              
              <div className="quick-fact">
                {selected_area.simulatedYield[0].exceedanceProbability}%
              </div>
            </div>

            <div id="quick-fact-notes" className="mdl-cell--12-col">
              <ul>
                <li>Simulated yield based on 2016 generated weather from MarkSim.</li>
                <li>Typical rainfed rice variety was used.</li>
                <li>Assumptions: No typhoon or other natural calamities, no pest 
incidence, direct-seeded, 20cm row spacing</li>
                <li>Source: John Christopher Lorenzo, SARAI Project 1</li>
              </ul>
            </div>
          </div>
          
        </div>
      );
    }
  }
  /*
  <div id="chart-explanation" className="text-advisory">
            <h5>{`At a ${selected_area.simulatedYield[0].exceedanceProbability}% for ${selected_area.simulatedYield[0].weeklyYield[highest_yield_week]} kg/ha to be exceeded, the Recommended planting period for this area is week ${highest_yield_week + 1} ${labels.labels[highest_yield_week]}.`}</h5>
          </div>
  */

  render() {
    return (

      <div id="monitoring-banner" className="mdl-grid">  
        <div className="mdl-cell mdl-cell--1-offset-desktop mdl-cell--10-col-desktop">

          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-phone">
              <div id="monitoring-map">
                
              </div> 
            </div>

            <div className="mdl-cell mdl-cell--8-col mdl-cell--4-col-phone">
              {this.displayCharts()}
            </div>  

          </div>
        
        </div>
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
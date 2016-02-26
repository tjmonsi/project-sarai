import React from 'react';
import L from 'leaflet';

class MapBanner extends React.Component {
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const {stations} = this.props;

    //Store all this data in db
    const northEast = L.latLng(21.924058, 115.342984);
    const southWest = L.latLng(4.566972, 128.614468);   
    const bounds = L.latLngBounds(southWest, northEast);

    const map = L.map('map', {
      maxBounds: bounds,
      center: [14.154604, 121.247505],
      zoom: 7,
      minZoom: 6,
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
          console.log(`clicked on marker: ${station.label}`); 
        }).addTo(map);
    }

  }

  render() {

    const mapResponsiveStyle = {
      overflow: "hidden",
      position: "relative",
      height: "0"
    }

    const mapStyle = {
      left: "0",
      top: "0",
      height: "100%",
      width: "100%",
      position: "absolute"
    }

    return (

      <div>
        <div id="map" style={mapStyle}></div>
      </div>
        
    );
  }
}

export default MapBanner;
import React from 'react';
import googleMaps from 'google-maps';

class GoogleMap extends React.Component {
  constructor() {
    super();
    this.google = null;
    this.map = null;
  }
  componentDidMount() {
    const {lat, lng, zoom} = this.props;
    googleMaps.load((google) => {
      if (google) {
        this.google = google;
        this.map = new this.google.maps.Map(this.mapContainer, {
          zoom,
          center: {lat, lng}
        });
      } else {
        // handle error
      }
    });
  }
  render() {
    const {width, height} = this.props;
    const style = {
      width,
      height
    };
    const map = (c) => {
      this.map = c;
    };
    return (
      <div
        className='google-map'
      >
        <div
          ref={map}
          style={style}
        >
        </div>
      </div>
    );
  }
}

GoogleMap.propTypes = {
  height: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  lat: React.PropTypes.number,
  lng: React.PropTypes.number,
  width: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  zoom: React.PropTypes.number
};

GoogleMap.defaultProps = {
  height: 400,
  lat: 12.2969397,
  lng: 121.6576634,
  width: '100%',
  zoom: 6
};

export default GoogleMap;

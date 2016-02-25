import React from 'react';
import googleMaps from 'google-maps';

class SuitabilityMapComponent extends React.Component {
  constructor() {
    super()
    this.auto = this.auto.bind(this);
    this.google = null;
    this.map = null;
    this.mapContainer = null;
    this.layer = [];
  }
  auto() {
    let myWidth = 0;
    let myHeight = 0;
    if( typeof( window.innerWidth ) == 'number' ) {
      //Non-IE
      myWidth = window.innerWidth;
      myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
      //IE 6+ in 'standards compliant mode'
      myWidth = document.documentElement.clientWidth;
      myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
      //IE 4 compatible
      myWidth = document.body.clientWidth;
      myHeight = document.body.clientHeight;
    }
    console.log(this.mapContainer.style)
    this.mapContainer.style.height = (myHeight-60)+'px';
    this.mapControls.style.height = (myHeight-200)+'px';
  }
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
    const auto = this.auto;
    window.addEventListener('resize', () => {
      auto();
    });
    this.auto();

    const {lat, lng, zoom, kml, crop, suitable} = this.props;
    googleMaps.load((google) => {
      if (google) {
        this.google = google;
        this.map = new this.google.maps.Map(this.mapContainer, {
          zoom,
          center: {lat, lng}
        });

        this.map.controls[google.maps.ControlPosition.LEFT_TOP].push(this.mapControls);
        this.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(this.namer);

        for (let i = 0; i < kml.length; i++) {
          let cropObj = kml[i];
          for (let j = 0; j < cropObj.kml.length; j++) {
            let suitability = cropObj.kml[j];
            let icon = 'small_green';
            icon = suitability.color === '#00FF00' ? icon : 'small_yellow';
            icon = suitability.color === '#FFFF00' ? icon : 'measle_brown';
            let layer = new this.google.maps.FusionTablesLayer({
              query: {
                select: 'locations',
                from: suitability.id
              },
              styles: [{
                markerOptions: {
                  iconName: icon
                },
                polygonOptions: {
                  fillColor: suitability.color,
                  strokeColor: suitability.color,
                  fillOpacity: 0.3
                }
              }]
            });
            this.layer.push({
              layer,
              crop: cropObj.name,
              suitable: suitability.name,
              flag: false
            });
          }
        }

        for (let k = 0; k < this.layer.length; k++) {
          if (this.layer[k].crop === crop && this.layer[k].suitable === suitable) {
            this.layer[k].layer.setMap(this.map);
            this.layer[k].layer.flag = true;
          } else {
            this.layer[k].layer.setMap(null);
            this.layer[k].layer.flag = false;
          }
        }
      } else {
        // handle error
      }
    });
  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
    const {crop, suitable} = this.props;
    let l = 0;
    for (let k = 0; k < this.layer.length; k++) {
      if (this.layer[k].crop === crop && this.layer[k].suitable === suitable) {
        l = k;
      } else {
        this.layer[k].layer.setMap(null);
        this.layer[k].layer.flag = false;
      }
    }
    const self = this;
    setTimeout(() => {
      self.layer[l].layer.setMap(self.map);
      self.layer[l].layer.flag = false;
    }, 500);
  }
  renderLinks() {
    const {kml} = this.props;
    return kml.map((crop, key) => {
      return crop.kml.map((layer, key2) => {
        return (
          <div className='mdl-cell mdl-cell--12-col'>
            <a href={`/suitability-maps/${crop.name}/${layer.name}`}>
              {`${crop.name} ${layer.name} Suitable`}
            </a>
          </div>
        );
      });
    });
  }
  render() {
    const {width, height,crop, suitable} = this.props;
    const style = {
      width,
      height
    };
    const styleControls = {
      position: 'absolute',
      width: '30%',
      maxWidth: 200,
      minWidth: 150,
      backgroundColor: '#FFFFFF',
      padding: 15,
      marginTop: 10,
      marginLeft: 10,
      overflow: 'auto'
    };
    const styleName = {
      position: 'absolute',
      backgroundColor: '#FFFFFF',
      margin: 10
    };
    const map = (c) => {
      this.mapContainer = c;
    };
    const controls = (c) => {
      this.mapControls = c;
    };
    const name = (c) => {
      this.namer = c;
    };
    return (
      <div className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-cell mdl-cell--12-col old-suitability-map">
          <div
            className="mdl-grid"
            style = {styleControls}
            ref={controls}
          >
            <div className="mdl-cell mdl-cell--12-col">
              <div className="mdl-grid mdl-grid--no-spacing">
                <div className="mdl-cell mdl-cell--12-col">
                  {'Click to see Suitability per Crop'}
                </div>
                {this.renderLinks()}
              </div>
            </div>
          </div>

          <div
            className="mdl-grid"
            ref={name}
            style={styleName}
          >
            <div className="mdl-cell mdl-cell--12-col">
              {`${crop} ${suitable} Suitability Map`}
            </div>
          </div>
          <div
            ref={map}
            style={style}
          >
          </div>
        </div>
      </div>
    );
  }
}

SuitabilityMapComponent.propType = {
  crop: React.PropTypes.string,
  suitable: React.PropTypes.string,
  height: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  kml: React.PropTypes.arrayOf(React.PropTypes.string),
  lat: React.PropTypes.number,
  lng: React.PropTypes.number,
  width: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  zoom: React.PropTypes.number
};

SuitabilityMapComponent.defaultProps = {
  crop: 'Rice',
  suitable: 'Moderate',
  height: 400,
  lat: 12.2969397,
  lng: 121.6576634,
  kml: [
    {
      name: 'Arabica',
      kml: [
        {
          name: 'High',
          id: '13SXEWzDA7fzH9f989owLIEXxAytwKS6uGoI77iDG',
          color: '#00FF00'
        },
        {
          name: 'Moderate',
          id: '1s6k_tFDJnUOQmdCjQU4LblHrELpXJ0--hMzH20ZP',
          color: '#FFFF00'
        },
        {
          name: 'Marginal',
          id: '1rTbx52q1soMTAYkCSPL18bpkoqmvTH_xK4YsDy89',
          color: '#a52a2a'
        },
      ]
    },
    {
      name: 'Banana',
      kml: [
        {
          name: 'High',
          id: '1kxi-PFSkkEWRnjAtHMzXfrGB6oGkX94gL_ojqHhe',
          color: '#00FF00'
        },
        {
          name: 'Moderate',
          id: '17JbzDpocWW8HMFIPbGjg26V49xwT2bE5Hiqh3KVP',
          color: '#FFFF00'
        },
        {
          name: 'Marginal',
          id: '1KI2a0FcZrlq4sNIrKkuK3lb12qLenm1SPUQfUsKT',
          color: '#a52a2a'
        },
      ]
    },
    {
      name: 'Corn',
      kml: [
        {
          name: 'High',
          id: '1AOfPo2xCUNwC2H2EepVHbmB-3yB0-aoZIXMg8D2o',
          color: '#00FF00'
        },
        {
          name: 'Moderate',
          id: '1lOY7NIsrsmmJMyyMnbESWvpNkEl_KmcOapF63Fo2',
          color: '#FFFF00'
        },
        {
          name: 'Marginal',
          id: '1xfYw4qqdpOmvFKN9P-0wIND08vSsGCBYgLey2mjP',
          color: '#a52a2a'
        },
      ]
    },
    {
      name: 'Rice',
      kml: [
        {
          name: 'High',
          id: '1tfiK_YNEgsSrVGRp1kvS7m_EysVi9VxTwYHsShm9',
          color: '#00FF00'
        },
        {
          name: 'Moderate',
          id: '11rVd4zU8YVXNdaGc4KoWXo6_tB9Fzg92wypaylD4',
          color: '#FFFF00'
        },
        {
          name: 'Marginal',
          id: '1iNQwprvvhjO0VvjFglV0PB-Ym_uDdn-OwxiPNYLu',
          color: '#a52a2a'
        },
      ]
    },
    {
      name: 'Robusta',
      kml: [
        {
          name: 'High',
          id: '1Alil7tvIRz6URXAuXqXgj-d5xwmwgHmsT23fBSJT',
          color: '#00FF00'
        },
        {
          name: 'Moderate',
          id: '1WIZJxaPOfXxvWk6EHevudVm-jOKNoS6bmG56qbDK',
          color: '#FFFF00'
        },
        {
          name: 'Marginal',
          id: '1T3U4ai3adhg_lG4H-UknPWw5PSddQkB6HlKOsMPQ',
          color: '#a52a2a'
        },
      ]
    },
    {
      name: 'Cacao',
      kml: [
        {
          name: 'High',
          id: '1rz40PC9rR0xu8hfXIJth8wmYw9YMD1ywWWnZm8_v',
          color: '#00FF00'
        },
        {
          name: 'Moderate',
          id: '1SXXhBVGzgn4B5xKPYpJzcE37HRJ1-kS8HbM5uROG',
          color: '#FFFF00'
        },
        {
          name: 'Marginal',
          id: '12Tv4FO4rPCTzwFt9NzuojDFSvsnSbOq2UUVbFS6-',
          color: '#a52a2a'
        },
      ]
    },
  ],
  width: '100%',
  zoom: 6
};

export default SuitabilityMapComponent;

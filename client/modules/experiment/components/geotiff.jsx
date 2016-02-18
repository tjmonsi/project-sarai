import React from 'react';
import GeoTIFF from 'geotiff';
import epsg from 'epsg-to-proj';
import extents from 'geotiff-extents';
import proj4 from 'proj4';
import googleMaps from 'google-maps';

// function PhOverlay(bounds, image, map) {
//   this._bounds = bounds;
//   this._image = image;
//   this._map = map;
//   this._div = null;
//   console.log(this);
// }

// PhOverlay.prototype.onAdd = () => {
//   if (document) {
//     const div = document.createElement('div');
//     div.style.borderStyle = 'none';
//     div.style.borderWidth = '0px';
//     div.style.position = 'absolute';
    
//     const img = document.createElement('img');
//     img.src = this._image;
//     img.style.width = '100%';
//     img.style.height = '100%';
//     img.style.position = 'absolute';
//     div.appendChild(img);
    
//     this._div = div;
//     const panes = this.getPanes();
//     panes.overlayLayer.appendChild(div);  
//   }
// };

// PhOverlay.prototype.draw = () => {
//   const overlayProjection = this.getProjection();
//   const sw = overlayProjection.fromLatLngToDivPixel(this._bounds.getSouthWest());
//   const ne = overlayProjection.fromLatLngToDivPixel(this._bounds.getNorthEast());
  
//   const div = this._div;
//   div.style.left = sw.x + 'px';
//   div.style.top = ne.y + 'px';
//   div.style.width = (ne.x - sw.x) + 'px';
//   div.style.height = (sw.y - ne.y) + 'px';
// };

// PhOverlay.prototype.onRemove = () => {
//   this._div.parentNode.removeChild(this._div);
//   this._div = null;
// };

export default class GeotiffExperiment extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.google = null;
    this.map = null;
    this.PhOverlay = null;
  }
  componentDidMount() {
    googleMaps.load((google) => {
      this.google = google;
      this.map = new this.google.maps.Map(this.mapContainer, {
        zoom: 6,
        center: {lat: 12.2969397, lng: 121.6576634}
      });
      class PhOverlay extends this.google.maps.OverlayView {
        constructor(bounds, image) {
          super();
          this._bounds = bounds;
          this._image = image;
          this._map = null;          
          this._div = null;
        }
        onAdd() {
          const div = document.createElement('div');
          div.style.borderStyle = 'none';
          div.style.borderWidth = '0px';
          div.style.position = 'absolute';
          const img = document.createElement('img');
          img.src = this._image;
          img.style.width = '100%';
          img.style.height = '100%';
          img.style.position = 'absolute';
          div.appendChild(img);
          this._div = div;
          const panes = this.getPanes();
          panes.overlayLayer.appendChild(div);  
        }
        draw() {
          const overlayProjection = this.getProjection();
          const sw = overlayProjection.fromLatLngToDivPixel(this._bounds.getSouthWest());
          const ne = overlayProjection.fromLatLngToDivPixel(this._bounds.getNorthEast());
          const div = this._div;
          div.style.left = sw.x + 'px';
          div.style.top = ne.y + 'px';
          div.style.width = (ne.x - sw.x) + 'px';
          div.style.height = (sw.y - ne.y) + 'px';
        }
        onRemove() {
          this._div.parentNode.removeChild(this._div);
          this._div = null;
        }
      };
      
      this.PhOverlay = PhOverlay;
      
      console.log(PhOverlay);
      console.log(new PhOverlay())
    });
  }
  handleSubmit() {
    const xhr = new XMLHttpRequest();
    const url = '/images/Rainfall.tif';
    const img = '/images/Rainfall.png';
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = (e) => {
      const tiff = GeoTIFF.parse(xhr.response);
      const im = tiff.getImage();
      const fd = im.getFileDirectory();
      const gk = im.getGeoKeys();
      const points = extents({
        tiePoint: fd.ModelTiepoint,
        pixelScale: fd.ModelPixelScale,
        width: fd.ImageWidth,
        height: fd.ImageLength,
        proj: proj4,
        from: epsg[gk.ProjectedCSTypeGeoKey || gk.GeographicTypeGeoKey],
        to: epsg[4326]
      });
      
      if (this.google) {
        // const bounds = new this.google.maps.LatLngBounds(
        //   new this.google.maps.LatLng(points.lowerLeft[0], points.lowerLeft[1]),
        //   new this.google.maps.LatLng(points.upperRight[0], points.upperRight[1])
        // );
        console.log(points);  
        const imageBounds = {
          north: points.upperRight[1],
          south: points.lowerLeft[1],
          east: points.upperRight[0],
          west: points.lowerLeft[0]
        };
        
        if (this.map) {
          console.log(this.map);
          const overlay = new this.google.maps.GroundOverlay(
            img,
            imageBounds
          );
          console.log(overlay);
          overlay.setMap(this.map);
          // console.log(this.PhOverlay.prototype);
          // const overlay = new this.PhOverlay(bounds, img);
          // overlay.setMap(this.map);  
        }
        
      }
      
    };
    xhr.send();
  }
  render() {
    const map = (c) => {
      this.mapContainer = c;
    };
    const style = {
      height: 600,
      width: '100%'
    };
    return (
      <div>
        <button onClick={this.handleSubmit} >
          {'Submit file'}
        </button>
        <div 
          ref={map}
          style={style}
        >
        </div>
      </div>  
    );
  }  
}

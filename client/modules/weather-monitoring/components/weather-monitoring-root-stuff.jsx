import React from 'react';

class WeatherMonitoringRootStuff extends React.Component {

	renderSections() {
	    return this.props.items.map((item, key) => {
	      return (
	        <div
	          className="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone section"
	          key={key}
	        >
	        
	        	<img src="{item.img}" />

	        </div>
	      );
	    });
  	}

  render() {
    return (
      <div className="mdl-grid">
      	 <div className="mdl-cell mdl-cell--1-offset-desktop mdl-cell--10-col-desktop mdl-cell--1-offset-tablet mdl-cell--6-col-tablet mdl-cell--4-col-phone">
      	 	
      		<h3>{'Stay in the Know'}</h3>
      	 	<div className="mdl-grid">
      	 		{this.renderSections()}

      	 	</div>
      	 </div>
      </div>
    );	
  }
}

export default WeatherMonitoringRootStuff;

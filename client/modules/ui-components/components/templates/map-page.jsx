import React from 'react';
import classNames from 'classnames';

class MapPage extends React.Component {

	render() {
		const {appBar, appDrawer, map, classList} = this.props;
		const className = classNames('map-page', classList);

		return (
			<div className={className}>
				<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
					{appBar}
					{appDrawer}
				</div>
				<main className="mdl-layout__content">
					{map}
				</main>
			</div>
		);
	}
}

MapPage.defaultProps = {
  appBar: null,
  appDrawer: null,
  classList: []
};

export default MapPage;
import React from 'react';
// import classNames from 'classnames';
// import highcharts from 'highcharts';

class EskwelaList extends React.Component {
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }

  renderListItem() {
    return this.props.listItems.map((listItem, key) => {
      return (
        <li key={key}>
          {listItem}
        </li>
      );
    });
  }

  render() {
    return (
      <div
        className="mdl-cell mdl-cell--2-offset-desktop mdl-cell--8-col-desktop
        mdl-cell--1-offset-tablet mdl-cell--6-col-tablet mdl-cell--4-col-phone"
      >
        <ul>
          <strong>
            {this.renderListItem()}
          </strong>
        </ul>
      </div>
    );
  }
}

EskwelaList.propTypes = {
  listItems: React.PropTypes.arrayOf(React.PropTypes.element)
};

EskwelaList.defaultPropTypes = {
  listItems: []
};

export default EskwelaList;

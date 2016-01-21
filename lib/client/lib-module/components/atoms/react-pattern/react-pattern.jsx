import React from 'react';
import '/node_modules/material-design-lite/material';

class ReactPattern extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    return (
      <div className="react-pattern">
        {'this is a react placeholder pattern'}
      </div>
    );
  }
}

export default ReactPattern;

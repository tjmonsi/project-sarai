import React from 'react';

class Landing extends React.Component {
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
  render() {
    const {classList, appBar, appDrawer, banner, content, footer} = this.props;
    const className = classNames('mdl-core-design-landing', classList);
    return (
      <div className={className}>

      </div>
    );
  }
}
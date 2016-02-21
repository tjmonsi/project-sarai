import React from 'react';
import classNames from 'classnames';

class MdlLanding extends React.Component {
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
    // const {classList, appBar, appDrawer, banner, content, footer} = this.props;
    const {classList} = this.props;
    const className = classNames('mdl-core-design-landing', classList);
    return (
      <div className={className}>

      </div>
    );
  }
}

MdlLanding.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string)
};

MdlLanding.defaultProps = {
  classList: []
};

export default MdlLanding;

import React from 'react';

class MdlTooltip extends React.Component {
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
    const {id, label} = this.props;
    return (
      <div
        className="mdl-tooltip"
        htmlFor={id}
      >
        {label}
      </div>
    );
  }
}

MdlTooltip.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.string])
};

MdlTooltip.defaultProps = {
  id: 'mdl-tooltip-id',
  label: 'Label'
};

export default MdlTooltip;

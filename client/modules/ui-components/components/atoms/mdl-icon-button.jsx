import React from 'react';
import classNames from 'classnames';

class MdlIconButton extends React.Component {
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
    const {callback, icon, classList} = this.props;
    const className = classNames('mdl-button', 'mdl-js-button',
      'mdl-button--icon', 'icon-button', classList);
    return (
      <button
        className={className}
        onClick={callback}
      >
        <i className="material-icons">
          {icon}
        </i>
      </button>
    );
  }
}

MdlIconButton.propTypes = {
  callback: React.PropTypes.func,
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  icon: React.PropTypes.string
};

MdlIconButton.defaultProps = {
  callback: () => null,
  classList: [],
  icon: 'format_bold'
};

export default MdlIconButton;

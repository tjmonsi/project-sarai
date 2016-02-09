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
    const {handleCallback, icon, classList} = this.props;
    const className = classNames('mdl-button', 'mdl-js-button',
      'mdl-button--icon', 'icon-button', classList);
    return (
      <button
        className={className}
        onClick={handleCallback}
      >
        <i className="material-icons">
          {icon}
        </i>
      </button>
    );
  }
}

MdlIconButton.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  handleCallback: React.PropTypes.func,
  icon: React.PropTypes.string
};

MdlIconButton.defaultProps = {
  classList: [],
  handleCallback: () => null,
  icon: 'format_bold'
};

export default MdlIconButton;

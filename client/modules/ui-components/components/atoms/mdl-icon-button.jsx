import React from 'react';
import MdlTooltip from './../atoms/mdl-tooltip.jsx';
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
    const {handleCallback, icon, id, label, classList} = this.props;
    const className = classNames('mdl-button', 'mdl-js-button',
      'mdl-button--icon', 'icon-button', classList);
    return (
      <span>
        <button
          className={className}
          id={id}
          onClick={handleCallback}
        >
          <i className="material-icons">
            {icon}
          </i>
        </button>
        <MdlTooltip
          id={id}
          label={label}
        />
      </span>
    );
  }
}

MdlIconButton.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  handleCallback: React.PropTypes.func,
  icon: React.PropTypes.string,
  id: React.PropTypes.string,
  label: React.PropTypes.string
};

MdlIconButton.defaultProps = {
  classList: [],
  handleCallback: () => null,
  icon: 'format_bold',
  id: 'format-bold-button',
  label: 'Bold'
};

export default MdlIconButton;

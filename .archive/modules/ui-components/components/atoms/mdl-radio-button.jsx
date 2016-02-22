import React from 'react';
import classNames from 'classnames';

class MdlRadioButton extends React.Component {
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
  isChecked() {
    return this.radio.checked;
  }
  render() {
    const {name, id, label, value, classList} = this.props;
    const className = classNames('mdl-radio', 'mdl-js-radio',
      'mdl-js-ripple-effect', classList);
    const radio = (c) => {
      this.radio = c;
    };
    return (
      <label
        className={className}
        htmlFor={id}
      >
        <input
          className="mdl-radio__button"
          id={id}
          name={name}
          ref={radio}
          type="radio"
          value={value}
        />
        <span
          className="mdl-radio__label"
        >
          {label}
        </span>
      </label>
    );
  }
}

MdlRadioButton.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};

export default MdlRadioButton;

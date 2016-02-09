import React from 'react';
import classNames from 'classnames';

class MdlInputText extends React.Component {
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
  getValue() {
    return this.textfield.value;
  }
  render() {
    const {id, label, value, pattern, classList} = this.props;
    const className = classNames('mdl-textfield', 'mdl-js-textfield',
      'mdl-textfield--floating-label', classList);
    const textfield = (c) => {
      this.textfield = c;
    };
    return (
      <div className={className}>
        <input
          className="mdl-textfield__input"
          id={id}
          pattern={pattern}
          ref = {textfield}
          type="text"
          value={value}
        />
        <label
          className="mdl-textfield__label"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    );
  }
}

MdlInputText.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  pattern: React.PropTypes.string,
  value: React.PropTypes.string
};

MdlInputText.defaultProps = {
  classList: [],
  id: 'textfield',
  label: 'Input Text here'
};

export default MdlInputText;

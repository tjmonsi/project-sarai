import React from 'react';
import classNames from 'classnames';

class MdlSnackbar extends React.Component {
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
  notify(message, timeout, actionText, actionHandler) {
    if (this.snackbar && this.snackbar.MaterialSnackbar &&
      this.snackbar.MaterialSnackbar.showSnackbar) {
      this.snackbar.MaterialSnackbar.showSnackbar({
        message,
        timeout,
        actionText,
        actionHandler
      });
    }
  }
  render() {
    const {classList, id} = this.props;
    const className = classNames('mdl-js-snackbar', 'mdl-snackbar', classList);
    const snackbar = (c) => {
      this.snackbar = c;
    };
    return (
      <div
        className={className}
        id={`${id}-snackbar`}
        ref = {snackbar}
      >
        <div className="mdl-snackbar__text">
        </div>
        <button
          className="mdl-snackbar__action"
          type="button"
        >
        </button>
      </div>
    );
  }
}

MdlSnackbar.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  id: React.PropTypes.string
};

MdlSnackbar.defaultProps = {
  classList: [],
  id: 'mdl-snackbar'
};

export default MdlSnackbar;

import React from 'react';
import classNames from 'classnames';
import dialogPolyfill from 'dialog-polyfill';

class MdlDialog extends React.Component {
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
  openDialog() {
    if (this.dialog.showModal) {
      this.dialog.showModal();
    }
  }
  closeDialog() {
    if (this.dialog.close) {
      this.dialog.close();
    }
  }
  renderActions() {
    const {actions} = this.props;
    return actions.map((action, key) => {
      const className = classNames('mdl-button', action.classList);
      return (
        <button
          className={className}
          key={key}
          onClick={action.handleCallback}
          type="button"
        >
          {action.label}
        </button>
      );
    });
  }
  render() {
    const {content, title, classList} = this.props;
    const className = classNames('dialog-box-v2', 'mdl-dialog', classList);
    const dialog = (c) => {
      this.dialog = c;
      if (dialogPolyfill && this.dialog && !this.dialog.showModal) {
        dialogPolyfill.registerDialog(this.dialog);
      }
    };
    return (
      <dialog
        className={className}
        ref={dialog}
      >
        <div className="mdl-dialog__title dialog-box-title">
          {title}
        </div>
        <div className="mdl-dialog__content dialog-box-content">
          {content()}
        </div>
        <div className="mdl-dialog__actions dialog-box-actions">
          {this.renderActions()}
        </div>
      </dialog>
    );
  }
}

MdlDialog.propTypes = {
  actions: React.PropTypes.arrayOf(React.PropTypes.shape({
    handleCallback: React.PropTypes.func,
    classList: React.PropTypes.arrayOf(React.PropTypes.string),
    label: React.PropTypes.string,
  })),
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  content: React.PropTypes.func,
  title: React.PropTypes.string
};

MdlDialog.defaultProps = {
  actions: [],
  classList: [],
  content: (<div></div>)
};

export default MdlDialog;

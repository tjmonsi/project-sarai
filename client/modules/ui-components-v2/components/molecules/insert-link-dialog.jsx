import React from 'react';
import MdlDialog from './../molecules/mdl-dialog.jsx';
import MdlInputText from './../atoms/mdl-input-text.jsx';

class InsertLinkDialog extends React.Component {
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
    this.dialog.openDialog();
  }
  closeDialog() {
    this.dialog.closeDialog();
  }
  actionButtons() {
    const {handleCallback} = this.props;
    return [
      {
        handleCallback: () => {
          this.dialog.closeDialog();
          if (this.link && this.link.getValue) handleCallback(this.link.getValue());
        },
        label: 'Save'
      },
      {
        handleCallback: () => {
          this.dialog.closeDialog();
          this.link.setValue('');
        },
        label: 'Cancel'
      }  
    ];
  }
  renderDialog() {
    const link = (c) => {
      this.link = c;
    };
    const {id} = this.props;
    return (
      <div className="">
        <MdlInputText
          id={`mdl-input-text-${id}-insert-link`}
          label="Type Link here"
          ref={link}
        />
      </div>
    );
  }
  render() {
    const dialog = (c) => {
      this.dialog = c;
    };
    return (
      <MdlDialog
        actions = {this.actionButtons()}
        content = {this.renderDialog()}
        title = "Insert Link"
        ref = {dialog}
      />
    );
  }
}

InsertLinkDialog.propTypes = {
  handleCallback: React.PropTypes.func,
  id: React.PropTypes.string
};

InsertLinkDialog.defaultProps = {
  handleCallback: () => null,
  id: 'insert-link-dialog'
};

export default InsertLinkDialog;

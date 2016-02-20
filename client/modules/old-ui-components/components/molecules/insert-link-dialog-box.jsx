import React from 'react';
import DialogBox from './../molecules/dialog-box.jsx';
import {insertLink} from './../../libs/textarea.js';
import MdlInputText from './../atoms/mdl-input-text.jsx';

class InsertLinkDialogBox extends React.Component {
  open() {
    this.dialogBox.openDialog();
  }
  actions() {
    return [
      {
        handleCallback: () => {
          const {textarea, callback} = this.props;
          this.dialogBox.closeDialog();
          console.log(textarea);
          if (textarea) {
            textarea.focus();
            const link = this.insertLinkValue.getValue();
            insertLink(textarea, link);
          }
          callback();
        },
        label: 'Insert'
      },
      {
        handleCallback: () => {
          this.dialogBox.closeDialog();
        },
        label: 'Cancel'
      }
    ];
  }
  content() {
    const link = (c) => {
      this.insertLinkValue = c;
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
    const dialogBox = (c) => {
      this.dialogBox = c;
    };
    return (
      <DialogBox
        actions={this.actions()}
        content={this.content()}
        ref={dialogBox}
        title="Insert Link"
      />
    );
  }
}

InsertLinkDialogBox.propTypes = {
  callback: React.PropTypes.func,
  id: React.PropTypes.string,
  textarea: React.PropTypes.element
};

InsertLinkDialogBox.defaultProps = {
  callback: () => null,
  id: 'insert-link-dialog-box'
};

export default InsertLinkDialogBox;

import React from 'react';
import classNames from 'classnames';
import MdlIconButton from './../atoms/mdl-icon-button.jsx';
import MdlInputText from './../atoms/mdl-input-text.jsx';
import DialogBox from './../molecules/dialog-box.jsx';
import MdlRadioButton from './../atoms/mdl-radio-button.jsx';
// import InsertLinkDialogBox from './../molecules/insert-link-dialog-box.jsx';
import {bold, italics, insertLink,
  preformated, numberItem, blockquote,
  bulletItem} from './../../libs/textarea.js';

class MarkdownTextarea extends React.Component {
  constructor() {
    super();
    this.openDialogLink = this.openDialogLink.bind(this);
    this.openDialogUploadLink = this.openDialogUploadLink.bind(this);
  }
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
  defaultClassNames() {
    return classNames('mdl-textfield', 'mdl-js-textfield', 'textarea-container');
  }
  getValue() {
    return this.textarea.value;
  }
  textareaValueCheck() {
    if (this.textareaContainer && this.textarea) {
      this.textareaContainer.className = this.textarea.value.trim() === '' ?
        this.defaultClassNames :
        classNames(this.textareaContainer.className.split(' '), 'is-dirty');
    }
  }
  openDialogLink() {
    this.dialogBox.openDialog();
  }
  openDialogUploadLink() {
    this.dialogBoxUpload.openDialog();
  }
  insertLinkActions() {
    return [
      {
        handleCallback: () => {
          this.dialogBox.closeDialog();
          this.textarea.focus();
          const link = this.insertLinkValue.getValue();
          insertLink(this.textarea, link);
          this.textareaValueCheck();
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
  uploadActions() {
    return [
      {
        handleCallback: () => {
          this.dialogBoxUpload.closeDialog();
        },
        label: 'Insert File'
      },
      {
        handleCallback: () => {
          this.dialogBoxUpload.closeDialog();
        },
        label: 'Cancel'
      }
    ];
  }
  renderUpload() {
    const upload = (c) => {
      this.uploadFile = c;
    };
    const link = (c) => {
      this.fileFromNet = c;
    };
    const radioFromHardDisc = (c) => {
      this.radioFromHardDisc = c;
    };
    const radioFromNet = (c) => {
      this.radioFromNet = c;
    };
    const radioFromMedia = (c) => {
      this.radioFromMedia = c;
    };
    const {id} = this.props;
    return (
      <div className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-cell mdl-cell--12-col media-lib-picker">
          <MdlRadioButton
            id={`${id}-upload-file-radio-button`}
            label="Upload File from Hard drive"
            name={`${id}-file-dialog-box`}
            ref={radioFromHardDisc}
            value="upload"
          />
        </div>
        <div className="mdl-cell mdl-cell--12-col media-lib-option">
          <input
            className="file-upload-button"
            ref={upload}
            type="file"
          />
        </div>
        <div className="mdl-cell mdl-cell--12-col media-lib-picker">
          <MdlRadioButton
            id={`${id}-from-net-radio-button`}
            label="From the Internet"
            name={`${id}-file-dialog-box`}
            ref={radioFromNet}
            value="from-net"
          />
        </div>
        <div className="mdl-cell mdl-cell--12-col media-lib-option">
          <MdlInputText
            id={`mdl-input-text-${id}-photo-from-net`}
            label="Type Image Link here"
            ref={link}
          />
        </div>
        <div className="mdl-cell mdl-cell--12-col media-lib-picker">
          <MdlRadioButton
            id={`${id}-from-media-radio-button`}
            label="From the Media Lib"
            name={`${id}-file-dialog-box`}
            ref={radioFromMedia}
            value="from-media"
          />
        </div>
      </div>
    );
  }
  renderInsertLink() {
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
    const {id, label, value} = this.props;
    const textAreaClassName = this.defaultClassNames();
    const textareaRef = (c) => {
      this.textarea = c;
    };
    const textareaContainer = (c) => {
      this.textareaContainer = c;
    };
    const dialogBox = (c) => {
      this.dialogBox = c;
    };
    const dialogBoxUpload = (c) => {
      this.dialogBoxUpload = c;
    };
    const boldAction = () => {
      bold(this.textarea);
      this.textareaValueCheck();
    };
    const italicsAction = () => {
      italics(this.textarea);
      this.textareaValueCheck();
    };
    const blockquoteAction = () => {
      blockquote(this.textarea);
      this.textareaValueCheck();
    };
    const preformatedAction = () => {
      preformated(this.textarea);
      this.textareaValueCheck();
    };
    const bulletItemAction = () => {
      bulletItem(this.textarea);
      this.textareaValueCheck();
    };
    const numberItemAction = () => {
      numberItem(this.textarea);
      this.textareaValueCheck();
    };
    const uploadItemAction = () => {

    };
    return (
      <div className="markdown-textarea">
        <div className="mdl-grid mdl-grid--no-spacing">
          <div className="mdl-cell mdl-cell--12-col">
            <MdlIconButton
              handleCallback={boldAction}
              icon="format_bold"
              id={`markdown-textarea-${id}-format-bold`}
              label='Bold'
            />
            <MdlIconButton
              handleCallback={italicsAction}
              icon="format_italic"
              id={`markdown-textarea-${id}-format-italic`}
              label='Italics'
            />
            <MdlIconButton
              handleCallback={this.openDialogLink}
              icon="insert_link"
              id={`markdown-textarea-${id}-insert-link`}
              label='Insert Link'
            />
            <MdlIconButton
              handleCallback={blockquoteAction}
              icon="format_quote"
              id={`markdown-textarea-${id}-format-block-quote`}
              label='Quotation'
            />
            <MdlIconButton
              handleCallback={preformatedAction}
              icon="code"
              id={`markdown-textarea-${id}-pre-formatted-text`}
              label='Pre-formated Text'
            />
            <MdlIconButton
              handleCallback={this.openDialogUploadLink}
              icon="insert_photo"
              id={`markdown-textarea-${id}-insert-photo`}
              label='Insert Photo'
            />
            <MdlIconButton
              handleCallback={bulletItemAction}
              icon="format_list_bulleted"
              id={`markdown-textarea-${id}-bullet-list`}
              label='Create a Bullet List'
            />
            <MdlIconButton
              handleCallback={numberItemAction}
              icon="format_list_numbered"
              id={`markdown-textarea-${id}-number-list`}
              label='Create a Numbered list'
            />
            <MdlIconButton
              icon="text_fields"
              id={`markdown-textarea-${id}-header`}
              label='Create a Header'
            />
            <MdlIconButton
              icon="assignment"
              id={`markdown-textarea-${id}-markdown-cheatsheet`}
              label='Markdown Cheatsheet'
            />
          </div>
          <div className="mdl-cell mdl-cell--12-col">
            <div
              className={textAreaClassName}
              ref = {textareaContainer}
            >
              <textarea
                className="mdl-textfield__input textarea-input"
                id={id}
                ref={textareaRef}
                rows="10"
                type="text"
              >
                {value}
              </textarea>
              <label
                className="mdl-textfield__label"
                htmlFor={id}
              >
                {label}
              </label>
            </div>
          </div>
        </div>
        <DialogBox
          actions={this.insertLinkActions()}
          content={this.renderInsertLink()}
          ref={dialogBox}
          title="Insert Link"
        />
        <DialogBox
          actions={this.uploadActions()}
          classList={['media-lib']}
          content={this.renderUpload()}
          ref={dialogBoxUpload}
          title="Upload Picture"
        />
      </div>
    );
  }
}

MarkdownTextarea.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  value: React.PropTypes.string
};

MarkdownTextarea.defaultProps = {
  id: 'textarea',
  label: 'Text here'
};

export default MarkdownTextarea;

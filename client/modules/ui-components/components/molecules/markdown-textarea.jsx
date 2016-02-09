import React from 'react';
import MdlIconButton from './../atoms/mdl-icon-button.jsx';
import DialogBox from './../molecules/dialog-box.jsx';
import {bold, italics, insertLink,
  preformated, numberItem, blockquote,
  bulletItem} from './../../libs/textarea.js';

class MarkdownTextarea extends React.Component {
  constructor() {
    super();
    this.openDialogLink = this.openDialogLink.bind(this);
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
  getValue() {
    return this.textarea.value;
  }
  openDialogLink() {
    this.dialogBox.openDialog();
  }
  insertLinkActions() {
    return [
      {
        handleCallback: () => {
          this.dialogBox.closeDialog();
        },
        label: 'Close'
      }
    ];
  }
  renderInsertLink() {
    return (
      <div className="">
        {'This is a test'}
      </div>
    );
  }
  render() {
    const {id, label} = this.props;
    const textareaRef = (c) => {
      this.textarea = c;
    };
    const dialogBox = (c) => {
      this.dialogBox = c;
    };
    return (
      <div className="markdown-textarea">
        <div className="mdl-grid mdl-grid--no-spacing">
          <div className="mdl-cell mdl-cell--12-col">
            <MdlIconButton
              handleCallback={bold}
              icon="format_bold"
            />
            <MdlIconButton
              handleCallback={italics}
              icon="format_italic"
            />
            <MdlIconButton
              handleCallback={insertLink}
              icon="insert_link"
            />
            <MdlIconButton
              handleCallback={blockquote}
              icon="format_quote"
            />
            <MdlIconButton
              handleCallback={preformated}
              icon="code"
            />
            <MdlIconButton
              icon="insert_photo"
            />
            <MdlIconButton
              handleCallback={bulletItem}
              icon="format_list_bulleted"
            />
            <MdlIconButton
              handleCallback={numberItem}
              icon="format_list_numbered"
            />
            <MdlIconButton
              icon="text_fields"
            />
            <MdlIconButton
              icon="assignment"
            />
          </div>
          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-textfield mdl-js-textfield textarea-container">
              <textarea
                className="mdl-textfield__input textarea-input"
                id={id}
                ref={textareaRef}
                rows="10"
                type="text"
              >
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
          title="Insert Link"
          ref={dialogBox}
        />
      </div>
    );
  }
}

MarkdownTextarea.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string
};

MarkdownTextarea.defaultProps = {
  id: 'textarea',
  label: 'Text here'
};

export default MarkdownTextarea;

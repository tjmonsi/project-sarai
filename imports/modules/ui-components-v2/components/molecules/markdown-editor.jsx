import React from 'react';
import classNames from 'classnames';
import MdlIconButton from './../atoms/mdl-icon-button.jsx';
import InsertLinkDialog from './../molecules/insert-link-dialog.jsx';
import * as textareaLib from './../../lib/textarea.js';

class MarkdownTextarea extends React.Component {
  constructor() {
    super();
    this.insertLinkCallback = this.insertLinkCallback.bind(this);
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
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
    return classNames('mdl-textfield', 'mdl-js-textfield',
      'markdown-editor-container');
  }
  getValue() {
    return this.editor.value;
  }
  setValue(value) {
    this.editor.value = value;
  }
  textareaValueCheck() {
    if (this.editorContainer && this.editor) {
      this.editorContainer.className = this.editor.value.trim() === '' ?
        this.defaultClassNames() :
        classNames(this.editorContainer.className.split(' '), 'is-dirty');
    }
  }
  insertLinkCallback(link) {
    textareaLib.insertLink(this.editor, link);
    this.textareaValueCheck();
  }
  optionActions(button) {
    const options = {
      bold: {
        icon: 'format_bold',
        label: 'Bold'
      },
      italics: {
        icon: 'format_italic',
        label: 'Italics'
      },
      blockquote: {
        icon: 'format_quote',
        label: 'Quotation'
      },
      preformated: {
        icon: 'code',
        label: 'Pre-formated Text'
      },
      bulletItem: {
        icon: 'format_list_bulleted',
        label: 'Create a Bullet List'
      },
      numberItem: {
        icon: 'format_list_numbered',
        label: 'Create a Numbered list'
      },
      headerText: {
        icon: 'text_fields',
        label: 'Create a Header'
      },
      insertLink: {
        handleCallback: () => {this.insertLinkDialog.openDialog();},
        icon: 'insert_link',
        label: 'Insert Link'
      }
    };
    if (options[button].handleCallback) return options[button];
    return Object.assign({}, options[button], {
      handleCallback: () => {textareaLib[button](this.editor);}
    });
  }
  renderButtons(buttons) {
    const {id} = this.props;
    return buttons.map((button, key) => {
      const option = this.optionActions(button);
      const handleCallback = () => {
        option.handleCallback();
        this.textareaValueCheck();
      };
      return (
        <MdlIconButton
          handleCallback={handleCallback}
          icon={option.icon}
          id={`markdown-textarea-${id}-${option.icon}`}
          key={key}
          label={option.label}
        />
      );
    });
  }
  render() {
    const {id, label, value, options, rows} = this.props;
    const editorContainerClassName = this.defaultClassNames();
    const editorRef = (c) => {
      this.editor = c;
    };
    const editorContainer = (c) => {
      this.editorContainer = c;
    };
    const insertLinkRef = (c) => {
      this.insertLinkDialog = c;
    };
    return (
      <div className="markdown-textarea">
        <div className="mdl-grid mdl-grid--no-spacing">
          <div className="mdl-cell mdl-cell--12-col">
            {this.renderButtons(options)}
          </div>
          <div className="mdl-cell mdl-cell--12-col">
            <div
              className={editorContainerClassName}
              ref = {editorContainer}
            >
              <textarea
                className="mdl-textfield__input editor-input"
                defaultValue = {value}
                id={id}
                ref={editorRef}
                rows={rows}
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
        <InsertLinkDialog
          handleCallback = {this.insertLinkCallback}
          id = {id}
          ref = {insertLinkRef}
        />
      </div>
    );
  }
}

MarkdownTextarea.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  options: React.PropTypes.arrayOf(React.PropTypes.string),
  rows: React.PropTypes.number,
  value: React.PropTypes.string
};

MarkdownTextarea.defaultProps = {
  id: 'markdown-editor',
  label: 'Text here',
  options: ['bold', 'italics', 'insertLink', 'blockquote', 'preformated', 'bulletItem', 'numberItem', 'headerText'],
  rows: 2,
  value: ''
};

export default MarkdownTextarea;

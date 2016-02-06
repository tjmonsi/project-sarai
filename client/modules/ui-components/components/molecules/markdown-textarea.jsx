import React from 'react';
import MdlIconButton from './../atoms/mdl-icon-button.jsx';
import {bold, italics, insertLink,
  preformated, numberItem, blockquote,
  bulletItem} from './../../libs/textarea.js';

class MarkdownTextarea extends React.Component {
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
  render() {
    const {id, label} = this.props;
    const textareaRef = (c) => {
      this.textarea = c;
    };
    return (
      <div className="markdown-textarea">
        <div className="mdl-grid mdl-grid--no-spacing">
          <div className="mdl-cell mdl-cell--12-col">
            <MdlIconButton
              callback={bold}
              icon="format_bold"
            />
            <MdlIconButton
              callback={italics}
              icon="format_italic"
            />
            <MdlIconButton
              callback={insertLink}
              icon="insert_link"
            />
            <MdlIconButton
              callback={blockquote}
              icon="format_quote"
            />
            <MdlIconButton
              callback={preformated}
              icon="code"
            />
            <MdlIconButton
              icon="insert_photo"
            />
            <MdlIconButton
              callback={bulletItem}
              icon="format_list_bulleted"
            />
            <MdlIconButton
              callback={numberItem}
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

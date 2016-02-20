import React from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import MdlInputText from './../atoms/mdl-input-text.jsx';
import MdlInputTextFile from './../atoms/mdl-input-text-file.jsx';
import MarkdownTextarea from './../molecules/markdown-textarea.jsx';

class BannerTitleEditor extends React.Component {
  constructor() {
    super();
    this.handleSave = this.handleSave.bind(this);
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
  handleSave() {
    const {callback} = this.props;
    console.log(this.title.getValue(), this.background.getValue(), this.textarea.getValue());
    callback(this.title.getValue(), this.background.getValue(), this.textarea.getValue());
  }
  render() {
    const {background, title, text, classList} = this.props;
    const className = classNames(classList);
    const titleInput = (c) => {
      this.title = c;
    };
    const backgroundInpit = (c) => {
      this.background = c;
    };
    const textareaInput = (c) => {
      this.textarea = c;
    } 
    return (
      <div className={className}>
        <MdlInputTextFile
          id='banner-background'
          label='Banner Background'
          ref = {backgroundInpit}
          value={background}
        />
        <br/>
        <MdlInputText
          id='banner-title'
          label='Banner Title'
          ref = {titleInput}
          value={title}
        />
        <br/>
        <div className='text'>
          <MarkdownTextarea 
            id = "banner-text"
            label = "Banner Text"
            ref = {textareaInput}
            value = {text}
          />
        </div> <br/>
        
        <button 
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
          onClick={this.handleSave}
        >
          Save
        </button>
      </div>
    );
  }
}

BannerTitleEditor.propTypes = {
  background: React.PropTypes.string,
  callback: React.PropTypes.func,
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  id: React.PropTypes.string,
  text: React.PropTypes.string,
  title: React.PropTypes.string
};

BannerTitleEditor.defaultProps = {
  callback: () => {},
  classList: [],
  background: '',
  id: 'banner-title-editor',
  text: 'Some texts',
  title: 'Title'
};

export default BannerTitleEditor;

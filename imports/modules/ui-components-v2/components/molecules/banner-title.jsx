import React from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import BannerTitleEditor from './../molecules/banner-title-editor.jsx';
import {mediaLibPropTypes} from './../molecules/media-lib.jsx';

class BannerTitle extends React.Component {
  constructor() {
    super();
    this.handleOpenEditor = this.handleOpenEditor.bind(this);
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
  handleOpenEditor() {
    this.dialog.openDialog();
  }
  renderEdit() {
    const {edit, title, text, background, mediaLib, saveBanner, path, id} = this.props;
    const dialog = (c) => {
      this.dialog = c;
    };
    if (edit) {
      return (
        <div className="edit">
          <button
            className="edit-button mdl-button mdl-js-button
              mdl-button--raised mdl-button--colored mdl-js-ripple-effect"
            onClick={this.handleOpenEditor}
            type="button"
          >
            {'Edit Banner'}
          </button>
          <BannerTitleEditor
            background = {background}
            handleCallback = {saveBanner}
            id = {id}
            mediaLib = {mediaLib}
            path = {path}
            ref = {dialog}
            text = {text}
            title = {title}
          />
        </div>
      );
    }
  }
  render() {
    const {title, text, classList} = this.props;
    const className = classNames('banner-title-v2', classList);
    return (
      <div className={className}>
        <h1 className="title">
          {title}
        </h1>
        <div className="text">
          <ReactMarkdown source={text} />
        </div>
        {this.renderEdit()}
      </div>
    );
  }
}

BannerTitle.propTypes = {
  background: React.PropTypes.string,
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  edit: React.PropTypes.bool,
  id: React.PropTypes.string,
  mediaLib: React.PropTypes.shape(mediaLibPropTypes),
  path: React.PropTypes.string,
  saveBanner: React.PropTypes.func,
  text: React.PropTypes.string,
  title: React.PropTypes.string
};

BannerTitle.defaultProps = {
  classList: [],
  edit: false,
  id: 'banner-title',
  path: '',
  saveBanner: () => null,
  text: 'Some texts',
  title: 'Title'
};

export default BannerTitle;

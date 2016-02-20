import React from 'react';
import classNames from 'classnames';
import MdlIconButton from './../atoms/mdl-icon-button.jsx';
import MdlInputText from './../atoms/mdl-input-text.jsx';
import MdlSnackbar from './../atoms/mdl-snackbar.jsx';

class MediaLib extends React.Component {
  constructor() {
    super();
    this.onHandleUploadFile = this.onHandleUploadFile.bind(this);
    this.onHandleMoreFiles = this.onHandleMoreFiles.bind(this);
    this.onHandleSearchFile = this.onHandleSearchFile.bind(this);
    this.sendFilename = this.sendFilename.bind(this);
    this.handlePickFile = this.handlePickFile.bind(this);
    this.afterGetFiles = this.afterGetFiles.bind(this);
    this.fileContainers = {};
  }
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
    const {passMediaLib} = this.props;
    passMediaLib(this);
  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
    const {passMediaLib} = this.props;
    passMediaLib(this);
  }
  afterGetFiles(err) {
    if (err) {
      this.snackbar.notify(err.errMessage, 4000);
    } else {
      // console.log(res);
      this.snackbar.notify('Files Loaded', 2000);
    }
  }
  onHandleSearchFile() {
    this.snackbar.notify('Searching...', 4000);
    this.handleResetFiles();
    this.handleGetFiles(this.searchInput.getValue());
  }
  onHandleMoreFiles() {
    const {token} = this.props;
    const file = this.searchInput.getValue();
    this.handleGetFiles(file, token);
  }
  handleGetFiles(file, nextQuery) {
    const {getFilesHandle, prefix, publicFlag} = this.props;
    getFilesHandle(prefix, publicFlag, XMLHttpRequest, nextQuery, file, this.afterGetFiles);
  }
  handleResetFiles() {
    const {refreshFilesHandle} = this.props;
    refreshFilesHandle();
  }
  sendFilename(err, res) {
    if (err) {
      this.snackbar.notify(err.errMessage, 4000);
    } else {
      this.snackbar.notify('File uploaded successfully', 2000);
      this.props.handleCallback(this.props.publicStorage + res.file);
      this.uploadFile.value = '';
      this.uploadFile.files = [];
      this.handleResetFiles();
      this.handleGetFiles();
    }
  }
  handlePickFile(e) {
    const checkElement = (el) => {
      if (el) {
        const attr = el.getAttribute('data-file');
        return attr ? attr : checkElement(el.parentNode);
      }
    };
    const attr = checkElement(e.target);
    this.props.handleCallback(attr);

    if (this.fileContainers[attr]) {
      this.fileContainers[attr].className = classNames(
        this.defaultClassNameForCard(),
        'media-lib-card-active'
      );
    }
    if (this.fileContainers[this.activePickedFile]) {
      this.fileContainers[this.activePickedFile].className =
        this.defaultClassNameForCard();
    }
    this.activePickedFile = attr;
  }
  onHandleUploadFile() {
    const {uploadFileHandle, prefix, publicFlag, authenticate} = this.props;
    if (this.uploadFile && this.uploadFile.files &&
      this.uploadFile.files.length > 0 && XMLHttpRequest && FormData) {
      const files = this.uploadFile.files;
      uploadFileHandle(
        files,
        prefix,
        publicFlag,
        authenticate,
        XMLHttpRequest,
        FormData,
        this.sendFilename
      );
    } else if (this.uploadFile && this.uploadFile.files && this.uploadFile.files.length === 0 ) {
      this.snackbar.notify('Please Put a filename', 4000);
    }
  }
  renderReload() {
    const {token, id} = this.props;
    if (token && token.trim() !== '') {
      return (
        <MdlIconButton
          handleCallback = {this.onHandleMoreFiles}
          icon = "arrow_drop_down_circle"
          id = {`${id}-load-more`}
          label = "Load More"
        />
      );
    }
  }
  defaultClassNameForCard() {
    return classNames('mdl-card', 'mdl-shadow--2dp', 'media-lib-card');
  }
  renderMedia() {
    const {files, publicStorage, publicFlag, getFileHandle} = this.props;
    return files.map((m, key) => {
      const {file, type, timeCreated} = m;
      const newFile = publicFlag ? publicStorage + file : getFileHandle(file);
      const background = /image\/(\S)*/.test(type) ? newFile : '/default/fpo_4x3.png';
      const style = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0),
          rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top'
      };
      const active = newFile === this.activePickedFile ? 'media-lib-card-active' : '';
      const className = classNames(this.defaultClassNameForCard(), active);
      const container = (c) => {
        this.fileContainers[newFile] = c;
      };
      return (
        <div
          className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet
            mdl-cell--2-col-phone media-lib-card-cell"
          data-file={newFile}
          key={key}
        >
          <div
            className={className}
            data-file={newFile}
            onClick={this.handlePickFile}
            ref = {container}
          >
            <div
              className="mdl-card__title media-lib-card-title"
              data-file={newFile}
              style={style}
            >
              &nbsp;
            </div>
            <div
              className="mdl-card__supporting-text media-lib-card-text"
              data-file={newFile}
            >
              {file.substring(file.lastIndexOf('/') + 1)} <br/>
              {timeCreated}
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    const {id} = this.props;
    const uploadFile = (c) => {
      this.uploadFile = c;
    };
    const searchInput = (c) => {
      this.searchInput = c;
    };
    const snackbar = (c) => {
      this.snackbar = c;
    };
    return (
      <div className="mdl-grid mdl-grid--no-spacing media-lib">
        <div className="mdl-cell mdl-cell--12-col media-lib-upload-file">
          <div className="mdl-grid mdl-grid--no-spacing">
            <div className="mdl-cell mdl-cell--11-col mdl-cell--7-col-tablet
              mdl-cell--3-col-phone media-lib-upload-file-input-container"
            >
              <input
                className="media-lib-upload-file-input"
                ref={uploadFile}
                type="file"
              />
            </div>
            <div className="mdl-cell mdl-cell--1-col mdl-cell--1-col-tablet
              mdl-cell--1-col-phone media-lib-upload-button"
            >
              <MdlIconButton
                handleCallback = {this.onHandleUploadFile}
                icon = "file_upload"
                id = {`${id}-upload-file-media-lib`}
                label = "Upload"
              />
            </div>
          </div>
        </div>
        <div className="mdl-cell mdl-cell--12-col">
          <div className="mdl-grid mdl-grid--no-spacing">
            <div className="mdl-cell mdl-cell--1-col mdl-cell--1-col-tablet mdl-cell--1-col-phone media-lib-search-button">
              <MdlIconButton
                handleCallback = {this.onHandleSearchFile}
                icon = "search"
                id = {`${id}-search-file-media-lib`}
                label = "Search"
              />
            </div>
            <div className="mdl-cell mdl-cell--11-col mdl-cell--7-col-tablet mdl-cell--3-col-phone media-lib-search-input">
              <MdlInputText
                id={`${id}-search-file`}
                label="Search File"
                ref={searchInput}
              />
            </div>
          </div>
        </div>
        <div className="mdl-cell mdl-cell--12-col">
          <div className="mdl-grid mdl-grid--no-spacing media-lib-grid">
            {this.renderMedia()}
          </div>
        </div>
        <div className="mdl-cell mdl-cell--12-col media-lib-load-more-button">
          {this.renderReload()}
        </div>
        <MdlSnackbar
          id = {id}
          ref = {snackbar}
        />
      </div>
    );
  }
}

MediaLib.propTypes = {
  authenticate: React.PropTypes.func,
  files: React.PropTypes.arrayOf(React.PropTypes.shape({
    file: React.PropTypes.string,
    type: React.PropTypes.string
  })),
  getFileHandle: React.PropTypes.func,
  getFilesHandle: React.PropTypes.func,
  handleCallback: React.PropTypes.func,
  id: React.PropTypes.string,
  passMediaLib: React.PropTypes.func,
  prefix: React.PropTypes.string,
  publicFlag: React.PropTypes.bool,
  publicStorage: React.PropTypes.string,
  refreshFilesHandle: React.PropTypes.func,
  token: React.PropTypes.string,
  uploadFileHandle: React.PropTypes.func
};

export const mediaLibPropTypes = MediaLib.propTypes;

MediaLib.defaultProps = {
  authenticate: () => null,
  files: [],
  getFileHandle: () => null,
  getFilesHandle: () => null,
  handleCallback: () => null,
  id: 'media-lib',
  passMediaLib: () => null,
  prefix: '',
  publicFlag: true,
  publicStorage: '/',
  refreshFilesHandle: () => null,
  token: '',
  uploadFileHandle: () => null
};

export default MediaLib;

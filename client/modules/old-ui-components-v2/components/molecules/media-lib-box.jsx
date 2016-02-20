import React from 'react';
import MdlInputText from './../atoms/mdl-input-text.jsx';
import {mediaLibPropTypes} from './../molecules/media-lib.jsx';

class MediaLibBox extends React.Component {
  constructor() {
    super();
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
  getValue() {
    return this.mediaLibInput.getValue();
  }
  setValue(value) {
    this.mediaLibInput.setValue(value);
  }
  loadMediaLib() {
    this.mediaLib.handleGetFiles();
  }
  resetMediaLib() {
    this.mediaLib.handleResetFiles();
  }
  renderMediaLib() {
    const {mediaLib, id} = this.props;
    const {prefix, mediaLibMethod, publicFlag, authenticate} = mediaLib;
    const mediaLibRef = (c) => {
      this.mediaLib = c;
    };
    if (mediaLibMethod && typeof mediaLibMethod === 'function') {
      return mediaLibMethod(this.setValue, authenticate, prefix, publicFlag, id, mediaLibRef);
    }
  }
  render() {
    const {id, label, value} = this.props;
    const mediaLibInputRef = (c) => {
      this.mediaLibInput = c;
    };
    return (
      <div className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-cell mdl-cell--12-col">
          <MdlInputText
            id={`${id}-media-lib`}
            label={label}
            ref={mediaLibInputRef}
            value={value}
          />
        </div>
        <div className="mdl-cell mdl-cell--12-col">
          {this.renderMediaLib()}
        </div>
      </div>
    );
  }
}

MediaLibBox.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  mediaLib: React.PropTypes.shape(mediaLibPropTypes),
  value: React.PropTypes.string
};

MediaLibBox.defaultProps = {
  id: 'media-lib',
  label: 'Insert Media',
  value: ''
};

export default MediaLibBox;

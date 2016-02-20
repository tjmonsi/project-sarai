import React from 'react';
import classNames from 'classnames';
import DialogBox from './../molecules/dialog-box.jsx';
import MdlRadioButton from './../atoms/mdl-radio-button.jsx';
import MdlIconButton from './../atoms/mdl-icon-button.jsx';

class MdlInputTextFile extends React.Component {
  constructor() {
    super();
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
  openDialogUploadLink() {
    this.dialogBoxUpload.openDialog();
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
  getValue() {
    return this.textfield.value;
  }
  render() {
    const {id, label, value, pattern, callback, classList} = this.props;
    const className = classNames('mdl-textfield', 'mdl-js-textfield',
      'mdl-textfield--floating-label', classList);
    const textfield = (c) => {
      this.textfield = c;
    };
    const dialogBoxUpload = (c) => {
      this.dialogBoxUpload = c;
    };
    return (
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell">
            <MdlIconButton
              handleCallback={this.openDialogUploadLink}
              icon="insert_photo"
              id={`markdown-textarea-${id}-insert-photo`}
              label='Insert Photo'
            />
          </div>
          <div className="mdl-cell">
            <div className={className}>
              <input
                className="mdl-textfield__input"
                id={id}
                pattern={pattern}
                ref = {textfield}
                type="text"
                defaultValue={value}
              />
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

MdlInputTextFile.propTypes = {
  callback: React.PropTypes.func,
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  pattern: React.PropTypes.string,
  value: React.PropTypes.string
};

MdlInputTextFile.defaultProps = {
  callback: () => null,
  classList: [],
  id: 'textfield',
  label: 'Input Text here'
};

export default MdlInputTextFile;

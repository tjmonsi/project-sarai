import React from 'react';
import classNames from 'classnames';

class SectionCard extends React.Component {
  constructor() {
    super();
    this.setDialog = this.setDialog.bind(this);
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
  setDialog(c) {
    this.dialog = c;
  }
  handleOpenEditor() {
    this.dialog.openDialog();
  }
  renderEdit() {
    const {edit, editor, id, data} = this.props;
    if (edit) {
      return (
        <span>
          <button
            className="edit-button mdl-button mdl-js-button
              mdl-button--raised mdl-button--colored mdl-js-ripple-effect"
            onClick={this.handleOpenEditor}
            type="button"
          >
            {'Edit Banner'}
          </button>
          {editor(data, id, this.setDialog)}
        </span>
      );
    }
  }
  render() {
    const {img, title, text, link, classList} = this.props;
    const className = classNames('section-card-v2', 'mdl-card', 'mdl-shadow--2dp', classList);
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0),
        rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${img})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top',
      backgroundColor: '#000000',
    };
    return (
      <div className={className}>
        <div
          className="mdl-card__title section-card-title-container"
          style={style}
        >
          <h3 className="section-card-title mdl-card__title-text">
            {title}
          </h3>
        </div>
        <div className="mdl-card__supporting-text section-card-text">
          {text}
        </div>
        <div className="mdl-card__actions section-card-actions">
          <a
            className="section-card-action mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            href={link}
          >
            {'Read More...'}
          </a>
          {this.renderEdit()}
        </div>
      </div>
    );
  }
}

SectionCard.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  data: React.PropTypes.object,
  edit: React.PropTypes.bool,
  editor: React.PropTypes.func,
  handleSave: React.PropTypes.func,
  id: React.PropTypes.string,
  img: React.PropTypes.string,
  link: React.PropTypes.string,
  text: React.PropTypes.string,
  title: React.PropTypes.string
};

SectionCard.defaultProps = {
  classList: [],
  id: '',
  link: '',
  text: 'Logo',
  title: 'Title'
};

export default SectionCard;

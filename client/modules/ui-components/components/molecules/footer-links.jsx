import React from 'react';
import classNames from 'classnames';

class FooterLinks extends React.Component {
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
  render() {
    const {img, title, text, link, classList} = this.props;
    const className = classNames('section-card', 'mdl-card', 'mdl-shadow--2dp', classList);
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
        </div>
      </div>
    );
  }
}

SectionCard.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  img: React.PropTypes.string,
  link: React.PropTypes.string,
  text: React.PropTypes.string,
  title: React.PropTypes.string
};

SectionCard.defaultProps = {
  classList: [],
  icon: '/images/logos/logo1.png',
  link: '',
  text: 'Logo',
  title: 'Title'
};

export default SectionCard;

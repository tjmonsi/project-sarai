import React from 'react';
import classNames from 'classnames';

class Icon extends React.Component {
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
    const {icon, text, link, classList} = this.props;
    const className = classNames('icon', 'mdl-grid', 'mdl-grid--no-spacing', classList);
    return (
      <div className={className}>
        <a
          className="icon-link"
          href={link}
        >
          <div className="mdl-cell mdl-cell--12-col">
            <div className="icon-image-container">
              <img
                className="icon-image"
                src={icon}
              />
            </div>
          </div>
          <div className="mdl-cell mdl-cell--12-col icon-text">
            {text}
          </div>
        </a>
      </div>
    );
  }
}

Icon.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  icon: React.PropTypes.string,
  link: React.PropTypes.string,
  text: React.PropTypes.string
};

Icon.defaultProps = {
  classList: [],
  icon: '/images/logos/logo1.png',
  link: '',
  text: 'Logo'
};

export default Icon;

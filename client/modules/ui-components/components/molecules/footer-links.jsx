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
  renderLinks() {
    return this.props.links.map((link, key) => {
      return (
        <li
          className="footer-links-item"
          key={key}
        >
          <a
            className="footer-link"
            href={link.link}
          >
            {link.label}
          </a>
        </li>
      );
    });
  }
  render() {
    const {title, classList} = this.props;
    const className = classNames('footer-links', classList);
    return (
      <div className={className}>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <h4 className="footer-links-title">
              {title}
            </h4>
          </div>
          <div className="mdl-cell mdl-cell--12-col">
            <ul className="footer-links-list">
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

FooterLinks.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    label: React.PropTypes.string,
    link: React.PropTypes.string
  })),
  title: React.PropTypes.string
};

FooterLinks.defaultProps = {
  classList: [],
  links: [],
  title: 'Title'
};

export default FooterLinks;

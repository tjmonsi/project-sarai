import React from 'react';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';

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
    const {title, text, classList} = this.props;
    const className = classNames('footer-text', classList);
    return (
      <div className={className}>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <h4 className="footer-text-title">
              {title}
            </h4>
          </div>
          <div className="mdl-cell mdl-cell--12-col">
            <div className="footer-text-content">
              <ReactMarkdown source={text} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FooterLinks.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  text: React.PropTypes.string,
  title: React.PropTypes.string
};

FooterLinks.defaultProps = {
  classList: [],
  text: 'Some text',
  title: 'Title'
};

export default FooterLinks;

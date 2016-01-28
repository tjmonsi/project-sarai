import React from 'react';
import classNames from 'classnames';

class Footer extends React.Component {
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
  renderSections() {
    return this.props.sections.map((section) => {
      return (
        <div className="mdl-cell mdl-cell--3-col mdl-cell--top mdl-cell--2-col-phone">
          <div className="footer-section">
            {section}
          </div>
        </div>
      );
    });
  }
  render() {
    const {classList} = this.props;
    const className = classNames('footer', classList);

    return (
      <div className={className}>
        <div className="mdl-grid">
          {this.renderSections()}
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  sections: React.PropTypes.arrayOf(React.PropTypes.element)
};

Footer.defaultProps = {
  classList: [],
  sections: []
};

export default Footer;

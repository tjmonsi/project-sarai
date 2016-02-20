import React from 'react';
import classNames from 'classnames';

class QuadSection extends React.Component {
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
    return this.props.sections.map((section, key) => {
      return (
        <div
          className="mdl-cell mdl-cell--3-col mdl-cell--2-col-phone section"
          key={key}
        >
          {section}
        </div>
      );
    });
  }
  render() {
    const {spacing, classList} = this.props;
    const noSpacing = 'mdl-grid--no-spacing';
    const className = spacing ? classNames('mdl-grid', 'quad-section', classList)
      : classNames('mdl-grid', 'quad-section', noSpacing, classList);
    return (
      <div className={className}>
        {this.renderSections()}
      </div>
    );
  }
}

QuadSection.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  sections: React.PropTypes.arrayOf(React.PropTypes.element),
  spacing: React.PropTypes.bool
};

QuadSection.defaultProps = {
  classList: [],
  sections: [],
  spacing: true
};

export default QuadSection;

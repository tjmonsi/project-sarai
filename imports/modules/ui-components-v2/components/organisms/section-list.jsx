import React from 'react';
import classNames from 'classnames';

class SectionList extends React.Component {
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
          className="mdl-cell mdl-cell--12-col section"
          key={key}
        >
          {section()}
        </div>
      );
    });
  }
  render() {
    const {spacing, classList} = this.props;
    const noSpacing = 'mdl-grid--no-spacing';
    const className = spacing ? classNames('mdl-grid', 'section-list', classList)
      : classNames('mdl-grid', 'section-list', noSpacing, classList);
    return (
      <div className={className}>
        {this.renderSections()}
      </div>
    );
  }
}

SectionList.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  sections: React.PropTypes.arrayOf(React.PropTypes.func),
  spacing: React.PropTypes.bool
};

SectionList.defaultProps = {
  classList: [],
  sections: [],
  spacing: true
};

export default SectionList;

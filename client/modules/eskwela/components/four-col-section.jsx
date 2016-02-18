import React from 'react';
import classNames from 'classnames';

// import {SectionCard} from '/client/modules/ui-components';

class FourColSection extends React.Component {
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
          className="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet
            mdl-cell--2-col-phone section"
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
    const className = spacing ? classNames('mdl-grid', 'section-list', classList)
      : classNames('mdl-grid', 'section-list', noSpacing, classList);
    return (
      <div className={className}>
        <div className="mdl-cell mdl-cell--2-offset-desktop mdl-cell--8-col-desktop mdl-cell--1-offset-tablet mdl-cell--6-col-tablet mdl-cell--4-col-phone">
          <div className="mdl-grid">
            {this.renderSections()}
          </div>
        </div>
      </div>
    );
  }
}

FourColSection.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  sections: React.PropTypes.arrayOf(React.PropTypes.element),
  spacing: React.PropTypes.bool
};

export default FourColSection;

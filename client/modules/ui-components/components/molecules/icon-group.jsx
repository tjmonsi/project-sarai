import React from 'react';
import classNames from 'classnames';

class IconGroup extends React.Component {
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
  renderIcons() {
    return this.props.icons.map((icon, key) => {
      return (
        <div
          className="mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--2-col-phone icon-container"
          key={key}
        >
          {icon}
        </div>
      );
    });
  }
  render() {
    const {spacing, classList} = this.props;
    const noSpacing = 'mdl-grid--no-spacing';
    const className = spacing ? classNames('mdl-grid', 'icon-group', classList)
      : classNames('mdl-grid', 'icon-group', noSpacing, classList);
    return (
      <div className={className}>
        {this.renderIcons()}
      </div>
    );
  }
}

IconGroup.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  icons: React.PropTypes.arrayOf(React.PropTypes.element),
  spacing: React.PropTypes.bool
};

IconGroup.defaultProps = {
  classList: [],
  icons: [],
  spacing: true
};

export default IconGroup;

import React from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';

class BannerTitle extends React.Component {
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
    const className = classNames('banner-title-v2', classList);
    return (
      <div className={className}>
        <h1 className='title'>{title}</h1>
        <div className='text'>
          <ReactMarkdown source={text} />
        </div>
      </div>
    );
  }
}

BannerTitle.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  text: React.PropTypes.string,
  title: React.PropTypes.string
};

BannerTitle.defaultProps = {
  classList: [],
  text: 'Some texts',
  title: 'Title'
};

export default BannerTitle;

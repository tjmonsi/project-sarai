import React from 'react';
import ReactMarkdown from 'react-markdown';
import text from './coded-text/about.js';
console.log(text);

class AboutComponent extends React.Component {
  constructor() {
    super();
    this.text = text;
  }
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
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <ReactMarkdown source={this.text} />
        </div>
      </div>
    );
  }
}

export default AboutComponent;

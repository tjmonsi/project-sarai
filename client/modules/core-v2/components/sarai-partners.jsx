import React from 'react';

class SaraiPartners extends React.Component {
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
  primaryPartners() {
    return [
      'dost.jpg',
      'pcaarrd.jpg',
      'uplb.png'
    ];
  }
  secondaryPartners() {
    return [
      'asti.jpg',
      'bpsu.jpg',
      'bswm.png',
      'cavsu.jpg',
      'clsu.jpg',
      'cmu.jpg',
      'ctu.jpg',
      'da.gif',
      'ibm.png',
      'iesm.jpg',
      'isu.png',
      'minscat.jpg',
      'moscat.jpg',
      'nigs.jpg',
      'pagasa.png',
      'pca.jpg',
      'philrice.jpg',
      'smart.jpg',
      'usm.png',
      'wpu.jpg',
      'wvsu.jpg'
    ];
  }
  renderPrimary() {
    return this.primaryPartners().map((logo, key) => {
      return (
        <img
          className="sarai-partner-primary"
          key={key}
          src={`/images/partners/${logo}`}
        />
      );
    });
  }
  renderSecondary() {
    return this.secondaryPartners().map((logo, key) => {
      return (
        <img
          className="sarai-partner-secondary"
          key={key}
          src={`/images/partners/${logo}`}
        />
      );
    });
  }
  render() {
    return (
      <div className="sarai-partners">
        <div className="mdl-grid mdl-grid--no-spacing ">
          <div className="mdl-cell mdl-cell--12-col">
            {this.renderPrimary()}
          </div>
          <div className="mdl-cell mdl-cell--12-col">
            {this.renderSecondary()}
          </div>
        </div>
      </div>
    );
  }
}

export default SaraiPartners;

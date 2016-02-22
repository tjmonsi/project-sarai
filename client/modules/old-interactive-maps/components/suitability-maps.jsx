import React from 'react';

class SuitabilityMapComponent extends React.Component {
  constructor() {
    super()
    this.auto = this.auto.bind(this);
  }
  auto() {
    let myWidth = 0;
    let myHeight = 0;
    if( typeof( window.innerWidth ) == 'number' ) {
      //Non-IE
      myWidth = window.innerWidth;
      myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
      //IE 6+ in 'standards compliant mode'
      myWidth = document.documentElement.clientWidth;
      myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
      //IE 4 compatible
      myWidth = document.body.clientWidth;
      myHeight = document.body.clientHeight;
    }
    console.log(this.frame.style)
    this.frame.style.height = (myHeight-60)+'px';
  }
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
    const auto = this.auto;
    window.addEventListener('resize', () => {
      auto();
    })
    this.auto();
  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  render() {
    const style = {
      width: '100%',
      height: 400
    };
    return (
      <div className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-cell mdl-cell--12-col old-interactive-map">
          <iframe
            allow-same-origin
            style={style}
            ref={(c) => {
              this.frame = c;
            }}
            src="https://sarai-interactive-map-backup-tjmonsi1.c9users.io/three/"
          >
          </iframe>
        </div>
      </div>
    );
  }
}

// SuitabilityMapComponent.propType = {
//   height: React.PropTypes.number
// };

// SuitabilityMapComponent.defaultProps = {
//   height: this.auto()
// };

export default SuitabilityMapComponent;

import React from 'react';

class GovernmentFooter extends React.Component {
  render() {
    const style = {
      border: '0px',
      marginBottom: '-3px',
      overflow: 'hidden',
      height: '180px'
    };
    return (
      <div className="government-footer">
        <div id="gwt-standard-footer">
          <iframe
            id="footer-gwt-frame"
            scrolling="no"
            src="https://cdn.i.gov.ph/gwt-footer/footer-source.html"
            style={style}
            width="100%"
          >
          </iframe>
        </div>
      </div>
    );
  }
}

export default GovernmentFooter;

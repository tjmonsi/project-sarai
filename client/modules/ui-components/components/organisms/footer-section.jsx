import React from 'react';
import classNames from 'classnames';

class FooterSection extends React.Component {
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
          className="mdl-cell mdl-cell--3-col mdl-cell--top mdl-cell--2-col-phone"
          key={key}
        >
          <div className="footer-section">
            {section}
          </div>
        </div>
      );
    });
  }
  render() {
    const {classList} = this.props;
    const className = classNames('footer-sections', classList);

    return (
      <footer id="footer">
      	<div className="main-container">
      		<div className="row mdl-grid">
						<div className="col-md-4 col-sm-4 col-xs-12 mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
      				<div
      				  id="text-3"
      				  className="widget widget_text"
    				  >
      				  <h4 className="widget-title">{'About SARAI'}</h4>
    				    <div className="textwidget">
    				      {'Project SARAI aims to develop a national crop forecasting and monitoring system for first six priority crops: rice, corn, banana, coconut, coffee, cacao.'}
                </div>
      		    </div>
      		    <div
      		      id="text-8"
      		      className="widget widget_text"
    		      >
      		      <div className="textwidget">
      		        <img
      		          src="http://sarai.ph/wp-content/uploads/2016/02/DOST_PCAARRD_UPLB-1.png"
      		          height="50px"
      		        />
      		        </div>
      		    </div>
      		  </div>
      			<div className="col-md-4 col-sm-4 col-xs-12 mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
      				<div
      				  id="tcsn-custom-contact-info-3"
      				  className="widget tcsn_widget_conatct_info"
    				  >
    				    <h4 className="widget-title">Stay Connected</h4>
    				    <div className="widget-contact-info">
      		        <div className="widget-phone clearfix">
      		          <div className="widget-contact-text">
      		            {'+63 (049) 536 3080, 2836'}
    		            </div>
        	        </div>
        			    <div className="widget-email clearfix">
          		      <div className="widget-contact-text">
          		        <a href="mailto:http://sarai@uplb.edu.ph">
          			        sarai@uplb.edu.ph
          			      </a>
        			      </div>
          	      </div>
        			    <div className="widget-address clearfix">
          		      <div className="widget-contact-text">
          		        SESAM UPLB, College, Laguna Philippines 4031
                    </div>
          	      </div>
      	        </div>
              </div>
            </div>
						<div className="col-md-4 col-sm-4 col-xs-12 mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
      				<div
      				  id="tcsn-custom-social-network-4"
      				  className="widget tcsn_widget_social_network"
    				  >
    				    <h4 className="widget-title">Get Involved</h4>
    				    <ul className="social clearfix">
  								<li>
  								  <a
  								    href="https://www.facebook.com/projectsarai/"
  								    className="facebook"
  								    target="_blank"
  								    title="facebook">
								    </a>
							    </li>
									<li>
									  <a
									    href="https://twitter.com/ProjectSARAI"
									    className="twitter"
									    target="_blank"
									    title="twitter">
								    </a>
							    </li>
    				      <li>
    				        <a
    				          href="https://www.youtube.com/channel/UCJtzNfVmoqFZGCF326VaTZw"
    				          className="youtube"
    				          target="_blank"
    				          title="youtube">
  				          </a>
				          </li>
								</ul>
              </div>
            </div>
      		</div>
      	</div>
      </footer>
    );
  }
}

FooterSection.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  sections: React.PropTypes.arrayOf(React.PropTypes.element)
};

FooterSection.defaultProps = {
  classList: [],
  sections: []
};

export default FooterSection;

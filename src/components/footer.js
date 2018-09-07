import React from 'react';
import BrandLogo from '../images/logos/www.knobcreek.com-1311011787501770.svg';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-component">
        <footer>
	        <nav className="navbar navbar__footer">
	            <div className="nav-items--social">
                  <h2 className="navbar-social-share">share on</h2>
	                <ul className="navbar-social">
		                <li>
		                  <a href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
		                    <i className="fa fa-facebook"></i>
		                  </a>
		                </li>
		                <li>
		                  <a href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
		                    <i className="fa fa-twitter"></i>
		                  </a>
		                </li>
		              </ul>
	            </div>
	            <a className="navbar-item--brand" href="#">
	                <img className="brand-logo" src={BrandLogo} />
	            </a>
	        </nav>
	    </footer>
      </div>
    );
  }
}

Footer.displayName = 'Footer';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default Footer;

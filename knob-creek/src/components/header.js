import React from 'react';
import BrandLogo from '../images/logos/www.knobcreek.com-1311011787501770.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="header-component">
        <div className="navbar-sponsored">
          <p className="text-sm text-center no-margin">Sponsored By</p>
        </div>
          <nav className="navbar">
            <div className="navbar-content">
              <a href="#">
                  <img className="navbar-brand" src={BrandLogo} alt="knob creek logo" />
                  <img className="is_sponsored" src={BrandLogo} alt="sponsors logo" />
              </a>
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
          </nav>
      </div>
    );
  }
}

Header.displayName = 'Header';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default Header;

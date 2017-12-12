import React from 'react';
import Bottle from '../images/KnobCreek.png';


class Hero extends React.Component {
  render() {
    return (
      <div className="hero-component">
      	<div className="hero-bg">
	        <div className="container row flex-grid">
	            <div className="col-half hero-text">
	                <h1 className="heading--h1">Maple Never Tasted So Good</h1>
	                <p>We blend this bourbon with natural smoked maple flavors for a unique, smoky sweetness. Full-bodied, inviting maple notes that lift to smoke and are complemented with rich vanilla and caramel. Smoked hickory and maple wood, with hints of earthy grains.
	                </p>
	            </div>
	            <div className="col-half bottle">
	               <img className="bottle-image" src={Bottle} alt="knob creek bottle" />
	            </div>
	        </div>
	    </div>
      </div>
    );
  }
}

Hero.displayName = 'Hero';

// Uncomment properties you need
// HeroComponent.propTypes = {};
// HeroComponent.defaultProps = {};

export default Hero;

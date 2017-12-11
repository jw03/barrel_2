import React from 'react';

class Hero extends React.Component {
  render() {
    return (
      <div className="hero-component">
      	<div class="hero-bg">
	        <div class="container row">
	            <div class="half column hero-text">
	                <h1 class="header--h1">Maple Never Tasted So Good</h1>
	                <p>We blend this bourbon with natural smoked maple flavors for a unique, smoky sweetness. Full-bodied, inviting maple notes that lift to smoke and are complemented with rich vanilla and caramel. Smoked hickory and maple wood, with hints of earthy grains.
	                </p>
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

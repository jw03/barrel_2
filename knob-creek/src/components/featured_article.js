import React from 'react';

import IconArticle from '../images/icons/Article.svg';

class FeaturedArticle extends React.Component {
  render() {
    return (
      <div className="featuredarticle-component">
        <article className="article-featured container">
        	<a href="#">
	        	<div className="flex-grid">
	                <div className="col">
	                    <div className="article-featured-image article-featured-image--1"></div>
	                </div>
	                <div className="col">
	                    <div className="article-featured-description">
              				<img src={IconArticle} alt="article icon" />
	                        <p className="date">November 20</p>
	                        <h2 className="subheading--h2">Too Much Flavor For Four Walls To Hold</h2>
	                        <p className="teaser">There are only so many hours in a day, so we make every glass count. We craft full-flavored whiskey for those who find a way to get the most out of every minute of every day...</p>
	                        <p className="cta">Read More</p>
	                    </div>
	                </div>
	            </div>
	        </a>
        </article>
	</div>
    );
  }
}

FeaturedArticle.displayName = 'FeaturedArticle';

// Uncomment properties you need
// FeaturedArticleComponent.propTypes = {};
// FeaturedArticleComponent.defaultProps = {};

export default FeaturedArticle;

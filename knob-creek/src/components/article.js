import React from 'react';

class Article extends React.Component {
  render() {
    return (
      <div className="article-component">
        <h2 className="text-center">Recent Articles</h2>
        <div className="container">
          <div className="article-grid">
            <div className="col-thirds column article-spacer">
              <article className="article-item">
                <a className="article-item--wrapper" href="#">
                  <div className="article-item--image article-item--image--1"></div>
                  <div className="article-item--description">
                    <div className="icon-container">

                    </div>
                    <p className="date">November 20</p>
                    <h2>This Creek Runs Full, Making Every Glass Count</h2>
                    <p className="cta">Read More</p>
                  </div>
                </a>
              </article>
            </div>

            <div className="col-thirds column article-spacer">
              <article className="article-item">
                <a className="article-item--wrapper" href="#">
                  <div className="article-item--image article-item--image--2">
                  </div>
                  <div className="article-item--description">
                    <div className="icon-container">

                    </div>
                    <p className="date">November 01</p>
                    <h2>Celebrating Knob Creek's 25th Anniversary</h2>
                    <p className="cta">Watch Video</p>
                  </div>
                </a>
              </article>
            </div>

            <div className="col-thirds column article-spacer">
              <article className="article-item">
                <a className="article-item--wrapper" href="#">
                  <div className="article-item--image article-item--image--3">
                  </div>
                  <div className="article-item--description">
                    <div className="icon-container">

                    </div>
                    <p className="date">October 30</p>
                    <h2>The Single Barrel Experience</h2>
                    <p className="cta">Read Video</p>
                  </div>
                </a>
              </article>
            </div>

            <div className="col-thirds column article-spacer">
              <article className="article-item">
                <a className="article-item--wrapper" href="#">
                  <div className="article-item--image article-item--image--1"></div>
                  <div className="article-item--description">
                    <div className="icon-container">

                    </div>
                    <p className="date">November 20</p>
                    <h2>This Creek Runs Full, Making Every Glass Count</h2>
                    <p className="cta">Read More</p>
                  </div>
                </a>
              </article>
            </div>

            <div className="col-thirds column article-spacer">
              <article className="article-item">
                <a className="article-item--wrapper" href="#">
                  <div className="article-item--image article-item--image--1"></div>
                  <div className="article-item--description">
                    <div className="icon-container">

                    </div>
                    <p className="date">November 20</p>
                    <h2>This Creek Runs Full, Making Every Glass Count</h2>
                    <p className="cta">Read More</p>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

Article.displayName = 'Article';


// Uncomment properties you need
// ArticleComponent.propTypes = {};
// ArticleComponent.defaultProps = {};

export default Article;

import React from 'react';
import ArticleImage from '../images/www.knobcreek.com-1550074812575410.jpg';


class Article extends React.Component {
  render() {
    return (
      <div className="article-component">
        <h2 className="text-center">Recent Articles</h2>
        <div className="container">
          <div className="article-grid">
          <div className="col-thirds article-spacer">
              <article className="article-item">
                <a className="article-item--wrapper" href="#">

                  <img class="img-correct" src="/static/media/www.knobcreek.com-1550031134660845.f8f1efcd.jpg" height="42" width="42" />

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
            <div className="col-thirds article-spacer">
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
            <div className="col-thirds article-spacer">
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
            {/*<div className="col-thirds article-spacer">
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

            <div className="col-thirds article-spacer">
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

            <div className="col-thirds article-spacer">
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

            <div className="col-thirds article-spacer">
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

            <div className="col-thirds article-spacer">
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

            <div className="col-thirds article-spacer">
              <article className="article-item">
                <a className="article-item--wrapper" href="#">
                  <img src={ArticleImage} />
                  <div className="article-item--description">
                    <div className="icon-container">

                    </div>
                    <p className="date">November 20</p>
                    <h2>This Creek Runs Full, Making Every Glass Count</h2>
                    <p className="cta">Read More</p>
                  </div>
                </a>
              </article>
            </div>*/}
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

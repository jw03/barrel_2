import React from 'react';
import ArticleImage from '../images/www.knobcreek.com-1550074812575410.jpg';
import IconArticle from '../images/icons/Article.svg';
import IconGallery from '../images/icons/Gallery.svg';
import IconGlass from '../images/icons/Glass.svg';
import IconVideo from '../images/icons/Video.svg';



class Article extends React.Component {
  render() {
    return (
      <div className="article-component">
        <h2 className="text-center section-heading">Recent Articles</h2>
        <div className="container">
          <div className="article-grid">
            <div className="col-thirds article-spacer">
              <article className="article-item">
                <a id="modalBtn" className="article-item--wrapper" href="#">

                  <div className="article-item--image article-item--image--1"></div>

                  <div className="article-item--description">
                    <div className="icon-container">
                      <img src={IconArticle} alt="article icon" class="icon icon--article" />
                    </div>
                    <p className="date">November 10</p>
                    <h2>This Creek Runs Full, Making Every Glass Count</h2>
                    <p className="cta">Read More</p>
                  </div>
                </a>
              </article>
            </div>

            <div id="simpleModal" class="modal">
              <div class="modal-content">
                <div class="modal-header">
                  <span class="closeBtn">&times;</span>
                </div>
                <div class="modal-body">
                <article className="article-item">
                <div className="article-item--image article-item--image--1"></div>
                  <div className="article-item--description">
                    <div className="icon-container">
                      <img src={IconArticle} alt="article icon" class="icon icon--article" />
                    </div>
                    <p className="date">November 10</p>
                    <h2>This Creek Runs Full, Making Every Glass Count</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius arcu vel placerat mollis. Etiam eleifend ipsum augue, a posuere nulla faucibus vel. Proin luctus felis euismod, pulvinar dui et, finibus mi. Fusce venenatis magna vel convallis ornare. Sed finibus ultrices quam, eu iaculis dui facilisis vitae. Nam pulvinar tellus sem, et pharetra mauris aliquam pellentesque. Cras feugiat mi eget commodo pellentesque. Mauris quis euismod leo. Curabitur et mi ipsum. Nulla ultricies orci in tincidunt finibus. Nullam sollicitudin sit amet justo sit amet pretium. Vivamus ut tellus accumsan, volutpat augue sed, hendrerit augue. Morbi diam arcu, elementum vel quam ornare, porttitor hendrerit tellus. Praesent at metus sit amet nisl faucibus ullamcorper. Cras tincidunt ex ante, vel ullamcorper purus rhoncus dictum. Proin vulputate lorem sed odio dictum, in tempus ligula tincidunt. Praesent at porta leo, eu aliquam neque. Suspendisse in lorem sit amet nibh pulvinar vehicula id vitae sem. Nunc fermentum urna sed quam aliquam, finibus vulputate ipsum sodales. Donec vehicula ex id odio lacinia, in scelerisque nibh molestie. Sed ullamcorper, sem eu scelerisque cursus, risus ex aliquet lorem, vel molestie purus nulla dapibus mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent malesuada venenatis justo, auctor scelerisque nibh lobortis at. Aenean vitae ante maximus, aliquet dui ac, ornare tortor. Nam a lacus quis turpis pharetra sodales. Nunc volutpat magna quis ligula rutrum, sed pulvinar orci convallis. Phasellus consectetur purus felis, a vehicula sem suscipit a. Nam vulputate scelerisque odio, nec venenatis magna.</p>
                  </div>
                  </article>
                </div>
              </div>
            </div>

            <div className="col-thirds article-spacer">
              <article className="article-item">
                <a className="article-item--wrapper" href="#">
                  <div className="article-item--image article-item--image--2"></div>
                  <div className="article-item--description">
                    <div className="icon-container">
                      <img src={IconVideo} alt="article icon" class="icon icon--video" />
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
                  <div className="article-item--image article-item--image--3"></div>
                  <div className="article-item--description">
                    <div className="icon-container">
                      <img src={IconGlass} alt="article icon" class="icon icon--glass" />
                    </div>
                    <p className="date">October 30</p>
                    <h2>The Single Barrel Experience</h2>
                    <p className="cta">Read More</p>
                  </div>
                </a>
              </article>
            </div>
            <div className="col-thirds article-spacer">
              <article className="article-item">
                <a className="article-item--wrapper" href="#">
                  <div className="article-item--image article-item--image--4"></div>
                  <div className="article-item--description">
                    <div className="icon-container">
                      <img src={IconVideo} alt="article icon" class="icon icon--video" />
                    </div>
                    <p className="date">October 20</p>
                    <h2>Make No Small Plans. Drink No Small Bourbon</h2>
                    <p className="cta">Watch Video</p>
                  </div>
                </a>
              </article>
            </div>

            <div className="col-thirds article-spacer">
              <article className="article-item">
                <a className="article-item--wrapper" href="#">
                  <div className="article-item--image article-item--image--5">
                  </div>
                  <div className="article-item--description">
                    <div className="icon-container">
                      <img src={IconArticle} alt="article icon" class="icon icon--article" />
                    </div>
                    <p className="date">October 10</p>
                    <h2>There's No Faking Flavor: It Has To Be Earned</h2>
                    <p className="cta">Read More</p>
                  </div>
                </a>
              </article>
            </div>

            <div className="col-thirds article-spacer">
              <article className="article-item">
                <a className="article-item--wrapper" href="#">
                  <div className="article-item--image article-item--image--6">
                  </div>
                  <div className="article-item--description">
                    <div className="icon-container">
                      <img src={IconGallery} alt="article icon" class="icon icon--gallery" />
                    </div>
                    <p className="date">October 05</p>
                    <h2>Learn About Pre-Prohibition Style Whiskey</h2>
                    <p className="cta">View Gallery</p>
                  </div>
                </a>
              </article>
            </div>

            <div className="col-thirds article-spacer">
              <article className="article-item">
                <a className="article-item--wrapper" href="#">
                  <div className="article-item--image article-item--image--7"></div>
                  <div className="article-item--description">
                    <div className="icon-container">
                      <img src={IconArticle} alt="article icon" class="icon icon--article" />
                    </div>
                    <p className="date">September 30</p>
                    <h2>About Our Master Distiller Booker Noe</h2>
                    <p className="cta">Read More</p>
                  </div>
                </a>
              </article>
            </div>

            <div className="col-thirds article-spacer">
              <article className="article-item">
                <a className="article-item--wrapper" href="#">
                  <div className="article-item--image article-item--image--8"></div>
                  <div className="article-item--description">
                    <div className="icon-container">
                      <img src={IconGlass} alt="article icon" class="icon icon--glass" />
                    </div>
                    <p className="date">September 18</p>
                    <h2>About Our Master Distiller Booker Noe</h2>
                    <p className="cta">Read More</p>
                  </div>
                </a>
              </article>
            </div>

            <div className="col-thirds article-spacer">
              <article className="article-item">
                <a className="article-item--wrapper" href="#">
                  <div className="article-item--image article-item--image--9"></div>
                  <div className="article-item--description">
                    <div className="icon-container">
                      <img src={IconGallery} alt="article icon" class="icon icon--gallery" />
                    </div>
                    <p className="date">September 10</p>
                    <h2>Unmistakable Richness And Signature Sweetness</h2>
                    <p className="cta">View Gallery</p>
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

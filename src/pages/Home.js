import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <main>
        <section className="banner">
          <img src="portfolio/images/T.svg" alt="T logo"></img>
          <h1>Timo Seppern</h1>
          <h2>Front-End Developer</h2>
          <div className="triangle" alt="gradient triangle"></div>
          <div className="triangle2" alt="gradient triangle"></div>
          <div className="triangle3" alt="gradient triangle"></div>
          <section className="social">
            <a href="https://github.com/TSeppern" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/timo-seppern-868baa259/" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </section>
        </section>
        <section className="allProjects">
          <h1>Projects - My past work samples</h1>
          <div className="projects"> 
            <div className="item">
              <img src="portfolio/images/Sillamäe-Invaders.jpg" alt="Space Invaders Like Game"></img>
              <div className="description">
                <div className="description-content">
                  <h3>Sillamäe Invaders Video Game</h3>
                  <div className="tech-tree">
                    <img src="portfolio/images/javascript-programming-language-icon.png" alt="Javascript programming language icon"></img>
                    <img src="portfolio/images/html-icon.png" alt="HTML5 icon"></img>
                    <img src="portfolio/images/css-icon.png" alt="CSS3 icon"></img>
                  </div>
                  <div className="links">
                    <a href="https://tseppern.github.io/Sillamae-Invaders/" target="_blank" rel="noreferrer">
                      <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" fillRule="nonzero"/>
                      </svg>
                      <p>Demo</p>
                    </a>
                    <a href="https://github.com/TSeppern/Sillamae-Invaders" target="_blank" rel="noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/>
                      </svg>
                      <p>Code</p>
                    </a>
                  </div>
                </div>
                <div className="description-text">
                  <p>An alternative version of the famous Space Invaders video game with a grain of modern humor. This was a school project that had certain requirements and rules(these are listed in my github repo). I got a pretty good understanding about running a game loop and updating it. Also how to make changes in game work with other game elements.</p>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="portfolio/images/Pirjopaulus.jpg" alt="Wordpress Brow Studio Webpage"></img>
              <div className="description">
                <div className="description-content">
                  <h3>Brow Studio Wordpress Page</h3>
                  <div className="tech-tree">
                    <img src="portfolio/images/wordpress-icon.png" alt="Wordpress site bulding tool icon"></img>
                    <img src="portfolio/images/elementor-icon.png" alt="Elementor wordpress builder icon"></img>
                    <img src="portfolio/images/woocommerce-icon.png" alt="Woocommerce web store builder for wordpress icon"></img>
                    <img src="portfolio/images/figma-icon.png" alt="Figma program icon"></img>
                  </div>
                  <div className="links">
                    <a href="https://pirjopaulus.com" target="_blank" rel="noreferrer">
                      <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" fillRule="nonzero"/>
                      </svg>
                      <p>Demo</p>
                    </a>
                  </div>
                </div>
                <div className="description-text">
                  <p>This is an online store WordPress site built with Elementor and WooCommerce. I had no previous knowledge about WordPress before building this site so it was a pretty big learning curve. The client already had an up and running WordPress page so I imported my prototype (hosted with Local) to the same address. I learned that although making a WordPress website with a builder is fast and easy, fixing bugs is sometimes quite complicated.</p>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="portfolio/images/FAQ-Accordion.jpg" alt="FAQ Accordion Card"></img>
              <div className="description">
                <div className="description-content">
                  <h3>Example FAQ Accordion Card</h3>
                  <div className="tech-tree">
                    <img src="portfolio/images/javascript-programming-language-icon.png" alt="Javascript programming language icon"></img>
                    <img src="portfolio/images/html-icon.png" alt="HTML5 icon"></img>
                    <img src="portfolio/images/css-icon.png" alt="CSS3 icon"></img>
                  </div>
                  <div className="links">
                    <a href="https://tseppern.github.io/faq-accordion-card-main/" target="_blank" rel="noreferrer">
                      <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" fillRule="nonzero"/>
                      </svg>
                      <p>Demo</p>
                    </a>
                    <a href="https://github.com/TSeppern/faq-accordion-card-main" target="_blank" rel="noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/>
                      </svg>
                      <p>Code</p>
                    </a>
                  </div>
                </div>
                <div className="description-text">
                  <p>This is a solution to the FAQ accordion card challenge on <a href="https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam" target="_blank" rel="noreferrer">FAQ accordion card challenge on Frontend Mentor</a>. The challenge was to build the accordion card as close as possible to the JPEG provided. The color values were given, but element sizes were not. I mainly learned some new tricks in CSS about using multiple images and layering them. Also about different ways to incorporate images to the page so that they behave as expected (mainly overflow wise). About HTML I improved my knowledge in SEO and optimization. I didn't have to use a lot of JS, so there was no new knowledge obtained in that field.</p>
                </div>
              </div>
            </div>
            <div className="item">
              <img src="portfolio/images/Advice-Generator.jpg" alt="Advice Generator App"></img>
              <div className="description">
                <div className="description-content"> 
                  <h3>Advice Generator App</h3>
                  <div className="tech-tree">
                    <img src="portfolio/images/javascript-programming-language-icon.png" alt="Javascript programming language icon"></img>
                    <img src="portfolio/images/html-icon.png" alt="HTML5 icon"></img>
                    <img src="portfolio/images/sass-icon.png" alt="Scss/Sass icon"></img>
                  </div>
                  <div className="links">
                    <a href="https://tseppern.github.io/Advice-generator-app/" target="_blank" rel="noreferrer">
                      <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" fillRule="nonzero"/>
                      </svg>
                      <p>Demo</p>
                    </a>
                    <a href="https://github.com/TSeppern/Advice-generator-app" target="_blank" rel="noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/>
                      </svg>
                      <p>Code</p>
                    </a>
                  </div>
                </div>
                <div className="description-text">
                  <p>This is a solution to the <a href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db" target="_blank" rel="noreferrer">Advice generator app challenge on Frontend Mentor</a>. Mainly I learned how to use SASS and compile it to vanilla CSS using Gulp. I now know how to write reusable elements in SASS. I gained new information about getting data from an Advice Slip API and showing it on my page using JavaScript. And lastly I figured out how to add extensive styling to a button element.</p>
                </div>
              </div>
            </div>
          </div> 
        </section>
      </main>
    );
  }
}

export default Home;
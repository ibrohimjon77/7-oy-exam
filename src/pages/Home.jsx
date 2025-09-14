import React from 'react'
import heroImg from '../../assets/images/image-home-hero-large.webp'
import icon from '../../assets/images/icon-whole-food-recipes.svg'
import icon2 from '../../assets/images/icon-minimum-fuss.svg'
import icon3 from '../../assets/images/icon-search-in-seconds.svg'
import heroImg2 from '../../assets/images/image-home-real-life-small.webp'
function Home() {
  return (
    <>
      <hr />
      <div className="container">
        <div className="container hero-title">
          <div className="hero-element">
            <h1>
              <span className="highlight">Healthy</span> meals, zero fuss
            </h1>
            <p>
              Discover eight quick, whole-food recipes that you can cook tonight{" "}
              <br />
              —no processed junk, no guesswork.
            </p>
            <button className="btn  ">Start exploring</button>
          </div>
          <div className="img-bg">
            <img className="heroImg" src={heroImg} alt="" />
          </div>
        </div>
        <h2 className="what">What you’ll get</h2>
        <ul className="icons">
          <li>
            <img className="food" src={icon} alt="" />
            <h3>Whole-food recipes</h3>
            <p>
              Each dish uses everyday, unprocessed <br /> ingredients.
            </p>
          </li>
          <li>
            <img className="minimum" src={icon2} alt="" />
            <h3>Minimum fuss</h3>
            <p>
              All recipes are designed to make eating <br /> healthy quick and
              easy.
            </p>
          </li>
          <li>
            <img className="minimum" src={icon3} alt="" />
            <h3>Search in seconds</h3>
            <p>
              Filter by name or ingredient and jump <br /> straight to the
              recipe you need.
            </p>
          </li>
        </ul>
        <div className="hero-built">
          <div>
            <h2>Built for real life</h2>
            <p>
              Cooking shouldn’t be complicated. These recipes come in <br />
              under
              <span>30 minutes</span> of active time, fit busy schedules, and
              <br />
              taste good enough to repeat.
            </p>
            <p>
              Whether you’re new to the kitchen or just need fresh <br /> ideas,
              we’ve got you covered.
            </p>
          </div>
          <img src={heroImg2} alt="" />
        </div>
       
      </div>
    </>
  );
}

export default Home

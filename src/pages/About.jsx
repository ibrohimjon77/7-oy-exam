import React from "react";
import aboutImg from "../../public/assets/images/image-about-our-mission-small.webp";
import bullet from "../../public/assets/images/icon-bullet-point.svg";
import aboutBeyond from "../../public/assets/images/image-about-beyond-the-plate-small.webp"
function About() {
  return (
    <>
      <div className="about container">
        <div>
          <span>Our mission</span>
          <h2>
            Help more people cook nourishing meals, <br /> more often.
          </h2>
          <p>
            Healthy Recipe Finder was created to prove that healthy <br />
            eating can be convenient, affordable, and genuinely <br />
            delicious.
          </p>
          <br />
          <p>
            We showcase quick, whole-food dishes that anyone can <br />
            master—no fancy equipment, no ultra-processed shortcuts <br /> —just
            honest ingredients and straightforward steps.
          </p>
        </div>
        <img src={aboutImg} alt="img" />
      </div>
      <div className="why container">
        <h2>Why we exist</h2>
        <ul>
          <li>
            <img src={bullet} alt="" />
            <div className="bullet">
              <h4>Cut through the noise.</h4>
              <p>
                The internet is bursting with recipes, yet most busy cooks still
                default to take- <br />
                away or packaged foods. We curate a tight collection of
                fool-proof dishes so you <br /> can skip the scrolling and start
                cooking.
              </p>
            </div>
          </li>
          <li>
            <img src={bullet} alt="" />
            <div className="bullet">
              <h4>Empower home kitchens.</h4>
              <p>
                When you control what goes into your meals, you control how you
                feel. Every <br /> recipe is built around unrefined ingredients
                and ready in about half an hour of <br /> active prep.
              </p>
            </div>
          </li>
          <li>
            <img src={bullet} alt="" />
            <div className="bullet">
              <h4>Make healthy look good.</h4>
              <p>
                High-resolution imagery shows you exactly what success looks
                like—because <br /> we eat with our eyes first, and confidence
                matters.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="why container">
        <h2>
          Our food <br /> philosophy
        </h2>
        <ul>
          <li>
            <img src={bullet} alt="" />
            <div className="bullet">
              <h4>Whole ingredients first.Cut through the noise.</h4>
              <p>
                Fresh produce, grains, legumes, herbs, and quality fats form the
                backbone of <br /> every recipe.
              </p>
            </div>
          </li>
          <li>
            <img src={bullet} alt="" />
            <div className="bullet">
              <h4>Flavor without compromise.</h4>
              <p>
                Spices, citrus, and natural sweetness replace excess salt,
                sugar, and additives.
              </p>
            </div>
          </li>
          <li>
            <img src={bullet} alt="" />
            <div className="bullet">
              <h4>Respect for time.</h4>
              <p>
                Weeknight meals should slot into real schedules; weekend cooking
                can be <br /> leisurely but never wasteful.
              </p>
            </div>
          </li>
          <li>
            <img src={bullet} alt="" />
            <div className="bullet">
              <h4>Sustainable choices.</h4>
              <p>
                Short ingredient lists cut down on food waste and carbon
                footprint, while plant- <br />
                forward dishes keep things planet-friendly.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="beyond container">
        <div>
          <h2> Beyond the plate</h2>
          <p>
            We believe food is a catalyst for <br /> community and well-being. By
            sharing <br /> approachable recipes, we hope to:
          </p>
          <ul>
            <li>Encourage family dinners and social <br /> cooking.</li>
            <li>Reduce reliance on single-use <br /> packaging and delivery waste.</li>
            <li>Spark curiosity about seasonal produce <br /> and local agriculture.</li>
          </ul>
        </div>
        <img src={aboutBeyond} alt="" />
      </div>
    </>
  );
}

export default About;

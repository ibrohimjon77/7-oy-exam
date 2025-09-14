import React from "react";
import instagram from "../../assets/images/icon-instagram.svg";
import tiktok from "../../assets/images/icon-tiktok.svg";
import bluesky from "../../assets/images/icon-bluesky.svg";
function Footer() {
  return (
    <div className="container">
      <div className="ready container">
        <h2> Ready to cook smarter?</h2>
        <span className="break">
          <br />
        </span>
        <p>Hit the button, pick a recipe, and get dinner on the table—fast.</p>
        <span className="break">
          <br />
        </span>
        <button className="btn">Browse recipes</button>
      </div>
      <footer className="footer  ">
        <p>Made with ❤️ and 🥑</p>

        <div className="instagram">
          <img src={instagram} alt="" />
          <img src={bluesky} alt="" />
          <img src={tiktok} alt="" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;

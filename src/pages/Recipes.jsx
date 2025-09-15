import React, { useState } from "react";
import { useFetch } from "../useFetch";
import serving from "../../public/assets/images/icon-servings.svg";
import cook from "../../public/assets/images/icon-cook-time.svg";
import prep from "../../public/assets/images/icon-prep-time.svg";
import { Link } from "react-router-dom";

function Recipes() {
  const [search, setSearch] = useState("");
  const [MaxPrep, SetPrep] = useState("");
  const [MaxCook, SetCook] = useState("");

  const filter = `?${MaxPrep ? `prepMinutes=${MaxPrep}` : ""}${
    MaxCook && MaxPrep ? "&" : ""
  }${MaxCook ? `cookMinutes=${MaxCook}` : ""}`;

  const { data, error, pending } = useFetch(
    "https://json-api.uz/api/project/recipes/recipes" + filter
  );

  const filteredData = data?.data.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="container recipes">
        <h1>Explore our simple, healthy recipes</h1>
        <p>
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste <br /> amazing. Use the search bar to find a recipe by name
          or ingredient, or simply scroll <br /> the list and let something
          delicious catch your eye.
        </p>
      </div>

      <div className="container filtered">
        <div className="selected">
          <select
            className="select1"
            value={MaxPrep}
            onChange={(e) => SetPrep(e.target.value)}
          >
            <option value="">Max Prep Time</option>
            <option value="0">0 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="20">20 minutes</option>
          </select>

          <select
            className="select2"
            value={MaxCook}
            onChange={(e) => SetCook(e.target.value)}
          >
            <option value="">Max Cook Time</option>
            <option value="0">0 minutes</option>
            <option value="2">2 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="20">20 minutes</option>
          </select>
        </div>

        <input
          type="text"
          placeholder=" Search by name or ingredient…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {pending && <h1 className="loading">Loading...</h1>}
      {error && <p className="loading">{error}</p>}

      <div className="cards container">
        {filteredData &&
          filteredData.map((e) => (
            <div key={e.id} className="card">
              <picture>
                {e.image?.small ? (
                  <>
                    <source srcSet={e.image.small} type="image/jpeg" />
                    <img
                      src={e.image.small}
                      alt={e.title}
                      className="card-img"
                    />
                  </>
                ) : (
                  <img
                    src="/placeholder.jpg"
                    alt="No image"
                    className="card-img"
                  />
                )}
              </picture>

              <h2>{e.title}</h2>
              <p>{e.overview}</p>

              <div className="halo">
                <div className="serving">
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src={serving}
                    alt=""
                  />
                  <p>Servings: {e.servings}</p>
                </div>
                <div className="prep">
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src={prep}
                    alt=""
                  />
                  <p>Prep: {e.prepMinutes}</p>
                </div>
              </div>

              <div className="cook">
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={cook}
                  alt=""
                />
                <p>Cook: {e.cookMinutes}</p>
              </div>

              <Link to={`/recipes/${e.id}`}>
                <button className="btn2">View Recipe</button>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default Recipes;

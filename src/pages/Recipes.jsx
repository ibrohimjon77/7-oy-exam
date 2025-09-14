import React, { useState } from "react";
import { useFetch } from "../useFetch";
import serving from "../../assets/images/icon-servings.svg";
import cook from "../../assets/images/icon-cook-time.svg";
import prep from "../../assets/images/icon-prep-time.svg";
import { Link } from "react-router-dom";

function Recipes() {
  const [search, setSearch] = useState("");
  const [MaxPrep, SetPrep] = useState("");
  const [MaxCook, SetCook] = useState("");

  // filter query string
  const filter = `?${MaxPrep ? `prepMinutes=${MaxPrep}` : ""}${
    MaxCook && MaxPrep ? "&" : ""
  }${MaxCook ? `cookMinutes=${MaxCook}` : ""}`;

  // avval useFetch chaqiriladi
  const { data, error, pending } = useFetch(
    "https://json-api.uz/api/project/recipes/recipes" + filter
  );

  // keyin search filter qilinadi
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

      {/* Filter UI */}
      <div className="container">
        <select defaultValue="" onChange={(e) => SetPrep(e.target.value)}>
          <option value="" disabled>
            Max Prep Time
          </option>
          <option value="0">0 minutes</option>
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>
        </select>

        <select defaultValue="" onChange={(e) => SetCook(e.target.value)}>
          <option value="" disabled>
            Max Cook Time
          </option>
          <option value="0">0 minutes</option>
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>
        </select>

        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Loading / Error */}
      {pending && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Cards */}
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
                <span>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src={serving}
                    alt=""
                  />
                  Servings: {e.servings}
                </span>
                <p>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src={prep}
                    alt=""
                  />
                  Prep: {e.prepMinutes}
                </p>
              </div>

              <p>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={cook}
                  alt=""
                />
                Cook: {e.cookMinutes}
              </p>

              <Link to={`/recipes/${e.id}`} >
                <button className="btn">View Recipe</button>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default Recipes;

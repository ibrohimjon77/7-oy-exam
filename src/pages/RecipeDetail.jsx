import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import serving from "../../assets/images/icon-servings.svg";
import cook from "../../assets/images/icon-cook-time.svg";
import prep from "../../assets/images/icon-prep-time.svg";

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const {
    data: recipeData,
    error,
    pending,
  } = useFetch(`https://json-api.uz/api/project/recipes/recipes/${id}`);

  
  const {
    data: allData,
    error: allError,
    pending: allPending,
  } = useFetch("https://json-api.uz/api/project/recipes/recipes");

  const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    const recipesArray = Array.isArray(allData) ? allData : allData?.data || [];
    if (recipesArray.length === 0) return;

    const filtered = recipesArray.filter((r) => r.id.toString() !== id);
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    setRandomRecipes(shuffled.slice(0, 3));
  }, [allData, id]);

  if (pending || allPending) return <h1 className="loading">Loading...</h1>;
  if (error || allError) return <p className="loading">{error || allError}</p>;

  const recipe = recipeData;

  return (
    <div className="container">
      <button className="btn" onClick={() => navigate(-1)}>
        Back
      </button>

      {recipe ? (
        <>
          <div className="detail">
        
            <div className="detail-title">
              <img
                src={recipe.image?.large.replace("./", "/")}
                alt={recipe.title}
                style={{ borderRadius: "10px" }}
              />
            </div>

            
            <div className="detail-body">
              <h1>{recipe.title}</h1>
              <p className="para">{recipe.overview}</p>

              <div className="halo">
                <div className="serving">
                  <img src={serving} alt="" />
                  <p>Servings: {recipe.servings}</p>
                </div>
                <div className="prep">
                  <img src={prep} alt="" />
                  <p>Prep: {recipe.prepMinutes} min</p>
                </div>
                <div className="cook">
                  <img src={cook} alt="" />
                  <p>Cook: {recipe.cookMinutes} min</p>
                </div>
              </div>

              {recipe.ingredients && (
                <>
                  <h2>Ingredients</h2>
                  <ul>
                    {recipe.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </>
              )}

              {recipe.instructions && (
                <>
                  <h2>Instructions</h2>
                  <ul>
                    {recipe.instructions.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {randomRecipes.length > 0 && (
            <div className="cards-section">
              <h2>You may also like</h2>
              <div className="cards">
                {randomRecipes.map((r) => (
                  <div key={r.id} className="card">
                    <img
                      src={r.image?.large.replace("./", "/")}
                      alt={r.title}
                    />
                    <h3>{r.title}</h3>
                    <p>{r.overview?.slice(0, 50)}...</p>
                    <button className="btn2">
                      View Recipe
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Recipe not found</p>
      )}
    </div>
  );
}

export default RecipeDetail;

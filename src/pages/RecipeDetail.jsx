import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../useFetch";

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, pending } = useFetch(
    `https://json-api.uz/api/project/recipes/recipes/${id}`
  );

  if (pending) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const recipe = data;

  return (
    <div className="container">
      <button className="btn" onClick={() => navigate(-1)}>
        Back
      </button>

      {recipe ? (
        <>
          <div className="detail">
            {/* 1-div: title + img */}
            <div className="detail-title">
              <img
                src={recipe.image?.large.replace("./", "/")}
                alt={recipe.title}
                style={{ borderRadius: "10px" }}
              />
            </div>

            {/* 2-div: qolgan hamma narsa */}
            <div className="detail-body">
              <h1>{recipe.title}</h1>
              <p>{recipe.overview}</p>

              <h3>Servings: {recipe.servings}</h3>
              <p>Prep time: {recipe.prepMinutes} min</p>
              <p>Cook time: {recipe.cookMinutes} min</p>

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
        </>
      ) : (
        <p>Recipe not found</p>
      )}
    </div>
  );
}

export default RecipeDetail;

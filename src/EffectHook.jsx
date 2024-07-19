import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EffectHook = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/recipes");
      const result = await response.json();
      setRecipes(result.recipes);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-center">Recipies</h1>
        {recipes.length > 0 &&
          recipes.map((recipe) => (
            <div className="col-md-4" key={recipe.id}>
              <div className="card mb-4 shadow-sm">
                <img
                  src={recipe.imageUrl}
                  className="card-img-top"
                  alt={recipe.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text">{recipe.description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EffectHook;

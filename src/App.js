import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  // to view the api in env
  // console.log(process.env)

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_FOODIE_APP__URL}?q=${query}&app_id=${process.env.REACT_APP_FOODIE_APP__ID}&app_key=${process.env.REACT_APP_FOODIE_APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => { 
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search__form">
        <input
          className="search__bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />

        <button className="search__button" type="submit">
          Search
        </button>
      </form>

      <div className="recipes">
        {recipes.map((recipes) => (
          <Recipe
            key={recipes.recipe.lebel}
            title={recipes.recipe.label}
            cuisineType={recipes.recipe.cuisineType}
            calories={recipes.recipe.calories}
            healthLabels={recipes.recipe.healthLabels}
            cautions={recipes.recipe.cautions}
            image={recipes.recipe.image}
            ingredients={recipes.recipe.ingredients}
            foodCategory={recipes.recipe.ingredients.foodCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

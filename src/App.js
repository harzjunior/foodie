import React, { useEffect, useState } from 'react';
import  './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP__ID = 'befffe72';
  const APP__KEY = 'ef72bd74f6daecceee6f0db23c0c404e';

  const [recipes, setRecipes] = useState([]); 
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState ('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);  


  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP__ID}&app_key=${APP__KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const  updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search__form">
        <input 
        className="search__bar" 
        type="text" 
        value={search} 
        onChange={updateSearch}
        /> 
        <button 
        className="search__button" 
        type="submit"
        >Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipes => (
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
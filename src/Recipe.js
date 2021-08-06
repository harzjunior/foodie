import React from "react";
import Style from "./recipes.module.css";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  cuisineType,
  healthLabels,
  cautions,
}) => {
  return (
    <div className={Style.main}>
      <div className={Style.main__title__content}>
        <h1 className={Style.main__title}>{title}</h1>
      </div>
      <div className={Style.recipe__image}>
        <img src={image} alt={title} className={Style.recipe__imageContent} />
      </div>
      <div className={Style.main__content}>
        <div className={Style.main__cuisineType}>
          <p className={Style.cuisin}>Cuisin</p>
          <h3>{cuisineType}</h3>
        </div>
        <div>
          <ul className={Style.recipe__list}>
            <p className={Style.ingredient}>Ingredients</p>
            {ingredients.map((ingredients) => (
              <li className={Style.recipe__ingredient}>{ingredients.text}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={Style.recipe__calory}>
        <h2 className={Style.recipe__caloryContent}>Total Calories:</h2>
        <em>{Math.round(calories)}</em>
      </div>
    </div>
  );
};

export default Recipe;

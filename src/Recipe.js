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

      <div className={Style.main__content}>
        <div className={Style.main__leftSection}>
          <div className={Style.main__leftSectionContent}>
            <div className={Style.recipe__image}>
              <img
                src={image}
                alt={title}
                className={Style.recipe__imageContent}
              />
            </div>

            <div className={Style.recipe__caution}>
              <p className={Style.caution}>Caution</p>
              {cautions.map((cautions) => (
                <li className={Style.recipe__cautionContent}>{cautions}</li>
              ))}
            </div>
          </div>
          <div className={Style.main__cuisineType}>
            <p className={Style.cuisin}>Cuisin Type</p>
            <h2>{cuisineType}</h2>
          </div>
          <div>
            <ul className={Style.recipe__list}>
              {ingredients.map((ingredients) => (
                <li className={Style.recipe__ingredient}>{ingredients.text}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={Style.main__righSection}>
          <div className={Style.main__rightSectionContent}>
            {healthLabels.map((healthLabels) => (
              <li className={Style.recipe__healthLabels}>{healthLabels}</li>
            ))}
          </div>
        </div>
      </div>

      <div className={Style.recipe__calory}>
        <h3 className={Style.recipe__caloryContent}>
          Total Calories: {calories}
        </h3>
      </div>
    </div>
  );
};

export default Recipe;

// modules
import React from 'react';

// components
import Button from '../../Button/Button';

// scss
import './Thumbnail.scss';

const Thumbnail = ({ recipe }) => {

    const truncateString = (str, num) => {
        if (str.length <= num) {
            return str;
        }
        return `${str.slice(0, num)}...`;
    }

    return(
        <div className="Thumbnail">
            <div className="ThumbnailImage">
                <img src={recipe.recipe_image} alt={`Image de la recette de ${recipe.recipe_name}`} />
            </div>
            <div className="ThumbnailText">
                <h2>{recipe.recipe_name}</h2>
                <p>{truncateString(recipe.recipe_text, 200)}</p>
                <Button text='Voir la recette' />
            </div>
        </div>
    )
}
export default Thumbnail;
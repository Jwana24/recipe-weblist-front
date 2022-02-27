// modules
import React from 'react';

// components
import Search from '../../../Icons/search-blue.svg';
import Delete from '../../../Icons/trash-red.svg';

// scss
import './Thumbnail.scss';

const Thumbnail = ({ recipe }) => {

    const truncateString = (str, num) => {
        console.log(str);
        if (str.length <= num) {
            return str;
        }
        return `${str.slice(0, num)}...`;
    }

    return(
        <div className="Thumbnail">

            <div className='IconsOverlay'>
                <div className='IconVisualize'>
                    <div>
                        <img src={Search} />
                    </div>
                    <p>Voir la recette</p>
                </div>
                <div className='IconDelete'>
                    <div>
                        <img src={Delete} />
                    </div>
                    <p>Supprimer la recette</p>
                </div>
            </div>

            <div className="Overlay"></div>

            <div className="ThumbnailImage">
                <img src={recipe.recipe_image} alt={`Recette de ${recipe.recipe_name}`} />
            </div>

            <div className="ThumbnailText">
                <h2>{recipe.recipe_name}</h2>
                <p>{truncateString(recipe.recipe_text, 200)}</p>
                {/* <Button text='Voir la recette' /> */}
            </div>
        </div>
    )
}
export default Thumbnail;
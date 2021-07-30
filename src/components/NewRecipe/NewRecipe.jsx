// modules
import React from 'react';

// components
import FormRecipe from './../FormRecipe/FormRecipe';
import Picto from './../../img/add.png';

// scss
import './NewRecipe.scss';

const NewRecipe = () => {
    return(
        <div className="NewRecipe">
            <div className="Container">
                <div className="HeaderRecipe">
                    <div className="HeaderRecipeTitle">
                        <img src={Picto} />
                        <h1>Créer une nouvelle recette</h1>
                    </div>
                </div>
                <div className="BodyList">
                    <FormRecipe />
                </div>
            </div>
        </div>
    )
}
export default NewRecipe;
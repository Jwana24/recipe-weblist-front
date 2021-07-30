// modules
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

// components
import Picto from '../../img/open-book.png';
import Button from '../Button/Button';
import Thumbnail from './Thumbnail/Thumbnail';

// scss
import './RecipeList.scss';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const history = useHistory();

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_API}/recipes`)
        .then(res => res.data)
        .then(data => {
            setRecipes(data);
        })
    }, []);

    return(
        <div className="List">
            <div className="Container">
                <div className="HeaderList">
                    <div className="HeaderListTitle">
                        <img src={Picto} />
                        <h1>Ma liste</h1>
                    </div>
                    <div className="HeaderListBtn">
                        <Button
                            link={() => history.push('/nouvelle-recette')}
                            text='Nouvelle recette'
                        />
                    </div>
                </div>
                <div className="BodyList">
                    {recipes && recipes.map(recipe => {
                        return (
                            <Thumbnail
                                recipe={recipe}
                                key={recipe.recipe_id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default RecipeList;
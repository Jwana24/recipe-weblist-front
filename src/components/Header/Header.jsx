// modules
import React from 'react';
import { Link } from 'react-router-dom';

// components
import RecipeList from './../RecipeList/RecipeList';
import Logo from '../../img/recipe-book.png';

// scss
import './Header.scss';

const Header = () => {
    return(
        <div className="Header">
            <div className="Container">
                <div className="ContainerLogo">
                    <img src={Logo} alt="Logo recette" />
                    Mon e-book de recettes
                </div>
                <div className="ContainerLinks">
                    <Link to="/nouvelle-recette">Nouvelle recette</Link>
                    <Link to="/">Liste de recettes</Link>
                </div>
            </div>
        </div>
    )
}
export default Header;
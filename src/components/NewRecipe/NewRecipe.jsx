// modules
import React from 'react';
import { useForm } from "react-hook-form";
import Axios from 'axios';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

// components
import FormRecipe from './../FormRecipe/FormRecipe';
import Picto from './../../img/add.png';

// scss
import './NewRecipe.scss';

const NewRecipe = () => {
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm();

    const onSubmit = data => {     
        data.text = draftToHtml(convertToRaw(data.text.getCurrentContent()))

        Axios.post(`${process.env.REACT_APP_API}/recipes`, data)
        .then(res => res.data)
        .then(data => data, reset())
        .catch(error => {console.log(error.data)});
    }

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
                    <FormRecipe
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                        textButton='Ajouter'
                        register={register}
                        control={control}
                    />
                </div>
            </div>
        </div>
    )
}
export default NewRecipe;
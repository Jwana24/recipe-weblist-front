// modules
import React, { useState } from 'react';
import Axios from 'axios';

// components
import Button from '../Button/Button';

// scss
import './FormRecipe.scss';

const FormRecipe = () => {
    const [formRecipe, setFormRecipe] = useState({
        image: '',
        name: '',
        time: '',
        text: ''
    });

    const handleChangeInputs = event => {
        const { name, value } = event.target;
        setFormRecipe({ ...formRecipe, [name]: value });
    };

    const handlePostForm = (event) => {
        event.preventDefault();
        Axios.post(`${process.env.REACT_APP_API}/recipes`, {
            image: formRecipe.image,
            name: formRecipe.name,
            time: formRecipe.time,
            text: formRecipe.text
        })
        .then(res => res.data)
        .then(data => setFormRecipe(data))
    }

    console.log(formRecipe);

    return(
        <div className="FormRecipe">
            <form onSubmit={handlePostForm}>
                <div className="ContainerForm">
                    <div className="FormInputs">
                        <label htmlFor="image">Image</label>
                        <input onChange={handleChangeInputs} type="text" id="image" name="image" value={formRecipe.image || ''} />
                    </div>

                    <div className="GroupInputs">
                        <div className="FormInputs InputsTime">
                            <label htmlFor="time">Temps de préparation</label>
                            <input onChange={handleChangeInputs} type="time" id="time" name="time" value={formRecipe.time || ''} />
                        </div>
                        <div className="FormInputs InputsTitle">
                            <label htmlFor="title">Titre</label>
                            <input onChange={handleChangeInputs} type="text" id="name" name="name" value={formRecipe.name || ''} />
                        </div>
                    </div>

                    <div className="FormInputs">
                        <label htmlFor="text">Texte</label>
                        <textarea onChange={handleChangeInputs} name="text" id="text" cols="30" rows="10" value={formRecipe.text || ''}></textarea>
                    </div>

                    <Button
                        text='Ajouter'
                    />
                </div>

            </form>
        </div>
    )
}
export default FormRecipe;
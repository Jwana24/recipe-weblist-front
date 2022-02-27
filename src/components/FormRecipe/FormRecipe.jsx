// modules
import React from 'react';
import { Controller } from 'react-hook-form';

// components
import Button from '../Button/Button';
import Editor from '../MyEditor/MyEditor';

// scss
import './FormRecipe.scss';

const FormRecipe = ({ handleSubmit, onSubmit, register, textButton, control }) => {
    return(
        <div className="FormRecipe">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="ContainerForm">
                    <div className="FormInputs">
                        <label htmlFor="image">Image</label>
                        <input {...register("image")} />
                    </div>

                    <div className="GroupInputs">
                        <div className="FormInputs InputsTime">
                            <label htmlFor="time">Temps de préparation</label>
                            <input type="time" {...register("time")} />
                        </div>
                        <div className="FormInputs InputsTitle">
                            <label htmlFor="title">Titre</label>
                            <input {...register("name")} />
                        </div>
                    </div>

                    {/* <div className="FormInputs">
                        <label htmlFor="text">Texte</label>
                        <textarea cols="30" rows="10" {...register("text")}></textarea>
                    </div> */}

                    <div className="FormInputs">
                        <label htmlFor="text">Texte</label>
                        {/* <Editor {...register("text")} /> */}
                        <Controller
                            render={({ field: { value, onChange, ref } }) => {
                                return (
                                  <>
                                    <Editor
                                      ref={ref}
                                      editorState={value}
                                      onChange={onChange}
                                    />
                                  </>
                                );
                              }}
                            name="text"
                            control={control}
                        />
                    </div>

                    <div className="FormInputs">
                        <label htmlFor="text">Auteur</label>
                        <input {...register("author")} />
                    </div>

                    <Button
                        text={textButton}
                        type='submit'
                    />
                </div>

            </form>
        </div>
    )
}
export default FormRecipe;
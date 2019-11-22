import React from 'react';
import '../styles/Recipe.css';

const Recipe = ({title, calories, image, ingredients, carbs, fats, proteins}) => {
    return (
        <div className='recipe d-flex flex-column justify-content-around align-items-center'>
            <h1 className='text-capitalize'>{title}</h1>
            <ol>
                {
                    ingredients.map( (ingredient,index) => (
                        <li key={index}>{ingredient.text}</li>
                ))
                }
            </ol>
            <ul>
                <li>Calories: {calories} kcal</li>
                <li>Carbs: {carbs} g</li>
                <li>Fats: {fats} g</li>
                <li>Proteins: {proteins} g</li>
            </ul>
            <img className='image' src={image} alt=''></img>
        </div>
    );
};

export default Recipe;
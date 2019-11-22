import React, {useEffect, useState} from 'react';
import '../styles/Search.css';
import Recipe from './Recipe';

const Search = () => {
    
  const APP_ID = '85274a6a';
  const APP_KEY = 'b0930f4d03f5cef1693dc678b7d5f5fa';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return(
    
    <div className='App'>
    <form onSubmit={getSearch} className='search-form justify-content-center row'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} placeholder='What are you in the mood for? i.e. Chicken'/>
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <div className='row justify-content-center'>
      {
        recipes.map( recipe => (
          <Recipe 
            className='recipe-container d-flex flex-wrap justify-content-around align-items-center'
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={Math.round(recipe.recipe.calories)} 
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients}
            carbs={Math.ceil(recipe.recipe.totalNutrients.CHOCDF.quantity * 10) / 10}
            fats={Math.ceil(recipe.recipe.totalNutrients.FAT.quantity * 10) / 10}
            proteins={Math.ceil(recipe.recipe.totalNutrients.PROCNT.quantity * 10) / 10}
          />
        ))
        }
      </div>
    </div>

  )
}

export default Search;

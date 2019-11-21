import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
import './Home.css';
import Recipe from './Recipe';
import saveMoney from '../images/saveMoney.jpg';
import stayHealthy from '../images/stayHealthy.jpg';
import stayConnected from '../images/stayConnected.jpg';

const Home = () => {
    
  const APP_ID = '85274a6a';
  const APP_KEY = 'b0930f4d03f5cef1693dc678b7d5f5fa';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const [toRecipes, setToRecipes] = useState(false);

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
    setSearch(e.target.value)
    setToRecipes(true)
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    if (toRecipes === true) {
        return <Redirect to='/recipes' />
    }
  };

  return(
    // <div className='App'>
    //   <form onSubmit={getSearch} className='search-form'>
    //     <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
    //     <button className='search-button' type='submit'>
    //       Search
    //     </button>
    //   </form>
    //   <div className='recipes'>
    //   {
    //     recipes.map( recipe => (
    //       <Recipe
    //         key={recipe.recipe.label}
    //         title={recipe.recipe.label} 
    //         calories={recipe.recipe.calories} 
    //         image={recipe.recipe.image} 
    //         ingredients={recipe.recipe.ingredients}
    //       />
    //     ))
    //     }
    //   </div>
    // </div>
    <div className='home container'>
        <form className='search-form row' onSubmit={getSearch}>
            <div className='form-group justify-content-center'>
                <label for='search' className='font-weight-bolder text-capitalize'>Find recipes you will love</label>
                <input type='text' className='form-control' placeholder='What are you in the mood for?' value={search} onChange={updateSearch} />
            </div>
        </form>

        <h1 className='row justify-content-center'>Your food. Your choice.</h1>

        <div className='row align-items-center text-center'>
            <div className='col-6'>
                <h1>Save Money</h1>
                <h4>No need to tip when you cook yourself.</h4>
            </div>
            <div className='col-6'>
                <img src={saveMoney} alt='Save Money Logo' className='homeLogo' />
            </div>
        </div>

        <hr />

        <div className='row align-items-center text-center'>
            <div className='col-6'>
                <img src={stayHealthy} alt='Stay Healthy Logo' className='homeLogo' />
            </div>
            <div className='col-6'>
                <h1>Stay Healthy</h1>
                <h4>Take control of what you put into your body.</h4>
            </div>
        </div>

        <hr />

        <div className='row align-items-center text-center'>
            <div className='col-6'>
                <h1>Stay Connected</h1>
                <h4>Spend more time with loved ones by cooking tonight.</h4>
            </div>
            <div className='col-6'>
                <img src={stayConnected} alt='Stay Connected Logo' className='homeLogo' />
            </div>
        </div>
        {/* <Redirect from='/' to="/recipes" /> */}
        {/* <div className='recipes'>
            {
            recipes.map( recipe => (
                <Recipe
                    key={recipe.recipe.label}
                    title={recipe.recipe.label} 
                    calories={recipe.recipe.calories} 
                    image={recipe.recipe.image} 
                    ingredients={recipe.recipe.ingredients}
                />
            ))
            }
        </div> */}

    </div>


  )
}

export default Home;

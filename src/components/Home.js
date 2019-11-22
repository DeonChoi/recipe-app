import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import saveMoney from '../images/saveMoney.jpg';
import stayHealthy from '../images/stayHealthy.jpg';
import stayConnected from '../images/stayConnected.jpg';

const Home = () => {
    

  return(

    <div className='home container'>

        <div className='search-container justify-content-center align-items-center flex-column row'>
            <p for='search' className='font-weight-bolder text-capitalize h1'>Find recipes you will love</p>
            <Link className='search-button h3' to={`/recipes`}>Start Cooking</Link>      
            </div>            

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
      
    </div>


  )
}

export default Home;

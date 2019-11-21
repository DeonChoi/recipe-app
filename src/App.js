import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Recipe from './components/Recipe';
import './App.css';

const App = () => (
    <Router>
        <div>
            <nav className='navbar navbar-light'>
                <div className='navbar navbar-expand'>
                    <Link className='navbar-brand' to={`/`}>Delish</Link>
                    <Link className='nav-link text-dark' to={`/`}>Home</Link>
                    <Link className='nav-link text-dark' to={`/recipes`}>Recipes</Link>
                </div>
            
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="i.e Chicken" aria-label="Search" />
                </form>
            </nav>

            <main>
                <Route exact path="/" component={Home} />
                <Route path="/recipes" component={Recipe} />
                {/* <Redirect from='/' to="/recipes" /> */}
            </main>
        </div>
    </Router>
)

export default App;
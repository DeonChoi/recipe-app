import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import './App.css';

const App = () => (
    <Router>
        <div>
            <nav className='navbar navbar-light justify-content-between sticky-top bg-white'>
                <div className='navbar'>
                    <Link className='navbar-brand' to={`/`}>Delish</Link>
                </div>
                <div className='navbar'>
                    <Link className='nav-link text-dark' to={`/`}>Home</Link>
                    <Link className='nav-link text-dark' to={`/recipes`}>Recipes</Link>
                </div>
            </nav>

            <main>
                <Route exact path="/" component={Home} />
                <Route path="/recipes" component={Search} />
            </main>
        </div>
    </Router>
)

export default App;
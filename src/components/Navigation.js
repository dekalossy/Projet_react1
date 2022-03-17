import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';



const Navigation = () => {
    return (
        <div className='Navigation'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">       
                        <NavLink to='/' className="navbar-brand">
                                   React
                        </NavLink>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link" >
                                    Accueil
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/a_propos' className="nav-link" >
                                    À propos
                                    </NavLink>
                                </li>    
                            </ul>
                        
                        </div>
                </div>
               
            </nav>
            <Logo/>
            
        </div>
    );
};

export default Navigation;
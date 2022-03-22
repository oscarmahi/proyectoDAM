// se pone con imr
import React from 'react';
import { Link } from 'react-router-dom';

//se pone con sfc
const Header = () => {
    return ( 
        <div className="navbar is-primary">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src="logo.jpeg" alt="logo"></img>
                </Link>
            </div>
        </div>
     );
}
 
export default Header;

export default appTitle => {
	return `import React from 'react';
import { Link } from 'react-router-dom';
    
import './style.css';
    
const Navbar = () => {
    return (
        <nav className="poncey-nav">
            <div className="nav-title">
                <Link to="/">${appTitle}</Link>
            </div>
            <div className="nav-links">
                <Link to="/deployment">Deployment</Link>
    
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    React
                </a>
            </div>
        </nav>
    );
};
    
export default Navbar;
    `;
};

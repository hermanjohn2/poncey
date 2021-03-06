export default appTitle => {
	return `/* ${appTitle} Navbar Style Sheet */
.poncey-nav {
    background-color: #e0d0a2;
    height: 3rem;
    width: 100%;
    position: relative;
}
    
.nav-title .nav-links {
    color: white;
}
    
.nav-title {
    display: inline-block;
    padding: 10px;
    font-size: 1.5rem;
}
    
.nav-links {
    display: inline;
    padding: 10px;
    font-size: 1.25rem;
    float: right;
}
    
.nav-links a {
    margin: 10px;
}
    `;
};

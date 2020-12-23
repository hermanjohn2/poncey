const renderCSS = appTitle => {
	return `/* ${appTitle} Style Sheet */
body {
    margin: 0px;
    background-color: #adadad;
    font-family: monospace;
}
        
a {
    color: #000;
}
    
a:link {
    text-decoration: none;
}
    
a:hover {
    opacity: 0.75;
}
    
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
    
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
    
.poncey-content {
    width: 60%;
    margin: 5% 20% 0 20%;
    padding-bottom: 2.5rem;
    font-size: 1.25rem;
}
    
.poncey-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    background-color: #ebebeb;
}
    
.footer-text {
    margin: 10px;
    text-align: center;
    color: #4d4d4d;
    font-size: 1rem;
}
    `;
};

export default renderCSS;

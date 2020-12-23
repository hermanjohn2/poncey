export default appTitle => {
	return `/* ${appTitle} Root Style Sheet */
body {
    margin: 0;
    font-family: monospace;
    background-color: #adadad;
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
    `;
};

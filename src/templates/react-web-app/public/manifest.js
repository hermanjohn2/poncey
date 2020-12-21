export default appTitle => {
	return `{
    "short_name": "${appTitle}",
    "name": "Generated Poncey App",
    "icons": [],
    "start_url": ".",
    "display": "standalone",
    "theme_color": "#000000",
    "background_color": "#ffffff"
    }      
    `;
};

export default appTitle => {
	return `{
    "name": "${appTitle}",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "react": "^17.0.1",
        "react-dom": "^17.0.1",
        "react-router-dom": "^5.2.0",
        "react-scripts": "4.0.1"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
        "react-app"
        ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
        ],
        "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
        ]
    }
}
      `;
};

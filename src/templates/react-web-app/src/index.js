export default appTitle => {
	return `import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Renders App.js for ${appTitle}
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
    `;
};

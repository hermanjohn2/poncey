export default appTitle => {
	return `import './App.css';

const App = () => {
    return (
        <div>
            <header>
                <h1>${appTitle}</h1>
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    React Docs
                </a>
            </header>
        </div>
    );
};
    
export default App;
    `;
};

import fs from 'fs';

const generateReact = appTitle => {
	try {
		// Create directories
		fs.mkdirSync(`./${appTitle}`);
		fs.mkdirSync(`./${appTitle}/public`);
		fs.mkdirSync(`./${appTitle}/src`);

		// Write root files
		fs.writeFileSync(`./${appTitle}/.gitignore`, '');
		fs.writeFileSync(`./${appTitle}/package.json`, '');
		fs.writeFileSync(`./${appTitle}/README.md`, '');
		fs.writeFileSync(`./${appTitle}/yarn.lock`, '');

		// Write nested public files
		fs.writeFileSync(`./${appTitle}/public/index.html`, '');
		fs.writeFileSync(`./${appTitle}/public/manifest.json`, '');

		// Write nested src files
		fs.writeFileSync(`./${appTitle}/src/App.js`, '');
		fs.writeFileSync(`./${appTitle}/src/App.css`, '');
		fs.writeFileSync(`./${appTitle}/src/index.js`, '');
		fs.writeFileSync(`./${appTitle}/src/index.css`, '');
	} catch (error) {
		console.log('');
		console.log('Something went wrong. Please try again.', error);
		console.log('');
	}
};

export default generateReact;

import fs from 'fs';

import gitIgnoreTemp from '../templates/react-web-app/gitIgnore';
import packageJsonTemp from '../templates/react-web-app/package';
import markdownTemp from '../templates/react-web-app/markdown';
import htmlTemp from '../templates/react-web-app/public/html';
import manifestTemp from '../templates/react-web-app/public/manifest';
import appTemp from '../templates/react-web-app/src/app';
import indexTemp from '../templates/react-web-app/src/index';

const generateReact = appTitle => {
	try {
		// Create directories
		fs.mkdirSync(`./${appTitle}`);
		fs.mkdirSync(`./${appTitle}/public`);
		fs.mkdirSync(`./${appTitle}/src`);

		// Write root files
		fs.writeFileSync(`./${appTitle}/.gitignore`, gitIgnoreTemp());
		fs.writeFileSync(`./${appTitle}/package.json`, packageJsonTemp(appTitle));
		fs.writeFileSync(`./${appTitle}/README.md`, markdownTemp(appTitle));
		fs.writeFileSync(`./${appTitle}/yarn.lock`, '');

		// Write nested public files
		fs.writeFileSync(`./${appTitle}/public/index.html`, htmlTemp(appTitle));
		fs.writeFileSync(`./${appTitle}/public/manifest.json`, manifestTemp(appTitle));

		// Write nested src files
		fs.writeFileSync(`./${appTitle}/src/App.js`, appTemp(appTitle));
		fs.writeFileSync(`./${appTitle}/src/App.css`, '');
		fs.writeFileSync(`./${appTitle}/src/index.js`, indexTemp());
		fs.writeFileSync(`./${appTitle}/src/index.css`, '');

		// Console Messages
		console.log('');
		console.log(`${appTitle} successfully created!`);
		console.log('');
		console.log('Next Steps:');
		console.log('');
		console.log('1. In your terminal, run the following commands:');
		console.log('');
		console.log(`cd ${appTitle}`);
		console.log('npm install');
		console.log('npm start');
		console.log('');
		console.log(`2. Visit https://localhost:3000 in your browser`);
		console.log('3. Make your React edits inside of src/App.js');
		console.log('');
		process.exit();
	} catch (error) {
		console.log('');
		console.log('Something went wrong. Please try again.', error);
		console.log('');
	}
};

export default generateReact;

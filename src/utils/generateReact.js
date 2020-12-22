import fs from 'fs';

// Root Temps
import gitIgnoreTemp from '../templates/react-web-app/gitIgnore';
import packageJsonTemp from '../templates/react-web-app/package';
import markdownTemp from '../templates/react-web-app/markdown';

// Public Temps
import htmlTemp from '../templates/react-web-app/public/html';
import manifestTemp from '../templates/react-web-app/public/manifest';

// src Temps
import appTemp from '../templates/react-web-app/src/app';
import indexTemp from '../templates/react-web-app/src/index';
import indexCssTemp from '../templates/react-web-app/src/index-style';

// src/components/Navbar Temps
import navbarIndexTemp from '../templates/react-web-app/src/components/Navbar/navbar';
import navbarStyleTemp from '../templates/react-web-app/src/components/Navbar/style';

// src/pages/Home Temps
import homeIndexTemp from '../templates/react-web-app/src/pages/Home/index';
import homeStyleTemp from '../templates/react-web-app/src/pages/Home/style';

// src/pages/Home Temps
import deployIndexTemp from '../templates/react-web-app/src/pages/Deployment/index';
import deployStyleTemp from '../templates/react-web-app/src/pages/Deployment/style';

const generateReact = appTitle => {
	try {
		// Create directories
		fs.mkdirSync(`./${appTitle}`);
		fs.mkdirSync(`./${appTitle}/public`);
		fs.mkdirSync(`./${appTitle}/src`);
		fs.mkdirSync(`./${appTitle}/src/components`);
		fs.mkdirSync(`./${appTitle}/src/components/Navbar`);
		fs.mkdirSync(`./${appTitle}/src/pages`);
		fs.mkdirSync(`./${appTitle}/src/pages/Home`);
		fs.mkdirSync(`./${appTitle}/src/pages/Deployment`);

		// Write root files
		fs.writeFileSync(`./${appTitle}/.gitignore`, gitIgnoreTemp());
		fs.writeFileSync(`./${appTitle}/package.json`, packageJsonTemp(appTitle));
		fs.writeFileSync(`./${appTitle}/README.md`, markdownTemp(appTitle));

		// Write nested public files
		fs.writeFileSync(`./${appTitle}/public/index.html`, htmlTemp(appTitle));
		fs.writeFileSync(`./${appTitle}/public/manifest.json`, manifestTemp(appTitle));

		// Write nested src files
		fs.writeFileSync(`./${appTitle}/src/App.js`, appTemp());
		fs.writeFileSync(`./${appTitle}/src/index.js`, indexTemp());
		fs.writeFileSync(`./${appTitle}/src/index.css`, indexCssTemp());

		// Write nested src/components/Navbar files
		fs.writeFileSync(`./${appTitle}/src/components/Navbar/index.js`, navbarIndexTemp(appTitle));
		fs.writeFileSync(`./${appTitle}/src/components/Navbar/style.css`, navbarStyleTemp());

		// Write nested src/pages/Home files
		fs.writeFileSync(`./${appTitle}/src/pages/Home/index.js`, homeIndexTemp(appTitle));
		fs.writeFileSync(`./${appTitle}/src/pages/Home/style.css`, homeStyleTemp());

		// Write nested src/pages/Deployment files
		fs.writeFileSync(`./${appTitle}/src/pages/Deployment/index.js`, deployIndexTemp());
		fs.writeFileSync(`./${appTitle}/src/pages/Deployment/style.css`, deployStyleTemp());

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

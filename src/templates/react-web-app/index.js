// Root Temps
import gitIgnoreTemp from './gitIgnore';
import packageJsonTemp from './package';
import markdownTemp from './markdown';

// Public Temps
import htmlTemp from './public/html';
import manifestTemp from './public/manifest';

// src Temps
import appTemp from './src/app';
import indexTemp from './src/index';
import indexCssTemp from './src/index-style';

// src/components/Navbar Temps
import navbarIndexTemp from './src/components/Navbar/navbar';
import navbarStyleTemp from './src/components/Navbar/style';

// src/pages/Home Temps
import homeIndexTemp from './src/pages/Home/index';
import homeStyleTemp from './src/pages/Home/style';

// src/pages/Home Temps
import deployIndexTemp from './src/pages/Deployment/index';
import deployStyleTemp from './src/pages/Deployment/style';

const reactApp = {
	directories: [
		{
			dir_name: 'root',
			path: appTitle => `./${appTitle}`
		},
		{
			dir_name: 'public',
			path: appTitle => `./${appTitle}/public`
		},
		{
			dir_name: 'src',
			path: appTitle => `./${appTitle}/src`
		},
		{
			dir_name: 'components',
			path: appTitle => `./${appTitle}/src/components`
		},
		{
			dir_name: 'pages',
			path: appTitle => `./${appTitle}/src/pages`
		},
		{
			dir_name: 'components/Navbar',
			path: appTitle => `./${appTitle}/src/components/Navbar`
		},
		{
			dir_name: 'pages/Home',
			path: appTitle => `./${appTitle}/src/pages/Home`
		},
		{
			dir_name: 'pages/Deployment',
			path: appTitle => `./${appTitle}/src/pages/Deployment`
		}
	],
	files: [
		// Root files -----------------------------------------
		{
			file: 'package.json',
			path: appTitle => `./${appTitle}/package.json`,
			temp: appTitle => packageJsonTemp(appTitle)
		},
		{
			file: 'README.md',
			path: appTitle => `./${appTitle}/README.md`,
			temp: appTitle => markdownTemp(appTitle)
		},
		{
			file: '.gitignore',
			path: appTitle => `./${appTitle}/.gitignore`,
			temp: appTitle => gitIgnoreTemp(appTitle)
		},
		// Public files ---------------------------------------
		{
			file: 'index.html',
			path: appTitle => `./${appTitle}/public/index.html`,
			temp: appTitle => htmlTemp(appTitle)
		},
		{
			file: 'manifest.json',
			path: appTitle => `./${appTitle}/public/manifest.json`,
			temp: appTitle => manifestTemp(appTitle)
		},
		// src root files -------------------------------------
		{
			file: 'App.js',
			path: appTitle => `./${appTitle}/src/App.js`,
			temp: appTitle => appTemp(appTitle)
		},
		{
			file: 'src/index.js',
			path: appTitle => `./${appTitle}/src/index.js`,
			temp: appTitle => indexTemp(appTitle)
		},
		{
			file: 'index.css',
			path: appTitle => `./${appTitle}/src/index.css`,
			temp: appTitle => indexCssTemp(appTitle)
		},
		// Navbar component files -----------------------------
		{
			file: 'Navbar/index.js',
			path: appTitle => `./${appTitle}/src/components/Navbar/index.js`,
			temp: appTitle => navbarIndexTemp(appTitle)
		},
		{
			file: 'Navbar/style.css',
			path: appTitle => `./${appTitle}/src/components/Navbar/style.css`,
			temp: appTitle => navbarStyleTemp(appTitle)
		},
		// Home page files -----------------------------------
		{
			file: 'Home/index.js',
			path: appTitle => `./${appTitle}/src/pages/Home/index.js`,
			temp: appTitle => homeIndexTemp(appTitle)
		},
		{
			file: 'Home/style.css',
			path: appTitle => `./${appTitle}/src/pages/Home/style.css`,
			temp: appTitle => homeStyleTemp(appTitle)
		},
		// Deployment page files
		{
			file: 'Deployment/index.js',
			path: appTitle => `./${appTitle}/src/pages/Deployment/index.js`,
			temp: appTitle => deployIndexTemp(appTitle)
		},
		{
			file: 'Deployment/style.css',
			path: appTitle => `./${appTitle}/src/pages/Deployment/style.css`,
			temp: appTitle => deployStyleTemp(appTitle)
		}
	]
};

export default reactApp;

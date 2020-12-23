import indexTemp from './home';
import styleTemp from './style';

const staticSite = {
	directories: [
		{
			dir_name: 'root',
			path: appTitle => `./${appTitle}`
		},
		{
			dir_name: 'assets',
			path: appTitle => `./${appTitle}/assets`
		}
	],
	files: [
		{
			file: 'index.html',
			path: appTitle => `./${appTitle}/index.html`,
			temp: appTitle => indexTemp(appTitle)
		},
		{
			file: 'style.css',
			path: appTitle => `$./{appTitle}/assets/style.css`,
			temp: appTitle => styleTemp(appTitle)
		},
		{
			file: 'logic.js',
			path: appTitle => `./${appTitle}/assets/logic.js`,
			temp: appTitle =>
				`// ---------- Write your logic for ${appTitle} here in JavaScript ---------- //`
		},
		{
			file: 'README.md',
			path: appTitle => `./${appTitle}/README.md`,
			temp: appTitle => `# ${appTitle}`
		}
	]
};

export default staticSite;

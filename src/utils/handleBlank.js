import fs from 'fs';

import htmlTemp from '../templates/blankProject/home';
import cssTemp from '../templates/blankProject/style';

const jsText = '// ---------- Write your logic script here in JavaScript ---------- //';

const handleBlank = projectTitle => {
	try {
		fs.mkdirSync(`./${projectTitle}`);
		fs.mkdirSync(`./${projectTitle}/assets`);
		fs.writeFileSync(`./${projectTitle}/index.html`, htmlTemp(projectTitle));
		fs.writeFileSync(`./${projectTitle}/assets/style.css`, cssTemp());
		fs.writeFileSync(`./${projectTitle}/assets/script.js`, jsText);

		console.log('');
		console.log(`${projectTitle} successfully created!`);
		console.log('');
		console.log('Next Steps:');
		console.log('');
		console.log(`1. In your terminal, run the following command: cd ${projectTitle}`);
		console.log(`2. Open the folder in your preferred code editor.`);
		console.log('3. Open index.html in your browser (We recommend Live Server for VS Code users)');
		console.log('4. Begin customizing your generated project in your code editor.');
		console.log('');
		process.exit();
	} catch (error) {
		console.log('');
		console.error('Oops... Something went wrong. Please try again.', error);
		console.log('');
		process.exit();
	}
};

export default handleBlank;

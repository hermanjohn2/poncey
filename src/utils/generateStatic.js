import fs from 'fs';
import message from './cli/messaging';

import htmlTemp from '../templates/static-website/home';
import cssTemp from '../templates/static-website/style';

const jsText = '// ---------- Write your logic script here in JavaScript ---------- //';

const handleBlank = projectTitle => {
	try {
		fs.mkdirSync(`./${projectTitle}`);
		fs.mkdirSync(`./${projectTitle}/assets`);
		fs.writeFileSync(`./${projectTitle}/index.html`, htmlTemp(projectTitle));
		fs.writeFileSync(`./${projectTitle}/assets/style.css`, cssTemp());
		fs.writeFileSync(`./${projectTitle}/assets/script.js`, jsText);

		message.generatedStatic(projectTitle);
		process.exit();
	} catch (error) {
		message.error();
		process.exit();
	}
};

export default handleBlank;

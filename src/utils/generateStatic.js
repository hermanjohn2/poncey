import fs from 'fs';
import message from './cli/messaging';
import staticSite from '../templates/static-website/index';

const generateStatic = projectTitle => {
	try {
		// Making directories
		staticSite.directories.map(dir => {
			fs.mkdirSync(dir.path(projectTitle));
		});

		// Writing files
		staticSite.files.map(file => {
			fs.writeFileSync(file.path(projectTitle), file.temp(projectTitle));
		});

		message.generatedStatic(projectTitle);
		process.exit();
	} catch (error) {
		message.error();
		process.exit();
	}
};

export default generateStatic;

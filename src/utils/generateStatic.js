import fs from 'fs';
import message from './cli/messaging';
import staticSite from '../templates/static-website/index';

const generateStatic = appTitle => {
	try {
		// Making directories
		staticSite.directories.map(dir => {
			fs.mkdirSync(dir.path(appTitle));
		});

		// Writing files
		staticSite.files.map(file => {
			fs.writeFileSync(file.path(appTitle), file.temp(appTitle));
		});

		message.generatedStatic(appTitle);
		process.exit();
	} catch (error) {
		message.error();
		process.exit();
	}
};

export default generateStatic;

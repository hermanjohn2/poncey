import fs from 'fs';
import message from './cli/messaging';
import reactApp from '../templates/react-web-app/index';

const generateReact = appTitle => {
	try {
		// Making directories
		reactApp.directories.map(dir => {
			fs.mkdirSync(dir.path(appTitle));
		});

		// Writing files
		reactApp.files.map(file => {
			fs.writeFileSync(file.path(appTitle), file.temp(appTitle));
		});

		message.generatedReact(appTitle);
		process.exit();
	} catch (error) {
		message.error();
		process.exit();
	}
};

export default generateReact;

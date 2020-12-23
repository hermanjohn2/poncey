import prompts from './cli/prompts';
import message from './cli/messaging';

import generateReact from './generateReact';
import generateStatic from './generateStatic';

const init = appTitle => {
	message.intro();

	prompts.intro().then(({ project_type }) => {
		switch (project_type) {
			case 'React Web Application':
				generateReact(appTitle);
				break;
			case 'Static Website':
				generateStatic(appTitle);
				break;
			default:
				message.error();
				process.exit();
				break;
		}
	});
};

export default init;

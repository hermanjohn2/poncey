import prompts from './cli/prompts';
import message from './cli/messaging';

import generateReact from './generateReact';
import generateStatic from './generateStatic';

const init = projectTitle => {
	message.intro();

	prompts.intro().then(({ project_type }) => {
		switch (project_type) {
			case 'React Web Application':
				generateReact(projectTitle);
				break;
			case 'Static Website':
				generateStatic(projectTitle);
				break;
			default:
				message.error();
				process.exit();
				break;
		}
	});
};

export default init;

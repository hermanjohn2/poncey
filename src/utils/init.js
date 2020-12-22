import prompts from './cli/prompts';
import message from './cli/messaging';

import generateReactApp from './generateReact';
import generateStaticSite from './generateStatic';

const init = projectTitle => {
	message.intro();

	prompts.intro().then(({ project_type }) => {
		switch (project_type) {
			case 'React Web Application':
				generateReactApp(projectTitle);
				break;
			case 'Static Website':
				generateStaticSite(projectTitle);
				break;
			default:
				message.error();
				process.exit();
				break;
		}
	});
};

export default init;

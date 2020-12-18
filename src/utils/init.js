import createProject from './createProject';
import prompts from './prompts';

const init = projectName => {
	console.log('');
	console.log('Welcome to Poncey.');
	console.log('');

	prompts.intro().then(data => {
		console.log(data);
		console.log({ projectName });

		createProject(projectName);
	});
};

export default init;

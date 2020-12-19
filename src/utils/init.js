import createProject from './createProject';
import prompts from './prompts';

const init = projectName => {
	console.log('');
	console.log('Welcome to Poncey.');
	console.log('');

	prompts.intro().then(({ project_type }) => {
		createProject(projectName, project_type);
	});
};

export default init;

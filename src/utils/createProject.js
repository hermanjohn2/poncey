import generateReactApp from './generateReact';
import generateStaticSite from './generateStatic';

const createProject = (projectTitle, introPromptData) => {
	console.log(introPromptData);
	switch (introPromptData) {
		case 'React Web Application':
			generateReactApp(projectTitle);
			process.exit();
			break;
		case 'Static Website':
			generateStaticSite(projectTitle);
			break;
		default:
			console.log('');
			console.log('Something went wrong. Please try again.');
			console.log('');
			process.exit();
			break;
	}
};

export default createProject;

import handleBlank from './handleBlank';

const createProject = (projectTitle, introPromptData) => {
	console.log(introPromptData);
	switch (introPromptData) {
		case 'Blank Project (Recommended for Developers)':
			handleBlank(projectTitle);
			break;
		case 'Business Website':
			console.log('');
			console.log('Feature under construction. Please try our Blank Project option.');
			console.log('');
			process.exit();
			break;
		case 'Blog':
			console.log('');
			console.log('Feature under construction. Please try our Blank Project option.');
			console.log('');
			process.exit();
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

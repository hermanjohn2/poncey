import fs from 'fs';

const createProject = projectTitle => {
	try {
		fs.mkdirSync(`./${projectTitle}`);
		fs.mkdirSync(`./${projectTitle}/assets`);
		fs.writeFileSync(`./${projectTitle}/index.html`, '');
		fs.writeFileSync(`./${projectTitle}/assets/style.css`, '');
		fs.writeFileSync(`./${projectTitle}/assets/script.js`, '');
	} catch (error) {
		console.log('Oops... Something went wrong. Please try again.');
		console.log(error);
	}
};

export default createProject;

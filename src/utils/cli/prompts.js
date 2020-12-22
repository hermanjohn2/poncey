import inquirer from 'inquirer';

export default {
	intro: () => {
		return inquirer.prompt({
			name: 'project_type',
			type: 'list',
			message: 'What type of project are you building?',
			choices: ['React Web Application', 'Static Website']
		});
	}
};

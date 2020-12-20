import init from './utils/init';

export function cli(args) {
	// Verifying the user has input a title
	if (!args[2]) {
		console.log('');
		console.log('Please enter a name for your project after the "poncey" command.');
		console.log('');
		process.exit();
	}

	// Creating the project title based on what the user inputs after the "poncey" command
	// This allows the user to include spaces and capital letters when inputting the title
	// Spaces with be replaced with a "-" and capital letters will be lowercase
	const projectTitle = args.slice(2).join('-').toLowerCase();

	init(projectTitle);
}

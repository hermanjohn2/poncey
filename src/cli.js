import fs from 'fs';
import init from './utils/init';
import message from './utils/cli/messaging';

export function cli(args) {
	// Verifying the user has input a title
	if (!args[2]) message.enterTitle();

	// Creating the project title based on what the user inputs after the "poncey" command
	// This allows the user to include spaces and capital letters when inputting the title
	// Spaces with be replaced with a "-" and capital letters will be lowercase
	const appTitle = args.slice(2).join('-').toLowerCase();

	// Verifying a directory matching the entered title does not exist
	!fs.existsSync(`./${appTitle}`) ? init(appTitle) : message.projectExists(appTitle);
}

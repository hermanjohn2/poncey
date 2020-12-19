import init from './utils/init';

export function cli(args) {
	if (!args[2]) {
		console.log('');
		console.log('Please enter a name for your project after the "poncey" command.');
		console.log('');
		process.exit();
	}
	init(args[2]);
}
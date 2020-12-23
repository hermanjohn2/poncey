import kleur from 'kleur';

export default {
	intro: () => {
		console.log('');
		console.log(kleur.blue('--------------------------------------------------------'));
		console.log('');
		console.log(
			`          { ${kleur.red(`P`)} } { ${'0'} } { ${kleur.blue(`N`)} } { ${kleur.red(
				'C'
			)} } { E } { ${kleur.blue('Y')} }`
		);
		console.log('');
		console.log(kleur.blue('--------------------------------------------------------'));
		console.log('');
	},
	error: () => {
		console.log('');
		console.log(kleur.red('Something went wrong. Please try again.'));
		console.log('');
	},
	generatedReact: appTitle => {
		console.log('');
		console.log(kleur.green(`${appTitle} successfully created!`));
		console.log('');
		console.log('Next Steps:');
		console.log('');
		console.log('1. In your terminal, run the following commands:');
		console.log('');
		console.log(`cd ${appTitle}`);
		console.log('npm install');
		console.log('npm start');
		console.log('');
		console.log(`2. Visit https://localhost:3000 in your browser`);
		console.log(`3. Get started customizing your React application inside of ${appTitle}/src`);
		console.log('');
		console.log(kleur.magenta('Do not forget the most important part... Have fun!'));
		console.log('');
	},
	generatedStatic: appTitle => {
		console.log('');
		console.log(kleur.green(`${appTitle} successfully created!`));
		console.log('');
		console.log('Next Steps:');
		console.log('');
		console.log(`1. In your terminal, run the following command: cd ${appTitle}`);
		console.log(`2. Open the folder in your preferred code editor.`);
		console.log('3. Open index.html in your browser (We recommend Live Server for VS Code users)');
		console.log('4. Begin customizing your generated project in your code editor.');
		console.log('');
		console.log(kleur.magenta('Do not forget the most important part... Have fun!'));
		console.log('');
	},
	projectExists: appTitle => {
		console.log('');
		console.log(kleur.red(`${appTitle} already exists. Please choose another name for your project.`));
		console.log('');
	},
	enterTitle: () => {
		console.log('');
		console.log(
			kleur.red(`Please enter a name for your project after the ${kleur.bold('poncey')} command.`)
		);
		console.log('');
		process.exit();
	}
};

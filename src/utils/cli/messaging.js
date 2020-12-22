import kleur from 'kleur';

export default {
	intro: () => {
		console.log(
			kleur.blue(`                                                                                                                  
ppppp   ppppppppp      ooooooooooo   nnnn  nnnnnnnn        cccccccccccccccc    eeeeeeeeeeee  yyyyyyy           yyyyyyy
p::::ppp:::::::::p   oo:::::::::::oo n:::nn::::::::nn    cc:::::::::::::::c  ee::::::::::::ee y:::::y         y:::::y 
p:::::::::::::::::p o:::::::::::::::on::::::::::::::nn  c:::::::::::::::::c e::::::eeeee:::::eey:::::y       y:::::y  
pp::::::ppppp::::::po:::::ooooo:::::onn:::::::::::::::nc:::::::cccccc:::::ce::::::e     e:::::e y:::::y     y:::::y   
 p:::::p     p:::::po::::o     o::::o  n:::::nnnn:::::nc::::::c     ccccccce:::::::eeeee::::::e  y:::::y   y:::::y    
 p:::::p     p:::::po::::o     o::::o  n::::n    n::::nc:::::c             e:::::::::::::::::e    y:::::y y:::::y     
 p:::::p     p:::::po::::o     o::::o  n::::n    n::::nc:::::c             e::::::eeeeeeeeeee      y:::::y:::::y      
 p:::::p    p::::::po::::o     o::::o  n::::n    n::::nc::::::c     ccccccce:::::::e                y:::::::::y       
 p:::::ppppp:::::::po:::::ooooo:::::o  n::::n    n::::nc:::::::cccccc:::::ce::::::::e                y:::::::y        
 p::::::::::::::::p o:::::::::::::::o  n::::n    n::::n c:::::::::::::::::c e::::::::eeeeeeee         y:::::y         
 p::::::::::::::pp   oo:::::::::::oo   n::::n    n::::n  cc:::::::::::::::c  ee:::::::::::::e        y:::::y          
 p::::::pppppppp       ooooooooooo     nnnnnn    nnnnnn    cccccccccccccccc    eeeeeeeeeeeeee       y:::::y           
 p:::::p                                                                                           y:::::y            
 p:::::p                                                                                          y:::::y             
p:::::::p                                                                                        y:::::y              
p:::::::p                                                                                       y:::::y               
p:::::::p                                                                                      yyyyyyy                
ppppppppp                                                                                                             
                                                                                                                      
`)
		);
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
	}
};

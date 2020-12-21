export default appTitle => {
	return `# ${appTitle}

This project was generated with [Poncey](https://github.com/hermanjohn2/poncey).

## Usage

In the directory that your project lives in, you can run the following commands:

${'```'}
npm start
${'```'}

${'```'}
yarn start
${'```'}

This will start the application in development mode. <br>
Now, you can open the application in the browser at [http://localhost:3000](http://localhost3000) 

${'```'}
npm run build
${'```'}

${'```'}
yarn build
${'```'}

This will generate a build directory and will store the production build of your application inside of the newly generate directory.

${'```'}
npm run eject
${'```'}

${'```'}
yarn eject
${'```'}

This will remove the single build dependency from your project. Warning: This is irreversible.

## About Poncey

[Check out our repo on Github](https://github.com/hermanjohn2/poncey) <br>
[Poncey package on npm](https://www.npmjs.com/package/poncey)
    `;
};

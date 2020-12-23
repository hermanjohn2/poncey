export default appTitle => {
	return `# Folders and Files ignored by git in ${appTitle}
/node_modules
/build
.DS_*
.env
.env*.local
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.eslintcache
    `;
};

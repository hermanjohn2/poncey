export default () => {
	return `/node_modules
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

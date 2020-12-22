import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import './style.css';

const Deployment = () => {
	return (
		<div className="deployment-wrapper">
			<Navbar />
			<main className="deployment-content">
				<h1>Deployment Guide</h1>
				<p>
					We suggest using{' '}
					<a
						href="https://www.npmjs.com/package/gh-pages"
						target="_blank"
						rel="noreferrer">
						<strong>Github Pages</strong>
					</a>{' '}
					to deploy a serverless React application.{' '}
					<p>
						There a ton of great options for deployment so please do some research
						before choosing where your app is hosted.
					</p>{' '}
					<p>Below we will give a short guide to deploying on Github Pages.</p>
				</p>
				<div className="deployment-guide">
					<h2>First, make sure you have:</h2>
					<ul>
						<li>
							A{' '}
							<a href="https://github.com/" target="_blank" rel="noreferrer">
								<strong>Github</strong>
							</a>{' '}
							account
						</li>
						<li>
							<a
								href="https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/set-up-git"
								target="_blank"
								rel="noreferrer">
								<strong>Git</strong>
							</a>{' '}
							set up on your machine
						</li>
						<li>
							<a
								href="https://nodejs.org/en/"
								target="_blank"
								rel="noreferrer">
								<strong>Node and npm</strong>
							</a>{' '}
							installed
						</li>
					</ul>
					<h2>From there:</h2>
					<ol>
						<li>
							Install the GitHub Pages package by running the following
							command, in your terminal, from the root of your project:
							<p className="code">npm install gh-pages --save-dev</p>
						</li>
						<li>
							Add the following property as the first property in your{' '}
							<strong>package.json</strong> file:
							<p className="code">
								"homepage":
								"https://[your-github-username].github.io/[your-repo-name]"
							</p>
						</li>
						<li>
							Add the following scripts to your <strong>package.json</strong>{' '}
							file:
							<p className="code">"predeploy": "npm run build"</p>
							<p className="code">"deploy": "gh-pages -d build"</p>
						</li>
						<li>
							Create a new repository on{' '}
							<a
								href="https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/create-a-repo"
								target="_blank"
								rel="noreferrer">
								<strong>GitHub</strong>
							</a>
							, initialize it, add it as a remote to your local git repository
							and set your main branch. After creating the new repository, run
							the following commands in your terminal from the root of your
							project:
							<p className="code">git init</p>
							<p className="code">
								git remote add origin
								git@github.com:[your-github-username]/[your-github-repo-name].git
							</p>
							<p className="code">git branch -M main</p>
						</li>
						<li>
							Deploy to GitHub Pages by running the following command:
							<p className="code">npm run deploy</p>
							<p>
								This will create a <strong>gh-pages</strong> branch that
								hosts your application.
							</p>
						</li>
					</ol>
				</div>
			</main>
		</div>
	);
};

export default Deployment;

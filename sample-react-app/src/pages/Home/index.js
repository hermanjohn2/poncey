import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import './style.css';

const Home = () => {
	return (
		<div>
			<Navbar />
			<main className="Home">
				<img
					src="https://lh3.googleusercontent.com/ET3aplOAqqvqpgNgZluQ71CnPN53CLnperwj3OLAaECEi6wWOJ5iYycT04oqg7Rf5_5oqedM7twHAu_VinAXlsgltV0hcZ3S7ybQT2AvBVX7UYJlXQqL1-vnMqsMDTUN12HadFlHjQ=s200-p-k"
					alt="Poncey Logo"
				/>
				<p>
					Thank you for using Poncey. Go into{' '}
					<strong>yourApp/src/pages/Home/index.js</strong> to make changes to this view.
				</p>
				<p>
					You can also add a new view by creating a new folder inside of{' '}
					<strong>yourApp/pages</strong>.
				</p>
				<p>
					Go into <strong>yourApp/src/components</strong> to add components or make edits
					to the Navbar and Footer components.
				</p>
				<p>
					Check out{' '}
					<a
						href="https://reactjs.org/docs/getting-started.html"
						target="_blank"
						rel="noreferrer">
						<strong>React's Documentation</strong>
					</a>{' '}
					to learn more about React and how to build a React application.
				</p>
			</main>
			<Footer />
		</div>
	);
};

export default Home;

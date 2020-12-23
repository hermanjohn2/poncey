const renderHTML = appTitle => {
	return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./assets/style.css" />
        <title>${appTitle}</title>
    </head>
    <body>
        <!-- Navbar Content -->
        <nav class="poncey-nav">
            <div class="nav-title">
                <a href="./index.html">${appTitle}</a>
            </div>
            <div class="nav-links">
                <!-- Add Navbar links here -->
                <a href="https://github.com/hermanjohn2/poncey" target="_blank"> Docs </a>
            </div>
        </nav>
        <!-- Main Content -->
        <main class="poncey-content">
            <div class="main-header">
                <!-- Poncey Logo -->
                <img
					class="center"
					src="https://lh3.googleusercontent.com/ET3aplOAqqvqpgNgZluQ71CnPN53CLnperwj3OLAaECEi6wWOJ5iYycT04oqg7Rf5_5oqedM7twHAu_VinAXlsgltV0hcZ3S7ybQT2AvBVX7UYJlXQqL1-vnMqsMDTUN12HadFlHjQ=s200-p-k"
				/>
            </div>
            <div class="main-body">
                <p>
                    Thank you for using Poncey. Open your newly created project folder to customize
                    your project.
                </p>

                <ul>
                    <li>
                        <strong>Layout Edits: </strong>Open the <em>index.html</em> file and
                        make your HTML changes.
                    </li>
                    <br />
                    <li>
                        <strong>Style Edits: </strong>Move to the <em>assets</em> folder and
                        make changes to the <em>style.css</em> file.
                    </li>
                    <br />
                    <li>
                        <strong>Logic Edits: </strong>Move to the <em>assets</em> folder and
                        make changes to the <em>logic.js</em> file.
                    </li>
                </ul>
            </div>
        </main>
        <!-- Footer Content -->
        <footer class="poncey-footer">
            <p class="footer-text">&copy; Copyright 2020 {Poncey}</p>
        </footer>

        <!-- Scripts -->
        <script src="./assets/logic.js"></script>
    </body>
</html>
    `;
};

export default renderHTML;

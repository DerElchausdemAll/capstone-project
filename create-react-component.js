/////////////// TASKS

// node create-react-component.js
// npx create-react-app

// API
// node create-react-component.js directory componentName
// node create-react-component.js directory atoms Button
// ->
// * out/atoms/Button/index.jsx
// * out/atoms/Button/README.md

/////////////// TASKS

import { mkdir } from "fs/promises";
import { writeFile } from "fs/promises";
import path from "path";
import process from "node:process";

const outFolder = "out";
const jsxTemplate = (componentName) => `import React from "react";


const ${componentName} = () => {
	return <div/>
}

export default ${componentName};
`;

const readmeTemplate = (componentName) => `# ${componentName}

## Just a example
`;

// This function has to be called.
const createReactComponent = async (directoryName, componentName) => {
	// const directory = "out/atoms/Button";
	// const fileName = `${directory}/index.js`;
	// nachfolgende Variante mit path.join() ist sicherer

	const directory = path.join(outFolder, directoryName, componentName);
	const jsFileName = path.join(directory, "index.js");
	const readmeFileName = path.join(directory, "README.md");
	// Wen can use "await" since this is an async function
	await mkdir(directory, { recursive: true });
	// erstellt eine Ordner Struktur, recursive: true ist auf CLI mkdir -p (parents)
	writeFile(jsFileName, jsxTemplate(componentName))
		.then(() => {
			console.log(`Created file: ${jsFileName}`);
		})
		.catch((error_) => {
			console.error(error_);
		});
	writeFile(readmeFileName, readmeTemplate(componentName))
		.then(() => {
			console.log(`Created file: ${readmeFileName}`);
		})
		.catch((error_) => {
			console.error(error_);
		});
};

// Read arguments from CLI
const [directoryName, componentName] = process.argv.slice(2);

// Add arguments to the create function
void createReactComponent(directoryName, componentName);

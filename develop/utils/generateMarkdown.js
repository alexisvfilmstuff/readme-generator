// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## description
${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contribute](#contribute)

* [Test](#test)

## Installation

To install the dependencies for this application, install ${data.installation}

## Usage

The usage of this project is to ${data.usage}

## License

The project license is ${data.license}

## Contribute

To contribute this application ${data.contribute}

## Tests

To test the dependencies for this application run the ${data.test}

`;
}

module.exports = generateMarkdown;

# Git Info Styler

## Description

Git Info Styler is a Node.js package that fetches and stylishly displays information about a GitHub user. It utilizes various libraries to enhance the user experience with colorized output, ASCII art, and a stylish text box.

## Features

- Fetches and displays information about a GitHub user.
- Stylish presentation with colorized output and ASCII art.

## Installation

```bash
npm install git-info-styler
```
## Usage
### Command Line Interface (CLI)

Run the following command and follow the prompts to enter a GitHub username:

```bash
npm run start
```

### Integration in Node.js Projects

You can also integrate Git Info Styler into your Node.js projects. Here's an example:

```javascript

const { displayUserInfo } = require('git-info-styler');

// Replace 'your-username' with the GitHub username you want to fetch information for
displayUserInfo('your-username');
```
### Configuration

Git Info Styler provides customization options through the CLI or integration in your Node.js projects.
### Dependencies
*    axios
*    chalk
*    boxen
*    lodash
*    figlet
### License

This project is licensed under the MIT License - see the LICENSE file for details.
### Acknowledgments

    Special thanks to the open-source community for providing the essential libraries used in this project.
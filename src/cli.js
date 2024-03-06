// cli.js
const inquirer = require('inquirer');
const { displayUserInfo } = require('./index');

const getUserInput = async () => {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Enter a GitHub username:',
      validate: (value) => {
        return value.trim() !== '' || 'Please enter a valid GitHub username.';
      },
    },
  ]);

  return userInput.username;
};

const main = async () => {
  try {
    const username = await getUserInput();
    await displayUserInfo(username);
  } catch (error) {
    console.error(error.message);
  }
};

main();

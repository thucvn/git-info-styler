// index.js
const axios = require('axios');
const chalk = require('chalk');
const boxen = require('boxen');
const _ = require('lodash');
const figlet = require('figlet');

const fetchGitHubUserInfo = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const userData = response.data;

    const formattedData = {
      Name: userData.name || 'Not provided',
      Bio: userData.bio || 'Not provided',
      Location: userData.location || 'Not provided',
      Followers: userData.followers,
      Following: userData.following,
      Repositories: userData.public_repos,
    };

    return formattedData;
  } catch (error) {
    throw new Error('Error fetching GitHub user information.');
  }
};

const displayUserInfo = async (username) => {
  try {
    const userInfo = await fetchGitHubUserInfo(username);

    console.log(chalk.bold.underline(`GitHub User Information for ${username}`));
    _.forEach(userInfo, (value, key) => {
      console.log(chalk.yellow(`${key}:`), value);
    });

    console.log('\n' + boxen(chalk.green(figlet.textSync('GitHub Info')), { padding: 1 }));
  } catch (error) {
    console.error(chalk.red(error.message));
  }
};

module.exports = {
    fetchGitHubUserInfo,
    displayUserInfo
}
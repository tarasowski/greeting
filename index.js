const core = require('@actions/core');

try {
  const firstName = core.getInput('first_name');
  const lastName = core.getInput('last_name');
  console.log(`This is my firstname, ${firstName}!`);
  console.log(`This is my lastname, ${lastName}!`);
  const date = new Date();
  console.log(`The current time is ${date.toISOString()}`);
} catch (error) {
  core.setFailed(error.message);
}

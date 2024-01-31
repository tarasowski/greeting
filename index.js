const core = require('@actions/core');

try {
  const name = core.getInput('name');
  console.log(`Hello, ${name}!`);
  const date = new Date();
  console.log(`The current time is ${date.toISOString()}`);
} catch (error) {
  core.setFailed(error.message);
}

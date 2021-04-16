const common = require('./jest.common.config');

module.exports = {
  ...common,
  testRegex: ['^(.*e2e).*test.js$'],
};

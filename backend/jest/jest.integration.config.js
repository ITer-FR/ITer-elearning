const common = require('./jest.common.config');

module.exports = {
  ...common,
  testRegex: ['^(.*integration).*test.js$'],
};

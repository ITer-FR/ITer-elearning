require('dotenv').config();

module.exports = (on, config) => {
  // copy any needed variables from process.env to config.env
  config.env.BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  console.log('backend url', config.env.BACKEND_URL);

  // do not forget to return the changed config object!
  return config;
};

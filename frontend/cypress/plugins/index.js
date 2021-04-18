/* eslint-disable no-param-reassign */
require('dotenv').config();

module.exports = (on, config) => {
  // copy any needed variables from process.env to config.env
  config.env.NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  // do not forget to return the changed config object!
  return config;
};

const env = process.env.NODE_ENV,
  loadEnvFile = (path) => require(['.', 'config', env, path].join('/')),
  endpoints = loadEnvFile('services');

module.exports = {
  endpoints
};
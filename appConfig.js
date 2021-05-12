const env = process.env.NODE_ENV,
  loadEnvFile = (path) => require(['.', 'config', env, path].join('/')),
  endpoints = loadEnvFile('services'),
  rootPath = process.env.PUBLIC_URL || '';

console.log(process.env)

module.exports = {
  endpoints,
  rootPath
};
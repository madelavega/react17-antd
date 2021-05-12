const { DefinePlugin } = require("webpack"),
      testAppConfig = require('./config/test/appConfig');

module.exports = {
  reactScriptsVersion: "react-scripts",
  webpack: {
    plugins : [
        new DefinePlugin({
          appConfig: JSON.stringify(
            (function () {
              let appConfig;
              try {
                appConfig = require('./appConfig.js');
              } catch (ex) {
                appConfig = {};
              }
              return appConfig;
            })()
          ),
        }),
    ]
  },
  jest: {
    configure : {
      globals: {
        appConfig: testAppConfig //for services...
      }
    }
  },
};
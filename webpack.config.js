const commonConfig = require("./build-utils/webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = (env) => {
  process.env.NODE_ENV = env === "prod" ? "production" : "development";
  const envConfig = require(`./build-utils/webpack.${env}.js`);
  return merge(commonConfig, envConfig);
};

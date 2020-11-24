const getWebpackConfig = require("../webpack.config");

module.exports = {
  stories: ["../src/**/*.stories.js", "../src/**/*.stories.mdx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    const appConfig = getWebpackConfig("dev");
    return {
      ...config,
      plugins: [...config.plugins, ...appConfig.plugins],
    };
  },
};

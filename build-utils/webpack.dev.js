const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const WatchMissingNodeModulesPlugin = require("react-dev-utils/WatchMissingNodeModulesPlugin");

const config = {
  devServer: {
    port: 3000,
    open: true,
    host: "0.0.0.0",
    overlay: true,
    hot: true,
    useLocalIp: true,
    historyApiFallback: true,
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /.jsx?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /(node_modules|dist|build-utils|webpack.config.js)/,
      },
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new WatchMissingNodeModulesPlugin(path.resolve("node_modules")),
  ],
};

module.exports = config;

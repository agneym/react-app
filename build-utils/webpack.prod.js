const path = require("path");
const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Optimisation Plugins
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// Utilities
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Generate service worker
const workboxPlugin = require("workbox-webpack-plugin");

const commonPaths = require("./common-paths");

module.exports = {
  devtool: "source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /(node_modules|dist|build-utils|webpack.config.js)/,
      },
    ],
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: commonPaths.root,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
      DEBUG: false,
    }),
    new workboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      swDest: path.join(commonPaths.outputPath, "sw.js"),
    }),
    new CopyWebpackPlugin([
      {
        from: commonPaths.public,
        to: commonPaths.outputPath,
        ignore: ["index.html"],
      },
    ]),
  ],
};

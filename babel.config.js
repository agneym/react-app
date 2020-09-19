const presets = [
  [
    "@babel/env",
    {
      useBuiltIns: "entry",
    },
  ],
  "@babel/preset-react",
];

const plugins = [
  "@babel/plugin-proposal-nullish-coalescing-operator",
  "@babel/plugin-proposal-optional-chaining",
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-transform-react-constant-elements",
];

module.exports = {
  presets,
  plugins,
  env: {
    development: {
      plugins: ["react-refresh/babel"],
    },
  },
};

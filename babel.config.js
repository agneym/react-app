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
  "@babel/plugin-proposal-object-rest-spread",
  "@babel/plugin-proposal-class-properties",
];

module.exports = { presets, plugins };

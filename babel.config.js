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
];

module.exports = { presets, plugins };

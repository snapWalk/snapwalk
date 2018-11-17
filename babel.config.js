const presets = [
  [
    "@babel/env",
    {
        targets: {
          esmodules: true
        },
        useBuiltIns: "entry",
    },
  ],
  ["@babel/react",],
];

module.exports = { presets };
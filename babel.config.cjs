module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }], // Transpile ES6+ syntax
    "@babel/preset-react", // Transpile JSX syntax
    "@babel/preset-typescript", // Transpile TypeScript syntax
  ],
};

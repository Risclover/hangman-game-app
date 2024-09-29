module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    // Use ts-jest to transpile TypeScript files
    "^.+\\.tsx?$": "ts-jest",
    // Use babel-jest to transpile JavaScript files
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // Adjust moduleNameMapper if you have path aliases
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    // Map other file types if necessary
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js",
  },
};

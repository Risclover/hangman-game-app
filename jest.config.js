/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  transformIgnorePatterns: ["node_modules/(?!(.*\\.mjs$|pdfjs-dist))"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};

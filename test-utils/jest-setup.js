import "@testing-library/jest-dom";

require("jest-fetch-mock").enableMocks();
require("jest-canvas-mock");

global.console = {
  ...global.console,
  warn: jest.fn(),
};

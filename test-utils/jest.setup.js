import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

require("jest-fetch-mock").enableMocks();
require("jest-canvas-mock");

global.console = {
  ...global.console,
  warn: jest.fn(),
};

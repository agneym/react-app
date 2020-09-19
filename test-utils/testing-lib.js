/* eslint-disable import/no-extraneous-dependencies */
import { render, queries } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const customRender = (ui, options) =>
  render(ui, {
    queries,
    ...options,
  });

export * from "@testing-library/react";

// override render method
export { customRender as render };

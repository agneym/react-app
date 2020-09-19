import React from "react";

import { render, screen } from "testing-lib";

import App from "./App";

describe("App Component", () => {
  it("show render component", () => {
    render(<App />);
    expect(screen.getByText("App")).toBeTruthy();
  });
});

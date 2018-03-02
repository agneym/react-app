import React from "react";
import { shallow } from "enzyme";

import App from "../App";

describe("App Component", () => {
  it("show render component", () => {
    const wrapper = shallow(
      <App
        query={() =>
          new Promise(resolve => {
            foo: "bar";
          })
        }
        onSearchClicked={() => {}}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });
  it("should make async call", async () => {
    const mockJSONFn = jest.fn();
    mockJSONFn.mockReturnValue(
      new Promise(resolve => {
        foo: "bar";
      })
    );
    const parentFn = jest.fn();
    const wrapper = shallow(
      <App query={mockJSONFn} onSearchClicked={parentFn} />
    );
    const mockJSONFn = jest.fn();
    mockJSONFn.mockReturnValue(
      new Promise(resolve => {
        foo: "bar";
      })
    );
    const parentFn = jest.fn();
    const wrapper = shallow(
      <App query={mockJSONFn} onSearchClicked={parentFn} />
    );
    expect(mockJSONFn.mock.calls.length).toBe(1);
  });
  it("should perform action with async call", () => {
    expect.assertions(1);
    const mockJSONFn = jest.fn();
    mockJSONFn.mockReturnValue(
      new Promise(resolve => {
        foo: "bar";
      })
    );
    const parentFn = jest.fn();
    const wrapper = shallow(
      <App query={mockJSONFn} onSearchClicked={parentFn} />
    );
  });
});

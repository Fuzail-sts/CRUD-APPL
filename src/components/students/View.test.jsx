import React from "react";
import   renderer  from "react-test-renderer";
import View from "./View";
import { BrowserRouter, Route } from "react-router-dom";

describe("View", () => {
  it("snapShot", async () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Route>
            <View />
          </Route>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

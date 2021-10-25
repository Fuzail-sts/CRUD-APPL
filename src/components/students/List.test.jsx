import { render, screen, } from "@testing-library/react";
import {Route, BrowserRouter } from "react-router-dom";

import List from "./List";
const students=[ {
    "id": 2,
    "name": "khan deepak",
    "email": "khan@gmail.com"
  },
  {
    "name": "nitin",
    "email": "nitin@gmail.com",
    "id": 3
  },
  {
    "name": "change occur",
    "email": "",
    "id": 4
  },
  {
    "name": "change occur",
    "email": "",
    "id": 5
  }]


describe("List", () => {
  it("should render List element", async () => {
    render(  <BrowserRouter>
    <Route>
     <List students={students}/>
     </Route>
     </BrowserRouter>);
    const divElements = await  screen.findAllByTestId(/item/i);
    console.log(divElements,'divElements');
    expect(divElements.length).toBe(1)
  });
});

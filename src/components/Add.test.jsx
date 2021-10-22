import { render, screen, fireEvent, act } from "@testing-library/react";
import Add from "./Add";
import  axios from "axios";


const selectWorkspace = jest.spyOn(axios, "post");

describe("Add", () => {
  it("should render input element", () => {
    render(<Add />);
    const inputElement = screen.getByPlaceholderText(/Add name.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type into input", async () => {
    render(<Add />);
    const inputElement = screen.getByPlaceholderText(/Add name.../i);
    fireEvent.change(inputElement, { target: { value: "change occur" } });
    expect(inputElement.value).toBe("change occur");
  });

  it("should have empty input when button clicked", async () => {
    selectWorkspace.mockReturnValue(
      Promise.resolve({ status: 200, data: { token: 55555 } })
    );

    render(<Add />);
    const inputElement = screen.getByPlaceholderText(/Add name.../i);
    const buttonElement = screen.getByTestId(/Add/i);
    fireEvent.change(inputElement, { target: { value: "change occur" } });
    expect(inputElement.value).toBe("change occur");
    await act(async () => {
      await fireEvent.click(buttonElement);
    });
    expect(inputElement.value).toBe("");
  });
});


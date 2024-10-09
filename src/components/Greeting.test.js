import { render, screen } from "@testing-library/react";

import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

// test("renders Hello World as a text", () => {
//   // THREE A's
//   // A - ARRANGE: set up the test data, test conditions and test environment
//   // A - ACT: run logic that should be tested (execute functions)
//   // A - Assert: compare execution results with expected results

//   render(<Greeting />);

//   // when we virtually want to render our test on the screen, we pick functions
//   // e.g.: getFunction throw an error if element is not found
//   // queryFunction will not throw an error
//   // findFunction will return promise and see if element is eventually on the screen.
//   const helloWorld = screen.getByText("Hello World!");
//   expect(helloWorld).toBeInTheDocument();
// });

// TESTING SUITE >>>>>>>
// all the tests belonging to one component can be grouped in one testing suite
// you create testing suite by using describe() function.
//

describe("The component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act N/A

    // Assert
    const helloWorld = screen.getByText("Hello World!");
    expect(helloWorld).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was not clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act N/a

    // Assert
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'changed' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' when button is clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    }); //queryByText return null if element not found
    expect(outputElement).toBeNull();
  });
});

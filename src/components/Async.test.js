import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succedds", async () => {
    // Another way to test fetching is to simulate the case by mocking fetched function
    window.fetch = jest.fn(); // to run a mock function
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    const listItems = await screen.findAllByRole("listitem");
    // const listItems = screen.getAllByRole("listitem");
    // getAllByRole immidiately get items on the screen
    // findAllByRole can be used when fetching data.

    // One way to test data fetching is to use FIND
    // FIND returns a promise and wait until HTTP request succedes
    // findAllByRole accepts 3 arguments ('role', {}, {timeout period})
    expect(listItems).not.toHaveLength(0);
  });
});

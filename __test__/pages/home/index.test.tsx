import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("Home page", () => {
  it("should render properly", () => {
    render(<Home />);

    const homeComponent = screen.getByTestId("home");
    const text1 = "Random";

    expect(homeComponent).toBeInTheDocument();
    // expect(homeComponent).toHaveTextContent(text1);
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlogPage from "@/pages/BlogPage";

describe("Blog page", () => {
  beforeEach(() => {
    render(<BlogPage />);
  });

  it("should render properly", () => {
    const blogComponent = screen.getByTestId("blog-page");
    expect(blogComponent).toBeInTheDocument();
  });

  it("should render header text properly", () => {
    const blogComponentHeading = screen.getByTestId("blog-page-heading");
    const headerText = "Developer Blog";
    expect(blogComponentHeading).toHaveTextContent(headerText);
  });
});

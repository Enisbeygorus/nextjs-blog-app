import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("should render properly", () => {
    render(<Navbar />);
    const header = screen.getByTestId("header");

    expect(header).toBeInTheDocument();
  });
  it("should render text properly", () => {
    render(<Navbar />);
    const headerLinkMainPage = screen.getByTestId("header-link-main-page");
    const headerMainPageText = "SKY BLOG";

    const blogLink = screen.getByTestId("header-link-blog");
    const blogLinkText = "Blog";

    expect(headerLinkMainPage).toHaveTextContent(headerMainPageText);
    expect(blogLink).toHaveTextContent(blogLinkText);
  });
});

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Footer test", () => {
  test("should show text all the time", () => {
    render(
      <Header>
        <h4>Content</h4>
      </Header>
    );

    expect(screen.getByTestId('header')).toBeDefined();
    
  });
});
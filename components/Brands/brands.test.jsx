import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Brands from "./index";

describe("Footer test", () => {
  test("should show text all the time", () => {
    render(
      <Brands>
        <h4>Content</h4>
      </Brands>
    );

    expect(screen.getByTestId('brands')).toBeDefined();
    
  });
});

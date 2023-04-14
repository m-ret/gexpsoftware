import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./index";

describe("Footer test", () => {
  test("should show text all the time", () => {
    render(
      <Footer>
        <h4>Content</h4>
      </Footer>
    );
    expect(screen.findAllByLabelText(/Useful Links/i)).toBeDefined();
    expect(screen.findAllByLabelText(/Terms/i)).toBeDefined();
    expect(screen.findAllByLabelText(/Support & Help/i)).toBeDefined();
    expect(screen.findAllByLabelText(/About/i)).toBeDefined();
    expect(screen.getByTestId('social-media')).toBeDefined();
    
  });
});

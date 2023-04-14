import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./index";

describe("Hero test", () => {
  test("should show text all the time", () => {
    render(
      <Hero>
        <h4>Content</h4>
      </Hero>
    );
    expect(screen.findAllByLabelText(/Free and Open-Source Next.js Template for Startup & SaaS/i)).toBeDefined();
    expect(screen.findAllByLabelText(/Startup is free Next.js template for startups and SaaS business websites comes with all the essential pages, components, and sections you need to launch a complete business website, built-with Next 13.x and Tailwind CSS./i)).toBeDefined();
    expect(screen.getByTestId('text-container')).toBeDefined();
    
  });
});

import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import AboutSectionOne from './AboutSectionOne';

describe("AboutSectionOne test", () => {
    test("should show text all the time", () => {
        
        render(<AboutSectionOne title='Testing'><h4>Content</h4></AboutSectionOne>);

        expect(screen.getByText(/Next.js/i)).toBeDefined()
        expect(screen.getByText(/Crafted for Startup, SaaS and Business Sites./i)).toBeDefined()
    })
})
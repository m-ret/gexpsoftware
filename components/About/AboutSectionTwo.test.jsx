import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import AboutSectionTwo from './AboutSectionTwo';

describe("AboutSectionTwo test", () => {
    test("should show text all the time", () => {
        
        render(<AboutSectionTwo title='Testing'><h4>Content</h4></AboutSectionTwo>);

        expect(screen.getByText(/Next.js/i)).toBeDefined()
        expect(screen.getByText(/Premier support/i)).toBeDefined()
    })
})
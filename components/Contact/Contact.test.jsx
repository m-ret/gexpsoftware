import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Contact from './index';

describe("Contact test", () => {
    test("should show text all the time", () => {
        
        render(<Contact><h4>Content</h4></Contact>);
        expect(screen.findAllByLabelText(/Need Help? Open a Ticket/i)).toBeDefined()
        expect(screen.findAllByLabelText(/Your Message/i)).toBeDefined()
        expect(screen.findAllByLabelText(/Your Email/i)).toBeDefined()
        expect(screen.findAllByLabelText(/Your Name/i)).toBeDefined()


    })
})
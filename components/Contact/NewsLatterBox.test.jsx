import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import NewsLatterBox from './NewsLatterBox';

describe("NewsLatterBox test", () => {
    test("should show text all the time", () => {
        
        render(<NewsLatterBox><h4>Content</h4></NewsLatterBox>);
        expect(screen.findAllByLabelText(/Subscribe to receive future updates/i)).toBeDefined()
        expect(screen.findAllByLabelText(/No spam guaranteed, So please don’t send any spam mail./i)).toBeDefined()
       


    })
})
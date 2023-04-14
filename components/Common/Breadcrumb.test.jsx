import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Breadcrumb from './Breadcrumb';

describe("AboutSectionTwo test", () => {
    test("should show text all the time", () => {
        
        render(<Breadcrumb pageName='About Page'><h4>Content</h4></Breadcrumb>);
        expect(screen.getByText(/Home/i)).toBeDefined()
    })
})
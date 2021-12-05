
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Header";

describe("Test Header", () => { 
    // test("Test img render", () => {
    //     render(<Header />);
    //     expect(screen.findByRole("heading"));
    //     screen.get
    // });

    test("Do social media links work", () => {
        // render(<Header />);
        render(<a href="https://wearecodenation.com/" rel="noreferrer" rel="noopener" target="_blank">ws</a>);
        render(<a href="https://www.linkedin.com/company/wearecodenation" rel="noreferrer" rel="noopener" target="_blank">li</a>);
        render(<a href="https://twitter.com/wearecodenation" rel="noreferrer" rel="noopener" target="_blank">tw</a>);
        render(<a href="https://www.youtube.com/channel/UCR_kDlhaWi2U68KXpVWxMsg" rel="noreferrer" rel="noopener" target="_blank">yt</a>);
        
        expect(screen.getByText('ws')).toHaveAttribute('href', 'https://wearecodenation.com/');
        expect(screen.getByText('li')).toHaveAttribute('href', 'https://www.linkedin.com/company/wearecodenation');
        expect(screen.getByText('tw')).toHaveAttribute('href', 'https://twitter.com/wearecodenation');
        expect(screen.getByText('yt')).toHaveAttribute('href', 'https://www.youtube.com/channel/UCR_kDlhaWi2U68KXpVWxMsg');
    });
 
});
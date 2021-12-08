
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Fe from "../Fe";

describe("Test Fe", () => {
    test("Text external links", () => {
        render(
            <a 
            href="https://www.youtube.com/watch?v=7YhdqIR2Yzo&list=PLxRVWC-K96b0ktvhd16l3xA6gncuGP7gJ" 
            rel="noreferrer" 
            rel="noopener" 
            target="_blank"
            >How Does React Actually Work? React.js Deep Dive #1
            </a>
        );
        render(
            <a 
            href="https://www.youtube.com/watch?v=NSWr6dkc_Xw&list=PL4-IK0AVhVjMsQyJM3oF1Ij2uoQ0sSDoE" 
            rel="noreferrer" 
            rel="noopener" 
            target="_blank"
            >3d CSS Animation
            </a>
        );

        render(
            <a 
            href="https://www.youtube.com/watch?v=D56hs0Twfco" 
            rel="noreferrer" 
            rel="noopener" 
            target="_blank"
            >Figma Course - Web Design Tutorial for Beginners
            </a>
        );

        render(
            <a 
            href="https://dev.to/thenerdydev/10-react-projects-every-beginner-should-try-fk9" 
            rel="noreferrer" 
            rel="noopener" 
            target="_blank"
            >8 React Projects Every Beginner Should Try
            </a>
        );

        render(
            <a 
            href="https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835" 
            rel="noreferrer" 
            rel="noopener" 
            target="_blank"
            >Why Use Redux?
            </a>
        );
        
        render(
            <a 
            href="https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react" 
            rel="noreferrer" 
            rel="noopener" 
            target="_blank"
            >How to Build a Custom Pagination Component in React
            </a>
        );

        expect(screen.getByText('How Does React Actually Work? React.js Deep Dive #1')).toHaveAttribute('href', 'https://www.youtube.com/watch?v=7YhdqIR2Yzo&list=PLxRVWC-K96b0ktvhd16l3xA6gncuGP7gJ');
        expect(screen.getByText('3d CSS Animation')).toHaveAttribute('href', 'https://www.youtube.com/watch?v=NSWr6dkc_Xw&list=PL4-IK0AVhVjMsQyJM3oF1Ij2uoQ0sSDoE');
        expect(screen.getByText('Figma Course - Web Design Tutorial for Beginners')).toHaveAttribute('href', 'https://www.youtube.com/watch?v=D56hs0Twfco');
        expect(screen.getByText('8 React Projects Every Beginner Should Try')).toHaveAttribute('href', 'https://dev.to/thenerdydev/10-react-projects-every-beginner-should-try-fk9');
        expect(screen.getByText('Why Use Redux?')).toHaveAttribute('href', 'https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835');
        expect(screen.getByText('How to Build a Custom Pagination Component in React')).toHaveAttribute('href', 'https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react');
    });

    
});
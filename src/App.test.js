
import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "./components/menu/Menu";
import App from "./App";

describe('Test App', () => {
    const links = [
        { text: 'Menu', location: "/" },
        { text: 'about', location: "/about" }
    ];

    test.each(links)("Check in menu links work", (link) => {
        render(<Menu />);
        const linkDom = screen.getByText(link.text);
        expect(linkDom).toHaveAttribute('href', link.location);
    });
});
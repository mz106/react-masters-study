
import React from 'react';
import "./Header.css";
import logo from "./longAllWhite.png";

function Header() {
    return (
        <div className="container--flex container__header">
            <div className="container--flex container__logo">
                <img className="cn-logo" src={logo} alt="Code Nation Logo" />
            </div>
            <div className="container--flex container__nav">
                <nav className="container--flex nav__header">
                    <ul className="container--flex container__nav--list">
                        <li data-testid="header-link"><a href="https://wearecodenation.com/" rel="noreferrer" rel="noopener" target="_blank">ws</a></li>
                        <li data-testid="header-link"><a href="https://www.linkedin.com/company/wearecodenation" rel="noreferrer" rel="noopener" target="_blank">li</a></li>
                        <li data-testid="header-link"><a href="https://twitter.com/wearecodenation" rel="noreferrer" rel="noopener" target="_blank">tw</a></li>
                        <li data-testid="header-link"><a href="https://www.youtube.com/channel/UCR_kDlhaWi2U68KXpVWxMsg" rel="noreferrer" rel="noopener" target="_blank">yt</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Header;

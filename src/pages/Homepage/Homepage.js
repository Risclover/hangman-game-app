import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PrimaryBtn } from "../../components";
import { useHomepageLogic } from "./hooks/useHomepageLogic";
import Logo from "../../assets/images/logo.svg";
import PlayIcon from "../../assets/images/icon-play.svg";
import "../../assets/styles/Homepage.css";
export const Homepage = ({ setPage, page }) => {
    const { onClick, onPlayClick } = useHomepageLogic(setPage, page);
    return (_jsx("div", { className: "homepage-container", children: _jsxs("div", { className: "homepage-main", children: [_jsx("div", { className: "hangman-logo", children: _jsx("img", { src: Logo, alt: "logo" }) }), _jsxs("div", { className: "homepage-main-box", children: [_jsx("div", { className: "homepage-main-box-background" }), _jsxs("div", { className: "homepage-main-box-foreground", children: [_jsx("button", { className: "play-button", onClick: onPlayClick, children: _jsx("img", { src: PlayIcon, alt: "play-icon" }) }), _jsx(PrimaryBtn, { onClick: onClick, value: "How to Play" })] })] })] }) }));
};

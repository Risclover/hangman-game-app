import { jsx as _jsx } from "react/jsx-runtime";
import MenuIcon from "../../assets/images/icon-menu.svg"; // Import the SVG correctly
import "./CircleBtn.css";
export const CircleBtn = ({ value, onClick }) => {
    return (_jsx("button", { className: `circle-btn${value === MenuIcon ? " centered" : ""}`, onClick: onClick, children: _jsx("img", { src: value, alt: "icon" }) }));
};

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./HowToPlayStep.css";
export const HowToPlayStep = ({ id, number, title, content }) => {
    return (_jsxs("li", { className: "how-to-play-step-container", id: `${id}`, children: [_jsx("h2", { className: "how-to-play-step-number", children: number }), _jsx("h3", { className: "how-to-play-step-title", children: title }), _jsx("p", { className: "how-to-play-step-content", children: content })] }));
};

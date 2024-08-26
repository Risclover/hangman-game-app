import { jsx as _jsx } from "react/jsx-runtime";
import { HowToPlayStep, InfoPageContainer } from "../../components";
import { steps } from "./data/steps";
export const HowToPlayPage = ({ setPage, title }) => {
    return (_jsx(InfoPageContainer, { setPage: setPage, title: title, children: _jsx("ul", { className: "how-to-play-steps", children: steps.map((step) => (_jsx(HowToPlayStep, { id: `step-${step.number}`, number: step.number, title: step.title, content: step.content }, step.number))) }) }));
};

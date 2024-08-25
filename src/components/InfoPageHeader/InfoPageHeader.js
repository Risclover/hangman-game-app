import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CircleBtn, InfoPageTitle } from "../../components";
import CircleBtnIcon from "../../assets/images/icon-back.svg";
export const InfoPageHeader = ({ setPage, title }) => {
    return (_jsxs("div", { className: "info-page-header", children: [_jsx(CircleBtn, { onClick: () => setPage(0), value: CircleBtnIcon }), _jsx(InfoPageTitle, { title: title }), _jsx("div", { className: "empty-div" })] }));
};

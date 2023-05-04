var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import BankIcon from "./BankIcon";
import "./index.css";
var Modal = function (_a) {
    var determineType = _a.determineType, closeModal = _a.closeModal, dataList = _a.dataList, dataIcon = _a.dataIcon;
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "select-modal-backdrop", onClick: function () { return closeModal(false); } }), _jsx("div", __assign({ className: "select-modal" }, { children: dataList.map(function (name) { return (_jsx(BankIcon, { dataIcon: dataIcon, dataName: name, determineType: determineType, selectType: closeModal }, name)); }) }))] }));
};
export default Modal;

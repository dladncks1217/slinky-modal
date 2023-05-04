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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var BankIcon = function (_a) {
    var dataName = _a.dataName, dataIcon = _a.dataIcon, determineType = _a.determineType, selectType = _a.selectType;
    return (_jsxs("div", __assign({ className: "data-icon", onClick: function () {
            determineType(dataName);
            selectType(false);
        } }, { children: [_jsx("img", { src: dataIcon[dataName], alt: dataName }), _jsx("div", { children: dataName })] })));
};
export default BankIcon;

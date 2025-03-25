"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var HairColor_1 = require("./HairColor");
var LloydHair = /** @class */ (function (_super) {
    __extends(LloydHair, _super);
    function LloydHair() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.mask2 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.path2 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    LloydHair.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2;
        return (React.createElement("g", { id: "Top", strokeWidth: "1", fillRule: "evenodd" },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: "0", y: "0", width: "264", height: "280" }),
                React.createElement("path", { d: "M50 60 C30 80, 40 120, 60 140 C80 160, 100 150, 120 140 C140 130, 160 120, 180 110 C200 100, 220 80, 210 60 C200 40, 170 50, 150 50 C130 50, 110 40, 90 45 C70 50, 60 40, 50 60 Z", id: path2 })),
            React.createElement("mask", { id: mask2, fill: "white" },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: "Top/LloydHair", mask: "url(#" + mask2 + ")" },
                React.createElement("g", { transform: "translate(-1.000000, 0.000000)" },
                    React.createElement("g", { id: "Hair", strokeWidth: "1", fillRule: "evenodd", transform: "translate(50, 20)" },
                        React.createElement("mask", { id: mask1, fill: "white" },
                            React.createElement("use", { xlinkHref: '#' + path2 })),
                        React.createElement("use", { id: "HairShape", fill: "#FBE6D5", xlinkHref: '#' + path2 }),
                        React.createElement(HairColor_1.default, { maskID: mask1 })),
                    this.props.children))));
    };
    LloydHair.optionValue = 'LloydHair';
    return LloydHair;
}(React.Component));
exports.default = LloydHair;

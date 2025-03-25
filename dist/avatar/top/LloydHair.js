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
        _this.mask = lodash_1.uniqueId('react-mask-');
        _this.path = lodash_1.uniqueId('react-path-');
        return _this;
    }
    LloydHair.prototype.render = function () {
        var _a = this, mask = _a.mask, path = _a.path;
        return (React.createElement("g", { id: "Top", strokeWidth: "1", fillRule: "evenodd" },
            React.createElement("defs", null,
                React.createElement("path", { d: "M115 80.5c0-26.985-18.91-48.5-41-48.5S33 53.515 33 80.5c0 20.02 41 86.5 41 86.5s41-66.48 41-86.5Z\r\n            M260 183h27v114h-27V183Zm-203 0h27v114H57V183Z\r\n            M179 98c52.493 0 95-21.505 95-48s-42.507-48-95-48-95 21.505-95 48 42.507 48 95 48Z", id: path })),
            React.createElement("mask", { id: mask, fill: "white" },
                React.createElement("use", { xlinkHref: "#" + path })),
            React.createElement("g", { id: "Top/LloydHair" },
                React.createElement("g", { transform: "translate(-20, 10)" },
                    React.createElement("use", { id: "HairShape", fill: "#F4D9C6", xlinkHref: "#" + path }),
                    React.createElement(HairColor_1.default, { maskID: mask })),
                this.props.children)));
    };
    LloydHair.optionValue = 'LloydHair';
    return LloydHair;
}(React.Component));
exports.default = LloydHair;

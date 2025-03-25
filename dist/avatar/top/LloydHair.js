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
                React.createElement("path", { d: "M80 40 Q100 0 120 40 Q140 80 100 120 Q60 160 80 200 Q100 240 60 280 H140 Q160 240 180 200 Q200 160 160 120 Q120 80 140 40 Q160 0 180 40 L80 40 Z", id: path })),
            React.createElement("mask", { id: mask, fill: "white" },
                React.createElement("use", { xlinkHref: "#" + path })),
            React.createElement("g", { id: "Top/LloydHair" },
                React.createElement("g", { transform: "translate(-20, 0)" },
                    React.createElement("use", { id: "HairShape", fill: "#F4D9C6", xlinkHref: "#" + path }),
                    React.createElement(HairColor_1.default, { maskID: mask })),
                this.props.children)));
    };
    LloydHair.optionValue = 'LloydHair';
    return LloydHair;
}(React.Component));
exports.default = LloydHair;

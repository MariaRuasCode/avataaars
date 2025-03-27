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
var HairColor_1 = require("./HairColor");
var IndexTest = /** @class */ (function (_super) {
    __extends(IndexTest, _super);
    function IndexTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask = "react-mask-f282eeee";
        _this.path = "react-path-9aa18ebd";
        return _this;
    }
    IndexTest.prototype.render = function () {
        return (React.createElement("g", { id: "Top", strokeWidth: "1", fillRule: "evenodd" },
            React.createElement("defs", null,
                React.createElement("path", { 
                    id: this.path, 
                    d: "M10 10L22 20Z" 
                })),
            React.createElement("mask", { id: this.mask, fill: "white" },
                React.createElement("use", { xlinkHref: "#" + this.path })),
            React.createElement("g", { id: "Top/IndexTest" },
                React.createElement(HairColor_1.default, { maskID: this.mask }),
                this.props.children)));
    };
    IndexTest.optionValue = 'IndexTest';
    return IndexTest;
}(React.Component));
exports.default = IndexTest;
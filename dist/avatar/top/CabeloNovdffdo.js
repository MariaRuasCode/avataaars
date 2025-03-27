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
var CabeloNovdffdo = /** @class */ (function (_super) {
    __extends(CabeloNovdffdo, _super);
    function CabeloNovdffdo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask = "react-mask-2792572c";
        _this.path = "react-path-25819723";
        return _this;
    }
    CabeloNovdffdo.prototype.render = function () {
        return (React.createElement("g", { id: "Top", strokeWidth: "1", fillRule: "evenodd" },
            React.createElement("defs", null,
                React.createElement("path", { 
                    id: this.path, 
                    d: "M20,10 C30,-5 50,-5 60,10 C65,25 45,40 50,60 C55,80 75,90 70,110 C65,130 40,130 30,110 C20,90 35,80 30,60 C25,40 5,25 10,10 C15,-5 35,-5 45,10 Z" 
                })),
            React.createElement("mask", { id: this.mask, fill: "white" },
                React.createElement("use", { xlinkHref: "#" + this.path })),
            React.createElement("g", { id: "Top/CabeloNovdffdo" },
                React.createElement(HairColor_1.default, { maskID: this.mask }),
                this.props.children)));
    };
    CabeloNovdffdo.optionValue = 'CabeloNovdffdo';
    return CabeloNovdffdo;
}(React.Component));
exports.default = CabeloNovdffdo;
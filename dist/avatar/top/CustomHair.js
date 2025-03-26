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
var CustomHair = /** @class */ (function (_super) {
    __extends(CustomHair, _super);
    function CustomHair() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    CustomHair.prototype.render = function () {
        return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("path", { d: this.props.svgPath, id: this.path1 })),
            React.createElement("mask", { id: this.mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + this.path1 })),
            React.createElement("g", { id: 'Top/Custom-Hair', mask: "url(#" + this.mask1 + ")" },
                React.createElement("use", { fill: '#314756', xlinkHref: '#' + this.path1 }),
                React.createElement(HairColor_1.default, { maskID: this.mask1 })),
            this.props.children));
    };
    CustomHair.optionValue = 'CustomHair';
    return CustomHair;
}(React.Component));
exports.default = CustomHair;

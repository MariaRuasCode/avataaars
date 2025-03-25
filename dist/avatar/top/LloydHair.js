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
        return (React.createElement("g", { id: "Top", strokeWidth: "1", fillRule: "evenodd" },
            React.createElement("defs", null,
                React.createElement("path", { id: this.path, d: "M72.1322 203.397L91.0799 113.609L138.074 139.581L72.1322 203.397Z\r\n               M258.087 183.043L178.877 136.712L218.359 100.323L258.087 183.043Z\r\n               M177.054 218.946L134.11 137.85L186.836 127.704L177.054 218.946Z\r\n               M293.977 255.685L199.346 112.758L268.739 86.1381L293.977 255.685Z\r\n               M31.0163 231.424L84.4006 86.1607L138.035 119.628L31.0163 231.424Z\r\n               M341.683 216.933L190.784 138.647L263.738 65.8572L341.683 216.933Z\r\n               M29.6737 162.561L133.394 86.4254L88.607 48.1874L29.6737 162.561Z\r\n               M291.997 53.6364L158.109 116.335L147.273 23.4336L291.997 53.6364Z\r\n               M32.9184 276.486L96.6483 100.609L150.229 130.773L32.9184 276.486Z" })),
            React.createElement("mask", { id: this.mask, fill: "white" },
                React.createElement("use", { xlinkHref: "#" + this.path })),
            React.createElement("g", { id: "Top/LloydHair" },
                React.createElement("path", { d: "M72.1322 203.397L91.0799 113.609L138.074 139.581L72.1322 203.397Z", fill: "#D9D9D9" }),
                React.createElement("path", { d: "M258.087 183.043L178.877 136.712L218.359 100.323L258.087 183.043Z", fill: "#D9D9D9" }),
                React.createElement("path", { d: "M177.054 218.946L134.11 137.85L186.836 127.704L177.054 218.946Z", fill: "#D9D9D9" }),
                React.createElement("path", { d: "M293.977 255.685L199.346 112.758L268.739 86.1381L293.977 255.685Z", fill: "#D9D9D9" }),
                React.createElement("ellipse", { cx: "179", cy: "98", rx: "95", ry: "48", fill: "#D9D9D9" }),
                React.createElement("path", { d: "M31.0163 231.424L84.4006 86.1607L138.035 119.628L31.0163 231.424Z", fill: "#D9D9D9" }),
                React.createElement("path", { d: "M341.683 216.933L190.784 138.647L263.738 65.8572L341.683 216.933Z", fill: "#D9D9D9" }),
                React.createElement("rect", { x: "57", y: "183", width: "27", height: "114", fill: "#D9D9D9" }),
                React.createElement("rect", { x: "260", y: "183", width: "27", height: "114", fill: "#D9D9D9" }),
                React.createElement("path", { d: "M29.6737 162.561L133.394 86.4254L88.607 48.1874L29.6737 162.561Z", fill: "#D9D9D9" }),
                React.createElement("ellipse", { cx: "115", cy: "80.5", rx: "41", ry: "48.5", fill: "#D9D9D9" }),
                React.createElement("path", { d: "M291.997 53.6364L158.109 116.335L147.273 23.4336L291.997 53.6364Z", fill: "#D9D9D9" }),
                React.createElement("path", { d: "M32.9184 276.486L96.6483 100.609L150.229 130.773L32.9184 276.486Z", fill: "#D9D9D9" }),
                React.createElement(HairColor_1.default, { maskID: this.mask }),
                this.props.children)));
    };
    LloydHair.optionValue = 'LloydHair';
    return LloydHair;
}(React.Component));
exports.default = LloydHair;

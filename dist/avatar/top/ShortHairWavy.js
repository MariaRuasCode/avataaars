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
var facialHair_1 = require("./facialHair");
var HairColor_1 = require("./HairColor");
var ShortHairWavy = /** @class */ (function (_super) {
    __extends(ShortHairWavy, _super);
    function ShortHairWavy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filter1 = lodash_1.uniqueId('react-filter-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.mask2 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.path2 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    ShortHairWavy.prototype.render = function () {
        var _a = this, filter1 = _a.filter1, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2;
        return (React.createElement("g", { id: "Top", strokeWidth: "1", fillRule: "evenodd" },
            React.createElement("defs", null,
                React.createElement("rect", { id: path2, x: "0", y: "0", width: "264", height: "280" }),
                React.createElement("path", { d: "M72 40c-10 20-16 40-16 60 0 20 6 40 18 50 12 10 28 10 44 10s32 0 44-10c12-10 18-30 18-50 0-20-6-40-16-60-10-20-26-30-46-30s-36 10-46 30Z", id: path1 }),
                React.createElement("filter", { x: "-0.8%", y: "-2.0%", width: "101.5%", height: "108.0%", filterUnits: "objectBoundingBox", id: filter1 },
                    React.createElement("feOffset", { dx: "0", dy: "2", in: "SourceAlpha", result: "shadowOffsetOuter1" }),
                    React.createElement("feColorMatrix", { values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0", type: "matrix", in: "shadowOffsetOuter1", result: "shadowMatrixOuter1" }),
                    React.createElement("feMerge", null,
                        React.createElement("feMergeNode", { in: "shadowMatrixOuter1" }),
                        React.createElement("feMergeNode", { in: "SourceGraphic" })))),
            React.createElement("mask", { id: mask2, fill: "white" },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("g", { id: "Mask" }),
            React.createElement("g", { id: "Top/Short-Hair/Wavy", mask: "url(#" + mask2 + ")" },
                React.createElement("g", { transform: "translate(-1.000000, 0.000000)" },
                    React.createElement(facialHair_1.default, null),
                    React.createElement("mask", { id: mask1, fill: "white" },
                        React.createElement("use", { xlinkHref: '#' + path1 })),
                    React.createElement("use", { id: "Hair-Mask", stroke: "none", fill: "#252E32", fillRule: "evenodd", xlinkHref: '#' + path1 }),
                    React.createElement(HairColor_1.default, { maskID: mask1 }),
                    this.props.children))));
    };
    ShortHairWavy.optionValue = 'ShortHairWavy';
    return ShortHairWavy;
}(React.Component));
exports.default = ShortHairWavy;

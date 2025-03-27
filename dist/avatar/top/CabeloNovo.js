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
var CabeloNovo = /** @class */ (function (_super) {
    __extends(CabeloNovo, _super);
    function CabeloNovo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.mask2 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.path2 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    CabeloNovo.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2;
        return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { d: 'M20,10 C30,-5 50,-5 60,10 C65,25 45,40 50,60 C55,80 75,90 70,110 C65,130 40,130 30,110 C20,90 35,80 30,60 C25,40 5,25 10,10 C15,-5 35,-5 45,10 Z', id: path2 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Long-Hair/Straight', mask: "url(#" + mask1 + ")" },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement("g", { id: 'Hair', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', transform: 'translate(59.000000, 18.000000)' },
                        React.createElement("mask", { id: mask2, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path2 })),
                        React.createElement("use", { id: 'Mask-Hair', fill: '#944F23', xlinkHref: '#' + path2 }),
                        React.createElement(HairColor_1.default, { maskID: mask2 })),
                    React.createElement("path", { d: 'M192.506381,99.3351151 C197.3745,101.107702 202.263079,102.071957 207,102.148232 L207,102.148232 L207,92 C207,71.5654643 198.717268,53.0654643 185.325902,39.6740982 C198.717268,53.0654643 207,71.5654643 207,92 L207,215.608051 C194.525121,205.236892 178.490913,199 161,199 L157,199 L157,180.610951 L157,180.610951 C174.530782,172.282984 187.048193,155.114792 188.791419,134.867187 C194.569129,134.002364 199,129.018625 199,123 L199,110 C199,105.357474 196.363649,101.3307 192.506381,99.3351151 Z M190.18005,98.4258987 C189.794121,98.3201038 189.400422,98.233095 189,98.1659169 L189,97.9170491 C189.392974,98.0918644 189.786355,98.2614951 190.18005,98.4258987 Z M83,155.245847 C88.6015372,166.317951 97.7726252,175.277407 109,180.610951 L109,199 L105,199 C97.3271796,199 89.9346808,200.200199 83,202.423101 L83,155.245847 Z', id: 'Shadow', fillOpacity: '0.24', fill: '#000000', fillRule: 'evenodd' }),
                    React.createElement(facialHair_1.default, null),
                    this.props.children))));
    };
    CabeloNovo.optionValue = 'CabeloNovo';
    return CabeloNovo;
}(React.Component));
exports.default = CabeloNovo;

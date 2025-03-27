#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');

function updateIndexFile(componentName, componentsDir) {
    const indexPath = path.join(componentsDir, 'index.js');
    
    try {
        let content = fs.readFileSync(indexPath, 'utf8');
        
        // Add import statement
        const importStatement = `var ${componentName}_1 = require("./${componentName}");`;
        if (!content.includes(importStatement)) {
            // Find the last import line and insert after it
            const lines = content.split('\n');
            let lastImportIndex = -1;
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].match(/var\s+[\w_]+\s+=\s+require\("\.\/[\w_]+"\);?/)) {
                    lastImportIndex = i;
                }
            }
            if (lastImportIndex !== -1) {
                lines.splice(lastImportIndex + 1, 0, importStatement);
                content = lines.join('\n');
            } else {
                console.error('Could not find existing imports to insert after');
            }
        }

        // Add to component list
const componentLine = `React.createElement(${componentName}_1.default, null, children)`;
if (!content.includes(componentLine)) {
    const closingPattern = /(\s*)(<\/Selector>\s*);/g;
    if (closingPattern.test(content)) {
        content = content.replace(closingPattern, `,\n$1${componentLine}$1$2`);
    } else {
        console.error('Could not find closing parenthesis to insert component');
    }
}

        fs.writeFileSync(indexPath, content);
    } catch (error) {
        console.error('Error updating index file:', error);
    }
}
function generateFromPath(svgPath, componentName, outputDir) {
    const maskId = `react-mask-${randomUUID().slice(0, 8)}`;
    const pathId = `react-path-${randomUUID().slice(0, 8)}`;

    const jsContent = `"use strict";
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
var ${componentName} = /** @class */ (function (_super) {
    __extends(${componentName}, _super);
    function ${componentName}() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask = "${maskId}";
        _this.path = "${pathId}";
        return _this;
    }
    ${componentName}.prototype.render = function () {
        return (React.createElement("g", { id: "Top", strokeWidth: "1", fillRule: "evenodd" },
            React.createElement("defs", null,
                React.createElement("path", { 
                    id: this.path, 
                    d: "${svgPath.replace(/\n/g, '\\n')}" 
                })),
            React.createElement("mask", { id: this.mask, fill: "white" },
                React.createElement("use", { xlinkHref: "#" + this.path })),
            React.createElement("g", { id: "Top/${componentName}" },
                React.createElement(HairColor_1.default, { maskID: this.mask }),
                this.props.children)));
    };
    ${componentName}.optionValue = '${componentName}';
    return ${componentName};
}(React.Component));
exports.default = ${componentName};`;

    const dtsContent = `import * as React from 'react';
export default class ${componentName} extends React.Component {
    static optionValue: string;
    private mask;
    private path;
    render(): JSX.Element;
}`;

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(path.join(outputDir, `${componentName}.js`), jsContent);
    fs.writeFileSync(path.join(outputDir, `${componentName}.d.ts`), dtsContent);

    updateIndexFile(componentName, path.dirname(outputDir));
}

const args = process.argv.slice(2);
if (args.length < 3) {
    console.log('Usage: node generate-from-path.js "<svg-path>" ComponentName ./output-dir');
    process.exit(1);
}

generateFromPath(args[0], args[1], args[2]);
console.log(`Component ${args[1]} created and index updated!`);
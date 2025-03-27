const fs = require('fs');
const path = require('path');

// Get arguments from command line
const [svgPath, componentName] = process.argv.slice(2);

if (!svgPath || !componentName) {
  console.error('Usage: node createSvgComponent.js "<svg_path>" "ComponentName"');
  process.exit(1);
}

// Create TSX component file
const componentTemplate = `import * as React from 'react'
import { uniqueId } from 'lodash'

import FacialHair from './facialHair'
import HairColor from './HairColor'

export default class ${componentName} extends React.Component {
  static optionValue = '${componentName}'
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')

  render () {
    const { mask1, mask2, path1, path2 } = this
    return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path1} x='0' y='0' width='264' height='280' />
          <path
            d='${svgPath}'
            id={path2}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Straight' mask={\`url(#\${mask1})\`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(59.000000, 18.000000)'>
              <mask id={mask2} fill='white'>
                <use xlinkHref={'#' + path2} />
              </mask>
              <use id='Mask-Hair' fill='#944F23' xlinkHref={'#' + path2} />
              <HairColor maskID={mask2} />
            </g>
            <path
              d='M192.506381,99.3351151 C197.3745,101.107702 202.263079,102.071957 207,102.148232 L207,102.148232 L207,92 C207,71.5654643 198.717268,53.0654643 185.325902,39.6740982 C198.717268,53.0654643 207,71.5654643 207,92 L207,215.608051 C194.525121,205.236892 178.490913,199 161,199 L157,199 L157,180.610951 L157,180.610951 C174.530782,172.282984 187.048193,155.114792 188.791419,134.867187 C194.569129,134.002364 199,129.018625 199,123 L199,110 C199,105.357474 196.363649,101.3307 192.506381,99.3351151 Z M190.18005,98.4258987 C189.794121,98.3201038 189.400422,98.233095 189,98.1659169 L189,97.9170491 C189.392974,98.0918644 189.786355,98.2614951 190.18005,98.4258987 Z M83,155.245847 C88.6015372,166.317951 97.7726252,175.277407 109,180.610951 L109,199 L105,199 C97.3271796,199 89.9346808,200.200199 83,202.423101 L83,155.245847 Z'
              id='Shadow'
              fillOpacity='0.24'
              fill='#000000'
              fillRule='evenodd'
            />
            <FacialHair />
            {this.props.children}
          </g>
        </g>
      </g>
    )
  }
}
`;

// Write component file
const componentFileName = `${componentName}.tsx`;
fs.writeFileSync(componentFileName, componentTemplate);
console.log(`Created ${componentFileName}`);

// Update index.ts
const indexPath = path.join(process.cwd(), 'index.tsx');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Add import
const importStatement = `import ${componentName} from './${componentName}'`;
indexContent = indexContent.replace(
  /import { Selector, TopOption } from '..\/..\/options'/,
  `${importStatement}\nimport { Selector, TopOption } from '../../options'`
);

// Add component to render list
const componentJsx = `<${componentName}>{children}</${componentName}>`;
indexContent = indexContent.replace(
  /(\s*)(<\/Selector>\s*\)\s*}\s*})/,
  `$1  ${componentJsx}\n$1$2`
);

fs.writeFileSync(indexPath, indexContent);
console.log(`Updated index.ts`);
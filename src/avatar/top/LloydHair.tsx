import * as React from 'react'
import { uniqueId } from 'lodash'
import HairColor from './HairColor'

export default class LloydHair extends React.Component {
  static optionValue = 'LloydHair'
  private mask = uniqueId('react-mask-')
  private path = uniqueId('react-path-')

  render() {
    const { mask, path } = this
    return (
      <g id="Top" strokeWidth="1" fillRule="evenodd">
        <defs>
          <path
            d="M80 40 Q100 0 120 40 Q140 80 100 120 Q60 160 80 200 Q100 240 60 280 H140 Q160 240 180 200 Q200 160 160 120 Q120 80 140 40 Q160 0 180 40 L80 40 Z"
            id={path}
          />
        </defs>
        <mask id={mask} fill="white">
          <use xlinkHref={`#${path}`} />
        </mask>
        
        <g id="Top/LloydHair">
          <g transform="translate(-20, 0)">
            <use
              id="HairShape"
              fill="#F4D9C6"
              xlinkHref={`#${path}`}
            />
            <HairColor maskID={mask} />
          </g>
          {this.props.children}
        </g>
      </g>
    )
  }
}
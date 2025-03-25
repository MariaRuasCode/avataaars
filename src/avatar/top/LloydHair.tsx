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
            d="M115 80.5c0-26.985-18.91-48.5-41-48.5S33 53.515 33 80.5c0 20.02 41 86.5 41 86.5s41-66.48 41-86.5Z
            M260 183h27v114h-27V183Zm-203 0h27v114H57V183Z
            M179 98c52.493 0 95-21.505 95-48s-42.507-48-95-48-95 21.505-95 48 42.507 48 95 48Z"
            id={path}
          />
        </defs>
        
        <mask id={mask} fill="white">
          <use xlinkHref={`#${path}`} />
        </mask>
        
        <g id="Top/LloydHair">
          <g transform="translate(-20, 10)">
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
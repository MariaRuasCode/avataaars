import * as React from 'react'
import { uniqueId } from 'lodash'
import HairColor from './HairColor'

export default class LloydHair extends React.Component {
  static optionValue = 'LloydHair'
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')

  render() {
    const { mask1, mask2, path1, path2 } = this
    return (
      <g id="Top" strokeWidth="1" fillRule="evenodd">
        <defs>
          <rect id={path1} x="0" y="0" width="264" height="280" />
          <path
            d="M50 60 C30 80, 40 120, 60 140 C80 160, 100 150, 120 140 C140 130, 160 120, 180 110 C200 100, 220 80, 210 60 C200 40, 170 50, 150 50 C130 50, 110 40, 90 45 C70 50, 60 40, 50 60 Z"
            id={path2}
          />
        </defs>
        <mask id={mask2} fill="white">
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id="Top/LloydHair" mask={`url(#${mask2})`}>
          <g transform="translate(-1.000000, 0.000000)">
            <g
              id="Hair"
              strokeWidth="1"
              fillRule="evenodd"
              transform="translate(50, 20)">
              <mask id={mask1} fill="white">
                <use xlinkHref={'#' + path2} />
              </mask>
              <use id="HairShape" fill="#FBE6D5" xlinkHref={'#' + path2} />
              <HairColor maskID={mask1} />
            </g>
            {this.props.children}
          </g>
        </g>
      </g>
    )
  }
}

import * as React from 'react'
import { uniqueId } from 'lodash'
import HairColor from './HairColor'

interface CustomHairProps {
  svgPath: string
  children?: React.ReactNode
}

export default class CustomHair extends React.Component<CustomHairProps> {
  static optionValue = 'CustomHair'
  private mask1 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')

  render() {
    return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <path
            d={this.props.svgPath}
            id={this.path1}
          />
        </defs>
        <mask id={this.mask1} fill='white'>
          <use xlinkHref={'#' + this.path1} />
        </mask>
        
        <g id='Top/Custom-Hair' mask={`url(#${this.mask1})`}>
          <use fill='#314756' xlinkHref={'#' + this.path1} />
          <HairColor maskID={this.mask1} />
        </g>
        
        {this.props.children}
      </g>
    )
  }
}
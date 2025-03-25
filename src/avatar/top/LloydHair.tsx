import * as React from 'react'
import { uniqueId } from 'lodash'
import HairColor from './HairColor'

export default class LloydHair extends React.Component {
  static optionValue = 'LloydHair'
  private mask = uniqueId('react-mask-')
  private path = uniqueId('react-path-')

  render() {
    return (
      <g id="Top" strokeWidth="1" fillRule="evenodd">
        <defs>
          <path
            id={this.path}
            d="M72.1322 203.397L91.0799 113.609L138.074 139.581L72.1322 203.397Z
               M258.087 183.043L178.877 136.712L218.359 100.323L258.087 183.043Z
               M177.054 218.946L134.11 137.85L186.836 127.704L177.054 218.946Z
               M293.977 255.685L199.346 112.758L268.739 86.1381L293.977 255.685Z
               M31.0163 231.424L84.4006 86.1607L138.035 119.628L31.0163 231.424Z
               M341.683 216.933L190.784 138.647L263.738 65.8572L341.683 216.933Z
               M29.6737 162.561L133.394 86.4254L88.607 48.1874L29.6737 162.561Z
               M291.997 53.6364L158.109 116.335L147.273 23.4336L291.997 53.6364Z
               M32.9184 276.486L96.6483 100.609L150.229 130.773L32.9184 276.486Z"
          />
        </defs>
        
        <mask id={this.mask} fill="white">
          <use xlinkHref={`#${this.path}`} />
        </mask>

        <g id="Top/LloydHair">
          {/* Main geometric shapes */}
          <path d="M72.1322 203.397L91.0799 113.609L138.074 139.581L72.1322 203.397Z" fill="#D9D9D9"/>
          <path d="M258.087 183.043L178.877 136.712L218.359 100.323L258.087 183.043Z" fill="#D9D9D9"/>
          <path d="M177.054 218.946L134.11 137.85L186.836 127.704L177.054 218.946Z" fill="#D9D9D9"/>
          <path d="M293.977 255.685L199.346 112.758L268.739 86.1381L293.977 255.685Z" fill="#D9D9D9"/>
          
          {/* Central ellipse */}
          <ellipse cx="179" cy="98" rx="95" ry="48" fill="#D9D9D9"/>
          
          {/* Side elements */}
          <path d="M31.0163 231.424L84.4006 86.1607L138.035 119.628L31.0163 231.424Z" fill="#D9D9D9"/>
          <path d="M341.683 216.933L190.784 138.647L263.738 65.8572L341.683 216.933Z" fill="#D9D9D9"/>
          
          {/* Vertical rectangles */}
          <rect x="57" y="183" width="27" height="114" fill="#D9D9D9"/>
          <rect x="260" y="183" width="27" height="114" fill="#D9D9D9"/>
          
          {/* Additional geometric elements */}
          <path d="M29.6737 162.561L133.394 86.4254L88.607 48.1874L29.6737 162.561Z" fill="#D9D9D9"/>
          <ellipse cx="115" cy="80.5" rx="41" ry="48.5" fill="#D9D9D9"/>
          <path d="M291.997 53.6364L158.109 116.335L147.273 23.4336L291.997 53.6364Z" fill="#D9D9D9"/>
          <path d="M32.9184 276.486L96.6483 100.609L150.229 130.773L32.9184 276.486Z" fill="#D9D9D9"/>

          <HairColor maskID={this.mask} />
          {this.props.children}
        </g>
      </g>
    )
  }
}
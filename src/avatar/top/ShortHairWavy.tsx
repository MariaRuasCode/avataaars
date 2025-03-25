import * as React from 'react';
import { uniqueId } from 'lodash';

import FacialHair from './facialHair';
import HairColor from './HairColor';

export default class ShortHairWavy extends React.Component {
  static optionValue = 'ShortHairWavy';

  private filter1 = uniqueId('react-filter-');
  private mask1 = uniqueId('react-mask-');
  private mask2 = uniqueId('react-mask-');
  private path1 = uniqueId('react-path-');
  private path2 = uniqueId('react-path-');

  render() {
    const { filter1, mask1, mask2, path1, path2 } = this;

    return (
      <g id="Top" strokeWidth="1" fillRule="evenodd">
        <defs>
          <rect id={path2} x="0" y="0" width="264" height="280" />
          <path
            d="M72 40c-10 20-16 40-16 60 0 20 6 40 18 50 12 10 28 10 44 10s32 0 44-10c12-10 18-30 18-50 0-20-6-40-16-60-10-20-26-30-46-30s-36 10-46 30Z"
            id={path1}
          />
          <filter
            x="-0.8%"
            y="-2.0%"
            width="101.5%"
            height="108.0%"
            filterUnits="objectBoundingBox"
            id={filter1}
          >
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"
              type="matrix"
              in="shadowOffsetOuter1"
              result="shadowMatrixOuter1"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <mask id={mask2} fill="white">
          <use xlinkHref={'#' + path2} />
        </mask>
        <g id="Mask" />
        <g id="Top/Short-Hair/Wavy" mask={`url(#${mask2})`}>
          <g transform="translate(-1.000000, 0.000000)">
            <FacialHair />
            <mask id={mask1} fill="white">
              <use xlinkHref={'#' + path1} />
            </mask>
            <use
              id="Hair-Mask"
              stroke="none"
              fill="#252E32"
              fillRule="evenodd"
              xlinkHref={'#' + path1}
            />
            <HairColor maskID={mask1} />
            {this.props.children}
          </g>
        </g>
      </g>
    );
  }
}

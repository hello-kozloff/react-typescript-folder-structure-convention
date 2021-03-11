import React from 'react';
import styled from 'styled-components';
import { getDefaultProps } from '../../helper';

/**
 * The image props type.
 */
export interface IImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {

  /**
   * The image width.
   */
  width?: string;

  /**
   * The image height.
   */
  height?: string;

  /**
   * The image border-radius.
   */
  radius?: string;

}

/**
 * The image atom.
 * @param props
 * @constructor
 */
function Image(props: IImageProps): React.ReactElement<IImageProps> {
  const Tag = styled.img<IImageProps>`
    border-radius: ${({ radius }) => radius};
    object-fit: cover;
    height: ${({ height }) => height};
    width: ${({ width }) => width};
  `;

  return (
    <Tag
      {...getDefaultProps(props, {
        radius: '5px',
        height: 'auto',
        width: 'auto'
      })}
    />
  )
}

export default Image;
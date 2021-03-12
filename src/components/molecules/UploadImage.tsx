import React from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { IImageProps } from '../atoms';

/**
 * The upload-image props type.
 */
export type IUploadImageProps = Pick<IImageProps, 'radius'> & {

  /**
   * The image atom content.
   */
  children: React.ComponentElement<IImageProps, any>;

}

/**
 * The upload-image atom.
 * @param props
 * @constructor
 */
function UploadImage(props: IUploadImageProps): React.ReactElement<IUploadImageProps> {
  const theme = React.useContext(ThemeContext);
  const { children: Image } = props;

  const src = Image.props.src;
  const width = Image.props.width;
  const height = Image.props.height;
  const radius = props.radius;

  const TagWithFocus = css`
    border-color: ${theme.dark.color.white_40};
    background-image: url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M42.1875 2H7.8125C3.50456 2 0 5.50456 0 9.8125V37.1563C0 41.4642 3.50456 44.9688 7.8125 44.9688H26.3672C27.1122 44.9688 27.7924 44.5449 28.1208 43.8758C28.4489 43.2071 28.368 42.4095 27.9118 41.8205L22.8031 35.218L36.9625 17.2077L46.0938 28.1009V31.3945C46.0938 32.4733 46.9681 33.3477 48.0469 33.3477C49.1257 33.3477 50 32.4733 50 31.3945V9.8125C50 5.50456 46.4954 2 42.1875 2ZM38.4109 12.8547C38.0329 12.4038 37.4725 12.1463 36.8835 12.1566C36.2949 12.1658 35.7422 12.4397 35.3786 12.9024L20.3381 32.0327L15.2164 25.4142C14.8464 24.9359 14.2761 24.6563 13.6719 24.6563C13.6711 24.6563 13.67 24.6563 13.6692 24.6563C13.0638 24.657 12.4928 24.9385 12.1239 25.4184L7.82547 31.0062C7.16782 31.8615 7.32765 33.0875 8.18253 33.7451C9.03778 34.4032 10.2638 34.243 10.9215 33.3881L13.6765 29.8069L22.3862 41.0625H7.8125C5.65872 41.0625 3.90625 39.31 3.90625 37.1563V9.8125C3.90625 7.65872 5.65872 5.90625 7.8125 5.90625H42.1875C44.3413 5.90625 46.0938 7.65872 46.0938 9.8125V22.0203L38.4109 12.8547ZM13.6719 9.03125C10.4408 9.03125 7.8125 11.6596 7.8125 14.8906C7.8125 18.1217 10.4408 20.75 13.6719 20.75C16.9029 20.75 19.5312 18.1217 19.5312 14.8906C19.5312 11.6596 16.9029 9.03125 13.6719 9.03125ZM13.6719 16.8438C12.595 16.8438 11.7188 15.9675 11.7188 14.8906C11.7188 13.8137 12.595 12.9375 13.6719 12.9375C14.7488 12.9375 15.625 13.8137 15.625 14.8906C15.625 15.9675 14.7488 16.8438 13.6719 16.8438ZM50 39.207C50 40.2858 49.1257 41.1602 48.0469 41.1602H42.6758V46.5313C42.6758 47.6101 41.8015 48.4844 40.7227 48.4844C39.6439 48.4844 38.7695 47.6101 38.7695 46.5313V41.1602H33.3984C32.3196 41.1602 31.4453 40.2858 31.4453 39.207C31.4453 38.1282 32.3196 37.2539 33.3984 37.2539H38.7695V31.8828C38.7695 30.804 39.6439 29.9297 40.7227 29.9297C41.8015 29.9297 42.6758 30.804 42.6758 31.8828V37.2539H48.0469C49.1257 37.2539 50 38.1282 50 39.207Z' fill='white' fill-opacity='0.4'/%3E%3C/svg%3E%0A");
  `;

  const Tag = styled.label<Pick<IImageProps, 'src' | 'width' | 'height'> & Pick<IUploadImageProps, 'radius'>>`
    position: relative;
    display: inline-block;
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    outline: none;
    user-select: none;
    cursor: pointer;
    
    &:before {
      content: "";
      
      position: absolute;
      z-index: 100;
      
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      
      border-radius: ${({ radius }) => radius};
      border: 2px dashed transparent;
      background-repeat: no-repeat;
      background-position: center;
      transition: ${theme.dark.transition.default};
      
      ${({ src }) => !src && TagWithFocus};
    }
    
    &:hover:before,
    &:focus:before {
      ${TagWithFocus};
      background-color: ${theme.dark.color.dark_90};
    }
    
    &:focus:before {
      border-color: ${theme.dark.color.primary};
    }
  `;

  const Input = styled.input`
    visibility: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
  `;

  const tagProps = {
    src,
    width,
    height,
    radius
  };

  return (
    <Tag tabIndex={0} {...tagProps}>
      {src && Image}
      <Input type="file" />
    </Tag>
  );
}

export default UploadImage;
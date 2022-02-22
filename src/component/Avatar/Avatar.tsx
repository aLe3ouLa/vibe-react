import React from 'react';
import styled, { css } from 'styled-components';
import { ColorToken } from '../../shared-design/colors';
import { IAvatar, AvatarColors, AvatarSize } from './IAvatar';
import AvatarContent from './Content';

const SizeScale = {
  large: 5,
  medium: 3.6,
  small: 2.6,
};

const AvatarStyle = styled.div<{
  size: AvatarSize;
  backgroundColor: AvatarColors;
  square?: boolean;
  disabled?: boolean;
}>`
  border-color: 2px solid #e6e9ef;

  ${(props) => css`
    background: ${ColorToken.content[props.backgroundColor]};
    width: ${SizeScale[props.size]}rem;
    height: ${SizeScale[props.size]}rem;
    border-radius: ${props.square ? '4px' : '50%'};
    opacity: ${props.disabled ? 0.65 : 1};
  `};
`;

const Avatar: React.FC<IAvatar> = ({
  size = 'large',
  backgroundColor = 'chili_blue',
  type = 'text',
  text = undefined,
  square = false,
  icon: Icon = undefined,
  src = undefined,
  disabled = false,
  role = undefined,
  ariaLabel = undefined,
  tabIndex = 0,
  ariaHidden = false,
}: // topLeftBadgeProps = undefined,
// topRightBadgeProps = undefined,
// bottomLeftBadgeProps = undefined,
// bottomRightBadgeProps = undefined,
IAvatar) => (
  <AvatarStyle
    size={size}
    backgroundColor={backgroundColor}
    square={square}
    disabled={disabled}
    aria-hidden={ariaHidden}
    tabIndex={tabIndex}
  >
    <AvatarContent
      type={type}
      size={size}
      src={src}
      icon={Icon}
      text={text}
      ariaLabel={ariaLabel}
      role={role}
      square={square}
    />
  </AvatarStyle>
);

export default Avatar;

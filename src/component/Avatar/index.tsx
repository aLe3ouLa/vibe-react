import React from 'react';
import styled, { css } from 'styled-components';
import { IAvatar, AvatarSizes, AvatarColors, AvatarTypes } from './IAvatar';

const SizeScale = {
  [AvatarSizes.LARGE]: 5,
  [AvatarSizes.MEDIUM]: 3.6,
  [AvatarSizes.SMALL]: 2.6,
};

const FontScale = {
  [AvatarSizes.LARGE]: 1.8,
  [AvatarSizes.MEDIUM]: 1.4,
  [AvatarSizes.SMALL]: 1.2,
};

const AvatarStyle = styled.div<{
  size: AvatarSizes;
  color: AvatarColors;
  square?: boolean;
  disabled?: boolean;
}>`
  border-color: 2px solid #e6e9ef;

  ${(props) => css`
    background: ${props.color};
    width: ${SizeScale[props.size]}rem;
    height: ${SizeScale[props.size]}rem;
    border-radius: ${props.square ? '4px' : '50%'};
    opacity: ${props.disabled ? 0.7 : 1};
  `};
`;

const AvatarText = styled.span<{ size: AvatarSizes }>`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-weight: 600;

  ${(props) => css`
    font-size: ${FontScale[props.size]}rem;
  `};

  width: 100%;
  height: 100%;
`;

const AvatarIcon = styled.svg``;

const Avatar: React.FC<IAvatar> = ({
  size = AvatarSizes.SMALL,
  color = AvatarColors.LIPSTICK,
  type = AvatarTypes.TEXT,
  text,
  square,
  icon,
  src,
  disabled,
}: IAvatar) => {
  let avatarContent = null;

  switch (type) {
    case AvatarTypes.IMAGE:
      if (!src) {
        avatarContent = <AvatarText size={size}>{text}</AvatarText>;
        break;
      }
      avatarContent = <AvatarIcon>{src}</AvatarIcon>;
      break;
    case AvatarTypes.ICON:
      if (!icon) {
        avatarContent = <AvatarText size={size}>{text}</AvatarText>;
        break;
      }
      avatarContent = <AvatarIcon>{icon}</AvatarIcon>;
      break;
    case AvatarTypes.TEXT:
    default:
      avatarContent = <AvatarText size={size}>{text}</AvatarText>;
  }

  return (
    <AvatarStyle size={size} color={color} square={square} disabled={disabled}>
      {avatarContent}
    </AvatarStyle>
  );
};
export default Avatar;

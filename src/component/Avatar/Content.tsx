import React from 'react';
import styled, { css } from 'styled-components';
import { IAvatar, AvatarSize } from './IAvatar';

const FontScale = {
  large: 1.8,
  medium: 1.4,
  small: 1.2,
};

const AvatarText = styled.span<{ size: AvatarSize }>`
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

const AvatarIcon = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;

  & svg {
    width: 26px;
  }
`;

const AvatarImage = styled.img<{
  square?: boolean;
  src?: string;
}>`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: inline-block;

  ${(props) => css`
    background: url(${props.src});
    border-radius: ${props.square ? '4px' : '50%'};
  `}

  background-position: 50% 50%;
  background-size: cover;
`;

const AvatarContent: React.FC<IAvatar> = ({
  type = 'text',
  src = undefined,
  icon: Icon = undefined,
  text = undefined,
  size = 'large',
  role = undefined,
  ariaLabel = undefined,
  square = false,
}: IAvatar) => {
  switch (type) {
    case 'image':
      if (!src) {
        return <AvatarText size={size}>{text}</AvatarText>;
      }
      return (
        <AvatarImage
          role={role}
          alt={ariaLabel}
          src={src as string}
          square={square}
        />
      );

    case 'icon':
      if (!Icon) {
        return <AvatarText size={size}>{text}</AvatarText>;
      }

      return (
        <AvatarIcon role="img">
          <Icon />
        </AvatarIcon>
      );
    case 'text':
    default:
      return (
        <AvatarText size={size} aria-label={ariaLabel} role={role}>
          {text}
        </AvatarText>
      );
  }
};
export default AvatarContent;

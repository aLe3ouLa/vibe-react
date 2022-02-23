import React from 'react';
import styled, { css } from 'styled-components';
import { ColorToken } from '../../shared-design/colors';
import { AvatarSize } from './types/IAvatar';
import { IBadge } from './types/IBadge';

const BadgeSize = {
  large: 2,
  medium: 1.6,
  small: 1.2,
};

const BadgeStyle = styled.div<{
  size: AvatarSize;
}>`
  background-color: ${ColorToken.text.primary_text_color};
  color: ${ColorToken.text.text_color_on_inverted};
  border: 1px solid ${ColorToken.text.text_color_on_inverted};
  border-radius: 50%;
  ${(props) => css`
    width: ${BadgeSize[props.size]}rem;
    height: ${BadgeSize[props.size]}rem;
  `};

  display: grid;
  place-items: center;

  & svg {
    width: 75%;
  }
`;

const Badge: React.FC<IBadge> = ({
  src: Icon = undefined,
  ariaLabel,
  tabIndex,
  size = 'large',
  ...otherProps
}: IBadge) => {
  if (!Icon) return null;
  return (
    <BadgeStyle
      size={size}
      role="img"
      // ariaLabel={ariaLabel}
      // clickable={tabIndex === -1}
      {...otherProps}
    >
      <Icon />
    </BadgeStyle>
  );
};

export default Badge;

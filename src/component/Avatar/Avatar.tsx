import React from 'react';
import styled, { css } from 'styled-components';
import { ColorToken } from '../../shared-design/colors';
import { IAvatar, AvatarColors, AvatarSize } from './types/IAvatar';
import AvatarContent from './Content';
import Badge from './Badge';

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

  position: relative;
`;

const TopLeftBadge = styled.div`
  grid-row: 1;
  grid-column: 1;
  justify-self: start;
`;

const TopRightBadge = styled.div`
  grid-row: 1;
  grid-column: 2;
  justify-self: end;
`;

const BottomLeftBadge = styled.div`
  grid-row: 2;
  grid-column: 1;
  justify-self: start;
  align-self: end;
`;

const BottomRightBadge = styled.div`
  grid-row: 2;
  grid-column: 2;
  justify-self: end;
  align-self: end;
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  grid-template-columns: 50% 50%;
  margin-left: auto;
  margin-right: auto;
  height: 120%;
  width: 120%;
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
  topLeftBadgeProps = undefined,
  topRightBadgeProps = undefined,
  bottomLeftBadgeProps = undefined,
  bottomRightBadgeProps = undefined,
}: IAvatar) => {
  const badgeContainer = [];

  if (topLeftBadgeProps) {
    badgeContainer.push(
      <TopLeftBadge>
        <Badge size={size} {...topLeftBadgeProps} />
      </TopLeftBadge>,
    );
  }

  if (topRightBadgeProps) {
    badgeContainer.push(
      <TopRightBadge>
        <Badge size={size} {...topLeftBadgeProps} />
      </TopRightBadge>,
    );
  }

  if (bottomLeftBadgeProps) {
    badgeContainer.push(
      <BottomLeftBadge>
        <Badge size={size} {...topLeftBadgeProps} />
      </BottomLeftBadge>,
    );
  }

  if (bottomRightBadgeProps) {
    badgeContainer.push(
      <BottomRightBadge>
        <Badge size={size} {...topLeftBadgeProps} />
      </BottomRightBadge>,
    );
  }

  return (
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
      <BadgeWrapper>{badgeContainer}</BadgeWrapper>
    </AvatarStyle>
  );
};

export default Avatar;

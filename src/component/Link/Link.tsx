import React, { useCallback } from 'react';
import styled from 'styled-components';
import { ColorToken } from '../../shared-design/colors';
import { ILink } from './ILink';

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: ${ColorToken.text.link_color};
  text-decoration: none;
  writing-mode: horizontal-tb;
  &:hover {
    span {
      text-decoration: underline;
    }
  }
  /* &--icon-start {
    line-height: 24px;
    margin-right: $spacing-small;
  }
  &--icon-end {
    line-height: 24px;
    margin-left: $spacing-small;
  } */
`;

const Link = ({
  href,
  text,
  rel,
  onClick,
  target,
  ariaLabelDescription,
  // icon,
  // iconPosition,
  id,
  ariaLabeledBy,
  disableNavigation,
}: ILink) => {
  // const isStart = iconPosition === LinkPosition.START;

  const onClickWrapper = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (disableNavigation) {
        e.preventDefault();
      }
      if (onClick) onClick(e);
    },
    [disableNavigation, onClick],
  );

  return (
    <StyledLink
      id={id}
      href={href}
      rel={rel}
      onClick={onClickWrapper}
      target={target}
      // className={cx('monday-style-link', overrideClassName)}
      aria-label={ariaLabelDescription}
      aria-labelledby={ariaLabeledBy}
    >
      {/* {getIcon(isStart, icon, 'monday-style-link--icon-start')} */}
      <span>{text}</span>
      {/* {getIcon(!isStart, icon, 'monday-style-link--icon-end')} */}
    </StyledLink>
  );
};

export default Link;

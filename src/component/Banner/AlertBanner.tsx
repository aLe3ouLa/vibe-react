/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable arrow-body-style */
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import Close from '../../assets/icons/Close';
import { ColorToken } from '../../shared-design/colors';
import { spacing } from '../../shared-design/spacing';
import Button from '../Button/Button';
import { ButtonKind, ButtonSize } from '../Button/IButton';
import { BannerColors, IBanner } from './IAlertBanner';
import AlertBannerText from './AlertContent/AlertText';

const AlertBannerStyle = styled.div<{
  backgroundColor: BannerColors;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;
  font-weight: 400;
  width: 100%;
  font-size: 1.4rem;

  ${(props) => css`
    background-color: ${ColorToken.semantic[props.backgroundColor]};
    color: ${props.backgroundColor === 'inverted_color_background'
      ? ColorToken.text.text_color_on_inverted
      : ColorToken.text.text_color_on_primary};
  `}
`;

const Inner = styled.div`
  flex: 1 1 auto;
  display: flex;
  height: 100%;
  min-width: 0;
  align-items: center;
  justify-content: center;
  padding-left: ${spacing.md}rem;
`;

const AlertBanner = ({
  backgroundColor = 'primary_color',
  isCloseHidden = false,
  ariaLabel = '',
  onClose,
  children: originalChildren,
}: IBanner) => {
  const isDarkBackground = backgroundColor === 'inverted_color_background';
  const children = useMemo(() => {
    const allChildren = React.Children.toArray(originalChildren);
    const filteredChildren = allChildren.filter((child) => {
      const isValidChild =
        (child as React.ReactElement)?.type?.isAlertBannerItem ?? false;
      if (isValidChild) return true;
      // eslint-disable-next-line no-console
      console.error(
        'Alert banner child is not supported. Please use AlertBannerText, AlertBannerLink or AlertBannerButton.',
        child,
      );
      return false;
    });

    return filteredChildren.map((child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          ...child?.props,
          marginLeft: index > 0,
          isDarkBackground,
        });
      }
    });
  }, [originalChildren, isDarkBackground]);

  return (
    <AlertBannerStyle
      backgroundColor={backgroundColor}
      role="banner"
      aria-label={ariaLabel || 'banner'}
    >
      <Inner>{children}</Inner>
      <div>
        {isCloseHidden ? null : (
          <Button
            onClick={onClose}
            size={ButtonSize.SMALL}
            kind={ButtonKind.TERTIARY}
            color={
              isDarkBackground
                ? ColorToken.text.text_color_on_inverted
                : ColorToken.text.text_color_on_primary
            }
            ariaLabel="close-toast"
          >
            <Close />
          </Button>
        )}
      </div>
    </AlertBannerStyle>
  );
};

export default AlertBanner;

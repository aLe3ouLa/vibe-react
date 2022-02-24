import React from 'react';
import styled from 'styled-components';
import Close from '../../assets/icons/Close';
import { ColorToken } from '../../shared-design/colors';
import Button from '../Button/Button';
import { ButtonKind, ButtonSize } from '../Button/IButton';
import { IBanner } from './IAlertBanner';

const AlertBannerStyle = styled.div`
  display: flex;
`;

const AlertBanner = ({
  backgroundColor = 'primary_background_color',
  isCloseHidden = false,
  ariaLabel = '',
  onClose,
  children,
}: IBanner) => {
  const isDarkBackground = backgroundColor === 'inverted_color_background';

  return (
    <AlertBannerStyle role="banner" aria-label={ariaLabel || 'banner'}>
      <div>{children}</div>
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

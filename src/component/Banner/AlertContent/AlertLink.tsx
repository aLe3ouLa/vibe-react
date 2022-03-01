import React from 'react';
import styled, { css } from 'styled-components';
import { ColorToken } from '../../../shared-design/colors';
import { spacing } from '../../../shared-design/spacing';
import Link from '../../Link/Link';

const Wrapper = styled.div<{
  marginLeft?: boolean;
  isDarkBackground?: boolean;
}>`
  & a {
    ${(prop) =>
      css`
        color: ${prop.isDarkBackground
          ? ColorToken.text.text_color_on_inverted
          : ColorToken.text.text_color_on_primary};
        margin-left: ${prop.marginLeft ? spacing.s : 0}rem;
      `}
    text-decoration: underline;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
  }
`;

type AlertBannerLinkProps = {
  marginLeft?: boolean;
  isDarkBackground?: boolean;
  href?: string;
  text?: string;
};

const AlertBannerLink = (props: AlertBannerLinkProps) => {
  const { marginLeft, isDarkBackground, ...linkProps } = props;
  return (
    <Wrapper isDarkBackground={isDarkBackground} marginLeft={marginLeft}>
      <Link {...linkProps} rel="noreferrer" />
    </Wrapper>
  );
};

AlertBannerLink.isAlertBannerItem = true;

export default AlertBannerLink;

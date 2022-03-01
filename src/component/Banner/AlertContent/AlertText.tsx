import React from 'react';
import styled, { css } from 'styled-components';
import { spacing } from '../../../shared-design/spacing';

const Text = styled.div<{
  marginLeft?: boolean;
}>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${(props) => css`
    margin-left: ${props.marginLeft ? spacing.s : 0}rem;
  `}
`;

const AlertBannerText = ({
  text,
  marginLeft,
}: {
  text: string;
  marginLeft?: boolean;
}) => (
  <Text marginLeft={marginLeft}>
    <span>{text}</span>
  </Text>
);

AlertBannerText.isAlertBannerItem = true;
AlertBannerText.isAlertBannerText = true;

export default AlertBannerText;

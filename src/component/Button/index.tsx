import React from 'react';
import styled, { css } from 'styled-components';
import { IButton, ButtonKind } from './IButton';
import { ColorToken } from '../../shared-design/colors';

const ButtonStyle = styled.button<{
  kind: ButtonKind;
}>`
  ${(props) => css`
    background-color: ${props.kind === ButtonKind.PRIMARY
      ? ColorToken.semantic.primary_color
      : ColorToken.background.primary_background_color};
  `}
`;

const Button: React.FC<IButton> = ({ kind }: IButton) => (
  <ButtonStyle kind={kind}>Button</ButtonStyle>
);

export default Button;

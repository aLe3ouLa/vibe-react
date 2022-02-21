import React from 'react';
import styled, { css } from 'styled-components';
import { IButton, ButtonKind, ButtonSize } from './IButton';
import { ColorToken } from '../../shared-design/colors';
import { spacing } from '../../shared-design/spacing';

const ButtonKinds = {
  [ButtonKind.PRIMARY]: `
    color: ${ColorToken.text.text_color_on_primary};
    background-color: ${ColorToken.semantic.primary_color};

    :hover {
      background-color: ${ColorToken.semantic.primary_hover_color};
    }

    :active {
      transform: scale(0.95) translate3d(0, 0, 0);
    }
  `,
  [ButtonKind.SECONDARY]: `
    color: ${ColorToken.text.primary_text_color};
    border: 1px solid;
    border-color: ${ColorToken.border.ui_border_color};
    color: ${ColorToken.text.primary_text_color};
    background-color: transparent;

    :hover {
      background-color: ${ColorToken.background.primary_background_hover_color};
    }

    :active {
      transform: scale(0.95) translate3d(0, 0, 0);
    }
  `,
  [ButtonKind.TERTIARY]: `
    color: ${ColorToken.text.primary_text_color};
    background-color: transparent;

    :hover {
      background-color: ${ColorToken.background.primary_background_hover_color};
    }

    :active {
      transform: scale(0.95) translate3d(0, 0, 0);
    }
  `,
};

const ButtonStyle = styled.button<{
  kind: ButtonKind;
  size: ButtonSize;
}>`
  outline: none;
  border: none;
  height: auto;
  border-radius: 4px;

  cursor: pointer;
  white-space: nowrap;

  ${(props) => css`
    ${ButtonKinds[props.kind]}
  `}
  ${() => css`
    padding: 8px 16px;

    transition: 50ms transform, 0.1s cubic-bezier(0, 0, 0.35, 1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    min-width: ${spacing.md};
  `}
`;

const Button: React.FC<IButton> = ({
  kind = ButtonKind.PRIMARY,
  size = ButtonSize.MEDIUM,
}: IButton) => (
  <ButtonStyle kind={kind} size={size}>
    Button
  </ButtonStyle>
);

export default Button;

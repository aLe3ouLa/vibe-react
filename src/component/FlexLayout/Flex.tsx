/* eslint-disable no-confusing-arrow */
import React from 'react';
import styled from 'styled-components';
// import Clickable from 'components/Clickable/Clickable';
import { IFlex, GAPS, ALIGN, JUSTIFY, DIRECTIONS } from './IFlex';

const GapSize: Record<GAPS, number> = {
  NONE: 0,
  SMALL: 1.2,
  MEDIUM: 1.6,
  LARGE: 1.8,
};

const StyledFlex = styled.div<{
  justify: string;
  align: string;
  wrap: boolean;
  gap: number | GAPS;
  direction: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction.toLowerCase()};
  justify-content: ${(props) => props.justify.toLowerCase()};
  align-items: ${(props) => props.align.toLowerCase()};
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
  gap: ${(props) =>
    typeof props.gap === 'number' ? props.gap : GapSize[props.gap]}; ;
`;

const Flex = ({
  id,
  elementType = 'div',
  direction = DIRECTIONS.ROW,
  wrap = false,
  children,
  justify = JUSTIFY.START,
  align = ALIGN.CENTER,
  gap = GAPS.NONE,
  onClick,
  ariaLabelledby = '',
}: IFlex) => (
  <StyledFlex
    id={id}
    direction={direction}
    justify={justify}
    align={align}
    wrap={wrap}
    gap={gap}
    // {...onClickProps}
    // onClick={onClick}
    // style={overrideStyle}
  >
    {children}
  </StyledFlex>
);

export default Flex;

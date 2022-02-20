import React from 'react';

interface StackProps {
  gap?: number;
  direction?: 'row' | 'column';
  wrap?: boolean;
  children?: any;
}

export function Stack({
  children,
  gap = 2,
  direction = 'row',
  wrap = false,
  ...props
}: StackProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: `${gap * 0.25}rem`,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        flexDirection: direction,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

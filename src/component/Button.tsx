import React from 'react';

interface ButtonProps {
  backgroundColor?: string;
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'md',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  let scale: number = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 'none',
  };

  return (
    <button type="button" style={style} {...props}>
      {label}
    </button>
  );
};

import React from 'react';
import { ColorToken } from '../../shared-design/colors';

export type BannerColors = keyof typeof ColorToken.semantic;

export interface IBanner {
  backgroundColor?: BannerColors;
  isCloseHidden?: boolean;
  ariaLabel?: string;
  onClose: () => void;
  children: React.ReactNode;
}

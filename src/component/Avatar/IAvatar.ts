import { ColorToken } from '../../shared-design/colors';

export enum AvatarTypes {
  TEXT = 'TEXT',
  ICON = 'ICON',
  IMAGE = 'IMAGE',
}

export type AvatarType = 'text' | 'icon' | 'image';
export type AvatarSize = 'small' | 'medium' | 'large';
export type AvatarColors = keyof typeof ColorToken.content;

export interface IAvatar {
  type: AvatarType;
  size: AvatarSize;
  backgroundColor?: AvatarColors;
  text?: string;
  square?: boolean;
  icon?: React.FC | string;
  src?: string | object;
  disabled?: boolean;
  role?: string;
  ariaLabel?: string;
  tabIndex?: number;
  ariaHidden?: boolean;
  topLeftBadgeProps?: object;
  topRightBadgeProps?: object;
  bottomLeftBadgeProps?: object;
  bottomRightBadgeProps?: object;
}

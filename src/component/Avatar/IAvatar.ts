export enum AvatarTypes {
  TEXT = 'TEXT',
  ICON = 'ICON',
  IMAGE = 'IMAGE',
}

export enum AvatarSizes {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export enum AvatarColors {
  WORKING_ORANGE = '#FDAB3D',
  BRIGHT_BLUE = '#579BFC',
  AQUAMARINE = '#4ECCC6',
  DONE_GREEN = '#00C875',
  LIPSTICK = '#FF5AC4',
}

export interface IAvatar {
  type: AvatarTypes;
  size: AvatarSizes;
  color: AvatarColors;
  text: string;
  square?: boolean;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  src?: string;
  disabled?: boolean;
}

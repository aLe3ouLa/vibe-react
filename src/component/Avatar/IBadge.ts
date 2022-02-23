import { AvatarSize } from './IAvatar';

export interface IBadge {
  size?: AvatarSize;
  src?: React.FC;
  ariaLabel?: string;
  tabIndex?: number;
}

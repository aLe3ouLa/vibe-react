export enum LinkTargets {
  NEW_WINDOW = 'NEW_WINDOW',
  PARENT = 'PARENT',
  SELF = 'SELF',
  TOP = 'TOP',
}

export enum LinkPosition {
  START = 'START',
  END = 'END',
}

export interface ILink {
  id?: string;
  /**
   * the href to link the component to
   */
  href?: string;
  /**
   * the link text
   */
  text?: string;
  /**
   * The rel attribute defines the relationship between a linked resource and the current document
   */
  rel: string;
  /**
   * on link click callback
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  /**
   * the target window where the link should be open
   */
  target?: LinkTargets;
  /**
   * Aria label
   */
  ariaLabelDescription?: string;
  /**
   * icon to add to the link
   */
  icon?: React.FC | string;
  /**
   * where the icon should be located
   */
  iconPosition?: LinkPosition;
  /**
   * Id to add to the link element
   */
  ariaLabeledBy?: string;
  /**
   * Disable navigation on click
   */
  disableNavigation?: boolean;
}

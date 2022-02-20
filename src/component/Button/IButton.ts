export enum ButtonKind {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
}

export enum ButtonSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export enum ButtonType {
  BUTTON = 'BUTTON',
  SUBMIT = 'SUBMIT',
  RESET = 'RESET',
}

export interface IButton {
  kind: ButtonKind;
  onClick: () => void;
  onMouseDown: () => void;
  blurOnMouseUp: boolean;
  name: string;
  size: ButtonSize;
  color: string;
  type: ButtonType;
  disabled: boolean;
  rightIcon: React.FC;
  leftIcon: React.FC;
  success: boolean;
  successIcon: React.FC;
  successText: string;
  loading: boolean;
  active: boolean;
  id: string;
  marginRight: boolean;
  marginLeft: boolean;
  ariaLabeledBy: string;
  ariaLabel: string;
  ariaHasPopup: string | boolean;
  ariaExpanded: boolean;
  ariaControls: string;
  onFocus: () => void;
  onBlur: () => void;
  rightFlat: boolean;
  leftFlat: boolean;
  preventClickAnimation: boolean;
  noSidePadding: boolean;
  defaultTextColorOnPrimaryColor: string;
}

export enum DIRECTIONS {
  ROW = 'ROW',
  COLUMN = 'COLUMN',
}

export enum JUSTIFY {
  START = 'START',
  CENTER = 'CENTER',
  END = 'END',
  SPACE_BETWEEN = 'SPACE_BETWEEN',
  SPACE_AROUND = 'SPACE_AROUND',
}

export enum ALIGN {
  START = 'START',
  CENTER = 'CENTER',
  END = 'END',
  STRETCH = 'STRETCH',
}

export enum GAPS {
  NONE = 'NONE',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export interface IFlex {
  id?: string;
  style?: object;
  direction: DIRECTIONS;
  elementType: string;
  wrap: boolean;
  children: React.ReactNode;
  justify: JUSTIFY;
  align: ALIGN;
  gap: GAPS | number;
  ariaLabelledby?: string;
  onClick: () => void;
}

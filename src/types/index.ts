import React, {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';

type ButtonTypes =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>;

export type LineColors = 'primary' | 'secondary';

export type LogoProps = {
  color?: 'white' | 'black';
  size?: 'normal' | 'large';
  hideOnMobile?: boolean;
};

export type LineBottom = {
  lineBottomDefault?: boolean;
  lineBottomLarge?: boolean;
};

export type HeadingProps = {
  children: string;
  color?: 'black' | 'white';
  lineLeft?: boolean;
  lineBottom?: 'default' | 'large' | 'none';
  size?: 'small' | 'medium';
  lineColor?: LineColors;
};

export type ButtonProps = ButtonTypes & {
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
};

export type BannerProps = {
  image: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbonTitle?: ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

export type RibbonColors = 'primary' | 'secondary';
export type RibbonSizes = 'default' | 'small' | 'large';

export type RibbonProps = {
  children: ReactNode;
  color?: RibbonColors;
  size?: RibbonSizes;
};

export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
  floatImage?: string;
  alignment?: 'left' | 'right';
};

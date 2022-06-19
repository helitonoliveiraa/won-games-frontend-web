import React, {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  InputHTMLAttributes,
} from 'react';
import { Settings } from 'react-slick';

/** COMPONENTS TYPES */

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
  minimal?: boolean;
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

export type RibbonColors = 'primary' | 'secondary' | 'lightOrange';
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

export type GameCardProps = {
  image: string;
  title: string;
  developer: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFavorite?: () => void;
  ribbonTitle?: ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

export type SliderSettings = Settings;

export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSettings;
};

export type GameCardSliderProps = {
  items: GameCardProps[];
  arrowColor?: 'white' | 'black';
};

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  value?: string | ReadonlyArray<string> | number | undefined;
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
};

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  value?: RadioValue;
  onCheck?: (value?: RadioValue) => void;
};

type TextBox = string | ReadonlyArray<string> | number | undefined;

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelFor?: string;
  initialValue?: string;
  onInput?: (newText: TextBox) => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
};

/** TEMPLATE TYPES */
export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  upcomingMoreGames: GameCardProps[];
  freeHighlight: HighlightProps;
  freeGames: GameCardProps[];
};

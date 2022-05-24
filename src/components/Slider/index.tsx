import ReactSlider, { Settings } from 'react-slick';

import { SliderProps } from '@/types';

import * as S from './styles';

export function Slider({ children, settings }: SliderProps) {
  return (
    <S.Container>
      <ReactSlider {...settings}>{children}</ReactSlider>
    </S.Container>
  );
}

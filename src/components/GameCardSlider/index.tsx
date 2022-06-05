import { GameCardSliderProps, SliderSettings } from '@/types';

import { GameCard } from '../GameCard';
import { NextArrow } from '../NextArrow';
import { PreviousArrow } from '../PreviousArrow';
import { Slider } from '../Slider';

import * as S from './styles';

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
  prevArrow: <PreviousArrow aria-label="previous games" />,
  nextArrow: <NextArrow aria-label="next games" />,
};

export function GameCardSlider({
  items,
  arrowColor = 'white',
}: GameCardSliderProps) {
  return (
    <S.Container arrowColor={arrowColor}>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <GameCard key={index} {...item} />
        ))}
      </Slider>
    </S.Container>
  );
}

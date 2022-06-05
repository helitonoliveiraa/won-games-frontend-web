import { BannerProps, SliderSettings } from '@/types';

import { Banner } from '../Banner';
import { Slider } from '../Slider';

import * as S from './styles';

type BannerSliderProps = {
  items: BannerProps[];
};

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1070,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

export function BannerSlider({ items }: BannerSliderProps) {
  return (
    <S.Container>
      <Slider settings={settings}>
        {items.map(item => (
          <Banner {...item} key={item.title} />
        ))}
      </Slider>
    </S.Container>
  );
}

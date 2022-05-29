import { ComponentMeta } from '@storybook/react';

import { items } from './bannerItems.json';
import { BannerSlider } from './index';

export default {
  title: 'Components/BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof BannerSlider>;

export const Default: typeof BannerSlider = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
);

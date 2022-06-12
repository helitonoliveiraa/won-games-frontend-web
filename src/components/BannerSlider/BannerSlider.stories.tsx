import { ComponentMeta } from '@storybook/react';

import { BannerSlider } from './index';
import { items } from './mock';

export default {
  title: 'Components/BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof BannerSlider>;

export const Default: typeof BannerSlider = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
);

import { ComponentMeta } from '@storybook/react';

import { BannerSlider } from './index';

const items = [
  {
    image:
      'https://images.unsplash.com/photo-1511882150382-421056c89033?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtZSUyMHJhbmRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500',
    title: 'Test Game 1',
    subtitle: '<p>Just teste game one, just play it</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/test-game-1',
    ribbonTitle: 'Bestselling',
  },
  {
    image:
      'https://images.unsplash.com/photo-1594652634010-275456c808d0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZSUyMHJhbmRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500',
    title: 'Test Game 2',
    subtitle: '<p>Just teste game one, just play it</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/test-game-1',
    ribbonTitle: 'Bestselling',
  },
];

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

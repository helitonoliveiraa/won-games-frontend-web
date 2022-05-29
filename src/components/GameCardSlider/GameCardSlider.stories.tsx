import { ComponentMeta } from '@storybook/react';

import { items } from './gameCards.json';
import { GameCardSlider } from './index';

export default {
  title: 'Components/GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof GameCardSlider>;

export const Basic: typeof GameCardSlider = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
);

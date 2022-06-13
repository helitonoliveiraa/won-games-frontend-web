import { ComponentMeta } from '@storybook/react';

import { GameCardSlider } from './index';
import { items } from './mock';

export default {
  title: 'Components/GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof GameCardSlider>;

export const Basic: typeof GameCardSlider = args => (
  <div style={{ maxWidth: '130rem', margin: '20px auto' }}>
    <GameCardSlider {...args} />
  </div>
);

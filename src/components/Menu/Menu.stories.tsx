import { ComponentMeta } from '@storybook/react';

import { Menu } from './index';

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as ComponentMeta<typeof Menu>;

export const Basic: typeof Menu = args => <Menu {...args} />;

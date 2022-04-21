import { ComponentMeta } from '@storybook/react';

import { Heading } from './index';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Most popular',
    color: 'black',
  },
} as ComponentMeta<typeof Heading>;

export const Basic: typeof Heading = args => <Heading {...args} />;

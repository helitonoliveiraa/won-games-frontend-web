import { ComponentMeta } from '@storybook/react';

import { NextArrow } from './index';

export default {
  title: 'Components/NextArrow',
  component: NextArrow,
} as ComponentMeta<typeof NextArrow>;

export const Basic: typeof NextArrow = args => <NextArrow {...args} />;

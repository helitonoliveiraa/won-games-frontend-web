import { ComponentMeta } from '@storybook/react';
import { Logo } from './index';

export default {
  title: 'Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const Basic: typeof Logo = args => <Logo {...args} />;

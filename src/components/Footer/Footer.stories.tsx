import { ComponentMeta } from '@storybook/react';

import { Footer } from './index';

export default {
  title: 'Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Basic: typeof Footer = () => <Footer />;

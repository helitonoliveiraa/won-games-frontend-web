import { ComponentMeta } from '@storybook/react';

import { Banner } from './index';

export default {
  title: 'Components/Banner',
  component: Banner,
  args: {
    image:
      'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Game',
    subtitle: 'Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: 'https://google.com',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Banner>;

export const Default: typeof Banner = args => <Banner {...args} />;

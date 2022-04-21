import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Logo } from './index';

export default {
  title: 'Components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const Basic: ComponentStory<typeof Logo> = args => <Logo {...args} />;

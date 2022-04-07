import { FiShoppingCart } from 'react-icons/fi';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: 'function',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Buy now',
  size: 'medium',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <FiShoppingCart />,
};

export const AsLink = Template.bind({});
AsLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link',
};

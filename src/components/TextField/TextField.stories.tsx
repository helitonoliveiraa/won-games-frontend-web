import { FiMail } from 'react-icons/fi';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextField } from './index';

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'email',
    id: 'email',
    initialValue: '',
    placeholder: 'john.doe@potato.com',
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: 'function' },
    disabled: { type: 'boolean' },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => (
  <div style={{ maxWidth: 300, padding: 16 }}>
    <TextField {...args} />
  </div>
);

export const Default = Template.bind({});

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <FiMail />,
};

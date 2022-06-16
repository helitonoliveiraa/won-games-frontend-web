import { ComponentMeta } from '@storybook/react';

import { Radio } from './index';

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    background: {
      default: 'won-dark',
    },
  },
  argTypes: {
    onCheck: { action: 'checked' },
  },
} as ComponentMeta<typeof Radio>;

export const Default: typeof Radio = args => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        name="test"
        label="First"
        labelFor="first"
        id="first"
        value="first"
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Radio
        name="test"
        label="Second"
        labelFor="second"
        id="second"
        value="second"
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Radio
        name="test"
        label="Third"
        labelFor="third"
        id="third"
        value="third"
        defaultChecked
        {...args}
      />
    </div>
  </>
);

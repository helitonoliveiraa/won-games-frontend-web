import { ComponentMeta } from '@storybook/react';

import { Checkbox } from './index';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
  argTypes: {
    onCheck: { action: 'checked' },
  },
} as ComponentMeta<typeof Checkbox>;

export const Default: typeof Checkbox = args => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="Category"
        label="Action"
        labelFor="action"
        isChecked
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Checkbox
        name="Category"
        label="Adventure"
        labelFor="adventure"
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Checkbox
        name="Category"
        label="Strategy"
        labelFor="strategy"
        {...args}
      />
    </div>

    <div style={{ padding: 10 }}>
      <Checkbox name="Category" label="Feature" labelFor="feature" {...args} />
    </div>
  </>
);

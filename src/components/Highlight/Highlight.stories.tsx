import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Highlight } from './index';
import { item } from './mock';

export default {
  title: 'Components/Highlight',
  component: Highlight,
  args: {
    ...item,
  },
} as ComponentMeta<typeof Highlight>;

const Template: ComponentStory<typeof Highlight> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
);

export const Default = Template.bind({});

export const WithoutFloatImage = Template.bind({});
WithoutFloatImage.args = {
  floatImage: '/img/red-dead-float.png',
};

// export const Basic: typeof Highlight = args => <Highlight {...args} />;

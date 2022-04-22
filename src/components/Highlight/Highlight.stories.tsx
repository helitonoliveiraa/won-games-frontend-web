import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Highlight } from './index';

export default {
  title: 'Components/Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead está de de volta!',
    subtitle: 'Venha conhecer as novas aventuras de John Marston',
    buttonLabel: 'Buy now',
    buttonLink: 'https://www.google.com',
    backgroundImage: '/img/red-dead-img.png',
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

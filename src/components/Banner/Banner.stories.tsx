import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Ribbon } from '../Ribbon';
import { Basic as RibbonStories } from '../Ribbon/Ribbon.stories';

import { Banner } from './index';
import { image } from './mock';

export default {
  title: 'Components/Banner',
  component: Banner,
  subcomponents: {
    Ribbon,
  },
  args: { ...image },
  argTypes: {
    ribbonTitle: {
      type: 'string',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = args => (
  <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

const TemplateRibbon: ComponentStory<typeof Banner> = args => (
  <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
    <Banner {...args}>
      <RibbonStories>20% OFF</RibbonStories>
    </Banner>
  </div>
);

export const Default = Template.bind({});

export const WithRibbon = TemplateRibbon.bind({});
WithRibbon.args = {
  ribbonTitle: '20% OFF',
};

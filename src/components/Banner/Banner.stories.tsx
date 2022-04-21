import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Ribbon } from '../Ribbon';
import { Basic as RibbonStories } from '../Ribbon/Ribbon.stories';

import { Banner } from './index';

export default {
  title: 'Components/Banner',
  component: Banner,
  subcomponents: {
    Ribbon,
  },
  args: {
    image:
      'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Game',
    subtitle: 'Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: 'https://google.com',
  },
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

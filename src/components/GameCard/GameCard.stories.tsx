import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Ribbon } from '../Ribbon';
import { Basic as RibbonStories } from '../Ribbon/Ribbon.stories';

import { GameCard } from './index';
import { item } from './mock';

export default {
  title: 'Components/GameCard',
  subcomponents: {
    Ribbon,
  },
  args: {
    ...item,
  },
  argTypes: {
    onFavorite: {
      action: 'clicked',
    },
    ribbonTitle: {
      type: 'string',
    },
  },

  component: GameCard,
} as ComponentMeta<typeof GameCard>;

const Template: ComponentStory<typeof GameCard> = args => (
  <div style={{ maxWidth: '36.5rem' }}>
    <GameCard {...args} />
  </div>
);

const TemplateWithRibbon: ComponentStory<typeof GameCard> = args => (
  <div style={{ maxWidth: '36.5rem' }}>
    <GameCard {...args}>
      <RibbonStories>20% OFF</RibbonStories>
    </GameCard>
  </div>
);

export const Default = Template.bind({});

export const WithRibbon = TemplateWithRibbon.bind({});
WithRibbon.args = {
  ribbonTitle: '20% OFF',
  ribbonColor: 'lightOrange',
};

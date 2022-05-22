import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Ribbon } from '../Ribbon';
import { Basic as RibbonStories } from '../Ribbon/Ribbon.stories';

import { GameCard } from './index';

export default {
  title: 'GameCard',
  subcomponents: {
    Ribbon,
  },
  args: {
    title: 'Read Dead Redemption',
    developer: 'Rockstar Games',
    image:
      'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    price: 'R$ 345,56',
    promotionalPrice: 'R$ 205,34',
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

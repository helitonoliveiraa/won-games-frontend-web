import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MediaMatch } from './index';

export default {
  title: 'Components/MediaMatch',
  component: MediaMatch,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof MediaMatch>;

export const Desktop: ComponentStory<typeof MediaMatch> = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
);

export const Mobile: ComponentStory<typeof MediaMatch> = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};

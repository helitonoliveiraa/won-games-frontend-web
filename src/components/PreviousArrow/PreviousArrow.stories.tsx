import { ComponentMeta } from '@storybook/react';

import { PreviousArrow } from './index';

export default {
  title: 'Components/PreviousArrow',
  component: PreviousArrow,
} as ComponentMeta<typeof PreviousArrow>;

export const Basic: typeof PreviousArrow = args => <PreviousArrow {...args} />;

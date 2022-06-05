import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';

import { SliderSettings } from '@/types';

import { Slider } from './index';

export default {
  title: 'Components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const settings: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  text-align: center;
`;

// const Template: ComponentStory<typeof Slider> = args => <Slider {...args} />;

// export const Horizontal = Template.bind({});

export const Horizontal: typeof Slider = () => (
  <Slider settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
);

const verticalSettings: SliderSettings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1,
};

export const Vertical: typeof Slider = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
);

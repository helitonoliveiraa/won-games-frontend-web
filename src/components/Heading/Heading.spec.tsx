import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { Heading } from './index';

describe('<Heading/>', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>won games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">won games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render a heading with a line left side', () => {
    renderWithTheme(<Heading lineLeft>won games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5',
    });
  });

  it('should render a heading with a small line bottom if lineBottom equals to default is passed', () => {
    renderWithTheme(<Heading lineBottom="default">won games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.4rem solid #F231A5',
      {
        modifier: '::after',
      },
    );
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '2.4rem',
      {
        modifier: '::after',
      },
    );
  });

  it('should render a heading with large line bottom when lineBottom equals to large is passed', () => {
    renderWithTheme(<Heading lineBottom="large">won games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.4rem solid #F231A5',
      {
        modifier: '::after',
      },
    );

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '4.0rem',
      { modifier: '::after' },
    );
  });

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">won games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem',
    });
  });

  it('should render a heading with primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom="default">
        lorem ipsum
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i });

    expect(heading).toHaveStyle({
      'border-left': '0.7rem solid #F231A5',
    });
    expect(heading).toHaveStyleRule('border-bottom', '0.4rem solid #F231A5', {
      modifier: '::after',
    });
  });

  it('should render a heading with secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom="default">
        Lorem ipsum
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i });

    expect(heading).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1',
    });
    expect(heading).toHaveStyleRule('border-bottom', '0.4rem solid #3CD3C1', {
      modifier: '::after',
    });
  });
});

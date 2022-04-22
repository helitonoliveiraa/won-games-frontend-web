import { screen } from '@testing-library/react';

import { renderWithTheme } from '@/utils/tests/helpers';

import { Highlight } from './index';
import * as S from './styles';

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/httpsfe',
  backgroundImage: '/img/red-dead-img.png',
};

describe('<Highlight/>', () => {
  it('should render headings and buttons correctly', () => {
    renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole('heading', { name: /Heading 1/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Heading 2/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument();
  });

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      'background-image': `url(${props.backgroundImage})`,
    });
  });

  it('should render float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png',
    );
  });

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'",
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`,
    });
  });

  it('should render left if alignment is left', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />,
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'",
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`,
    });
  });
});

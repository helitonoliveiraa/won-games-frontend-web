import { render, screen } from '@testing-library/react';

import theme from '@/styles/theme';
import { renderWithTheme } from '@/utils/tests/helpers';

import { Container } from './index';

describe('<Container/>', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won games</span>
      </Container>,
    );

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 104rem;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Won games
        </span>
      </div>
    `);
  });
});

import 'match-media-mock';
import { render, screen } from '@testing-library/react';

import { Slider } from './index';

describe('<Slider/>', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>,
    );

    const firstSlide = screen.getByText(/Item 1/i).parentElement?.parentElement;

    expect(screen.getByText(/Item 1/i)).toBeInTheDocument();

    expect(firstSlide).toHaveClass('slick-slide');

    expect(firstSlide).toHaveClass('slick-active');

    expect(
      screen.getByText(/Item 2/i).parentElement?.parentElement,
    ).toHaveClass('slick-slide');

    expect(container.firstChild).toMatchSnapshot();
  });
});

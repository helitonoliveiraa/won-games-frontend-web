import { render } from '@testing-library/react';

import { NextArrow } from './index';

describe('<NextArrow/>', () => {
  it('should render correctly', () => {
    const { container } = render(<NextArrow />);

    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});

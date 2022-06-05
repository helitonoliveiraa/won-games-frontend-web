import { render } from '@testing-library/react';

import { PreviousArrow } from './index';

describe('<PreviousArrow/>', () => {
  it('should render correctly', () => {
    const { container } = render(<PreviousArrow />);

    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});

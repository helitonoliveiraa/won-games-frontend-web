import { screen } from '@testing-library/react';

import { Ribbon } from '../Ribbon';
import { renderWithTheme } from '@/utils/tests/helpers';

import { Banner } from './index';

const bannerProps = {
  image: 'fake-image-url',
  title: 'fake-title',
  subtitle: 'fake-subtitle',
  buttonLabel: 'fake-buttonLabel',
  buttonLink: 'fake-buttonLink',
};

describe('<Banner/>', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...bannerProps} />);

    expect(
      screen.getByRole('heading', { name: /fake-title/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/fake-subtitle/i)).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /fake-title/i }),
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...bannerProps}
        ribbonTitle="30% OFF"
        ribbonSize="small"
        ribbonColor="secondary"
      />,
    );

    const ribbon = screen.getByText(/30% OFF/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({
      background: '#3CD3C1',
    });
    expect(ribbon).toHaveStyle({
      height: '2.4rem',
      fontSize: '1rem',
    });
  });
});

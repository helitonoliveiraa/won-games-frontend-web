import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from '@/utils/tests/helpers';

import { Radio } from './index';

describe('<Radio/>', () => {
  it('should render with label', () => {
    const { container } = renderWithTheme(
      <Radio label="radio label" labelFor="radio" />,
    );

    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByLabelText(/radio label/i)).toBeInTheDocument();
    expect(screen.getByText(/radio label/i)).toHaveAttribute('for', 'radio');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without label', () => {
    renderWithTheme(<Radio value="testValue" />);

    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.queryByLabelText(/radio label/i)).not.toBeInTheDocument();
  });

  it('should render black label', () => {
    renderWithTheme(
      <Radio
        label="White label"
        labelFor="radio"
        labelColor="black"
        value="testValue"
      />,
    );

    expect(screen.getByText(/white label/i)).toHaveStyle({
      color: '#030517',
    });
  });

  it('should dispatch onCheck when state change', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Radio
        value="testValue"
        onCheck={onCheck}
        label="Radio"
        labelFor="test radio"
      />,
    );

    expect(onCheck).not.toBeCalled();

    userEvent.click(screen.getByLabelText(/radio/i));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith('testValue');
  });

  it('should be accessible with tab', () => {
    renderWithTheme(
      <Radio value="testValue" label="Radio" labelFor="test radio" />,
    );

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/radio/i)).toHaveFocus();
  });
});

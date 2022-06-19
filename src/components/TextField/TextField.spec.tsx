import { FiMail } from 'react-icons/fi';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import theme from '@/styles/theme';
import { renderWithTheme } from '@/utils/tests/helpers';

import { TextField } from './index';

describe('<TextField/>', () => {
  it('should renders with label', () => {
    renderWithTheme(<TextField label="labelText" labelFor="name" />);

    expect(screen.getByLabelText(/labelText/i)).toBeInTheDocument();
    expect(screen.getByText(/labelText/i)).toHaveAttribute('for', 'name');
  });

  it('should render without label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText(/labelText/i)).not.toBeInTheDocument();
  });

  it('should render with placeHolder', () => {
    renderWithTheme(<TextField placeholder="Insert your name" />);

    expect(
      screen.getByPlaceholderText(/Insert your name/i),
    ).toBeInTheDocument();
  });

  it('should change its value when typing', async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField
        id="textField"
        label="labelText"
        labelFor="textField"
        onInput={onInput}
      />,
    );

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });

    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('should be accessible by tab', () => {
    renderWithTheme(
      <TextField label="labelText" labelFor="textField" id="textField" />,
    );

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText('labelText')).toHaveFocus();
  });

  it('should render icon version when icon is passed', () => {
    renderWithTheme(
      <TextField
        label="labelText"
        labelFor="textField"
        id="textField"
        icon={<FiMail data-testid="inputIcon" />}
      />,
    );

    expect(screen.getByLabelText(/labelText/i)).toBeInTheDocument();
    expect(screen.getByTestId(/inputIcon/i)).toBeInTheDocument();
  });

  it('should render right icon version when right property is passed', () => {
    renderWithTheme(
      <TextField
        icon={<FiMail data-testid="inputIcon" />}
        iconPosition="right"
      />,
    );

    expect(screen.getByTestId(/inputIcon/i).parentElement).toHaveStyle({
      order: 1,
    });
  });

  it('should not changes its value when disabled', async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="labelText"
        labelFor="textField"
        id="textField"
        disabled
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'This is may text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });

    expect(onInput).not.toHaveBeenCalled();
  });

  it('should not be accessible when disabled', () => {
    renderWithTheme(
      <TextField
        label="labelText"
        labelFor="textField"
        id="textField"
        disabled
      />,
    );

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/labelText/i)).not.toHaveFocus();
  });
});

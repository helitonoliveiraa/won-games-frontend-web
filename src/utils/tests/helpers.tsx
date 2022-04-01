import { ReactNode } from 'react';

import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '@/styles/theme';

export function renderWithTheme(children: ReactNode): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

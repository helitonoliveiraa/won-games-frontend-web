import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';
import { ReactNode } from 'react';

import theme from '@/styles/theme';

export function renderWithTheme(children: ReactNode): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

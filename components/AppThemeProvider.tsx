"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "@/styles/theme";

export type AppThemeProviderProps = React.PropsWithChildren;

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

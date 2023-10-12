import type { Metadata } from 'next';

import '@mantine/core/styles.css';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { AppContextProvider } from './context/AppContext';

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <AppContextProvider>
          <MantineProvider>{children}</MantineProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}

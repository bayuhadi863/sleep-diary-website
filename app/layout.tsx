import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';

// Mantine import
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';

// Components import
import { LandingPageAppShell } from '@/components/landing_page_layout/app-shell';

const theme = createTheme({
  primaryColor: 'primary-white',
  colors: {
    'primary-white': ['#f5f5f5', '#e7e7e7', '#cdcdcd', '#b2b2b2', '#9a9a9a', '#8b8b8b', '#848484', '#717171', '#656565', '#575757'],
    dark: ['#ffffff', '#A6A7AB', '#909296', '#5C5F66', '#373A40', '#2C2E33', '#25262B', '#1A1B1E', '#141517', '#101113'],
  },
  white: '#ffffff',
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SleepDiary',
  description: 'Track your sleep and improve your life',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`bg-background ${poppins.className}`}>
        <MantineProvider
          theme={theme}
          forceColorScheme='dark'
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

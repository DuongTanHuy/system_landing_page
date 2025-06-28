import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import '../globals.scss';

//mui
import { ThemeProvider } from '@mui/material';
import customTheme from 'src/utils/palette';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ProgressBar from 'src/components/progress-bar/progress-bar';
// components
import Header from 'src/sections/header';
import Footer from 'src/sections/footer';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from 'src/i18n/routing';
import { notFound } from 'next/navigation';
import { allMetadata } from 'src/app/[locale]/metadata';
import { setRequestLocale } from 'next-intl/server';

const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const metadataTrans = allMetadata[locale] || allMetadata['en'];

  return metadataTrans;
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale || 'en'}>
      <body className={`${robotoSans.className}`}>
        <NextIntlClientProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={customTheme}>
              <ProgressBar />
              <CssBaseline />
              <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
                <Header />
                {children}
                <Footer />
              </Box>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

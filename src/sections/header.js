'use client';

import { useScroll } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
// theme
import { bgBlur, bgGradient } from 'src/utils/theme';
// components
import Logo from 'src/components/logo';
import ScrollProgress from 'src/components/scroll-progress/scroll-progress';
//
import { HEADER } from 'src/utils';

//
import NavDesktop from 'src/sections/nav/desktop/nav-desktop';
import NavMobile from 'src/sections/nav/mobile/nav-mobile';
import HeaderShadow from 'src/sections/header-shadow';
import { navConfig } from 'src/sections/config-navigation';
import { Button } from '@mui/material';
import { useTranslations } from 'next-intl';
import ContactButton from 'src/components/float-button/contact-button';
import { useRouter } from 'src/i18n/navigation';

// ----------------------------------------------------------------------

export default function Header() {
  const t = useTranslations('nav.header');
  const route = useRouter();
  const theme = useTheme();

  const mdUp = useResponsive('down', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const { scrollYProgress } = useScroll();

  return (
    <>
      <AppBar
        sx={{
          boxShadow: 'none',
          background: 'transparent',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            height: {
              xs: HEADER.H_MOBILE,
              md: HEADER.H_DESKTOP,
            },
            transition: theme.transitions.create(['height'], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.shorter,
            }),
            ...(offsetTop && {
              ...bgBlur({
                color: theme.palette.background.default,
              }),
              height: {
                md: HEADER.H_DESKTOP_OFFSET,
              },
            }),
          }}
        >
          <Container
            sx={{
              maxWidth: '100%!important',
              height: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mx: { md: '0px', lg: '52px' },
            }}
          >
            <Logo />

            {!mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />}

            {mdUp && (
              <Stack
                alignItems="center"
                direction={{ xs: 'row', md: 'row-reverse' }}
                ml="auto"
                mr={2}
              >
                <NavMobile offsetTop={offsetTop} data={navConfig} />
              </Stack>
            )}

            <Link
              onClick={() => route.push('/download')}
              title="Get Started"
              component={Button}
              variant="contained"
              sx={{
                textDecoration: 'none',
                color: 'white',
                px: 2,
                textTransform: 'none',
                ...bgGradient({
                  startColor: '#00A76F',
                  endColor: '#2EC685',
                  direction: 'to right',
                }),
                height: 44,
                borderRadius: 2,
                whiteSpace: 'nowrap',
                '&:hover': {
                  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px',
                },
              }}
            >
              {mdUp ? t('getStartMobi') : t('getStart')}
            </Link>
          </Container>
        </Toolbar>

        {offsetTop && <HeaderShadow />}
      </AppBar>

      <ScrollProgress scrollYProgress={scrollYProgress} />

      <ContactButton />
    </>
  );
}

'use client';

// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// components
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { useTranslations } from 'next-intl';
import { Link } from 'src/i18n/navigation';

// ----------------------------------------------------------------------

export default function Footer() {
  const t = useTranslations('nav.footer');
  const LINKS = [
    {
      headline: t('legal'),
      children: [
        { name: t('termsOfService'), href: '/terms-of-service' },
        { name: t('privacyPolicy'), href: '/privacy-policy' },
      ],
    },
    {
      headline: t('contactUs'),
      children: [
        { name: '(+84) 388.667.256' },
        { name: '(+84) 935.322.178' },
        { name: '(+84) 932.679.984' },
      ],
    },
  ];

  const _socials = [
    {
      value: 'zalo',
      name: 'Zalo',
      icon: 'simple-icons:zalo',
      color: '#1877F2',
      path: 'https://zalo.me/g/ysmqye883',
    },
    {
      value: 'telegram',
      name: 'Telegram',
      icon: 'mingcute:telegram-fill',
      color: '#00B8D9',
      path: 'https://t.me/mktlogin365',
    },
  ];

  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />

      <Container
        sx={{
          pt: 10,
          pb: 5,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Logo sx={{ mb: 3 }} />

        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
        >
          <Grid size={{ xs: 8, md: 3 }}>
            <Typography
              variant="body2"
              sx={{
                maxWidth: 270,
                mx: { xs: 'auto', md: 'unset' },
              }}
            >
              {t('desc')}
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                mt: 3,
                mb: { xs: 5, md: 0 },
              }}
              spacing={2}
            >
              {_socials.map((social) => (
                <IconButton
                  key={social.name}
                  sx={{
                    bgcolor: alpha(social.color, 0.08),
                  }}
                  aria-label={social.name}
                >
                  <Iconify
                    color={social.color}
                    icon={social.icon}
                    onClick={() => window.open(social.path, '_blank')}
                  />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
              <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }} sx={{ width: 1 }}>
                <Typography component="div" fontWeight={500} variant="overline">
                  {LINKS[0].headline}
                </Typography>

                {LINKS[0].children.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    style={{
                      color: '#637381',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                    }}
                    aria-label={link.name}
                    title={link.name}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
              <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }} sx={{ width: 1 }}>
                <Typography component="div" fontWeight={500} variant="overline">
                  {LINKS[1].headline}
                </Typography>

                {LINKS[1].children.map((link) => (
                  <Typography key={link.name} color="#637381" variant="body2" sx={{}}>
                    {link.name}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 8 }}>
          {t('reserved')}
        </Typography>
      </Container>
    </Box>
  );

  return mainFooter;
}

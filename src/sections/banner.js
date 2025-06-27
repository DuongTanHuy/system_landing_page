import React from 'react';
// mui
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
// theme
import { bgGradient } from 'src/utils/theme';
// components
import CountUp from 'src/components/count-up';
import DownloadForWindows from 'src/components/download';
import { useTranslations } from 'next-intl';

const Banner = () => {
  const t = useTranslations('landingPage.banner');
  return (
    <Stack
      direction={{ sm: 'column', md: 'row' }}
      alignItems="center"
      sx={{
        width: 1,
        px: { xs: '24px', md: '68px' },
      }}
    >
      <Stack
        width={1}
        sx={{
          pt: '82px',
          pb: '78px',
        }}
      >
        <Typography
          id="mktlogin-home"
          variant="h1"
          sx={{
            fontWeight: 600,
            fontSize: { xs: 36, md: 48 },
            lineHeight: { xs: '44px', md: '56px' },
          }}
        >
          {t.rich('title', {
            Typography: (chunks) => (
              <Typography
                component="span"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: 36, md: 48 },
                  lineHeight: { xs: '44px', md: '56px' },
                  color: 'transparent',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  backgroundImage: bgGradient({
                    startColor: '#00A76F',
                    endColor: '#2EC685',
                    direction: 'to right',
                  }).background,
                }}
              >
                {chunks}
              </Typography>
            ),
          })}
        </Typography>

        <Typography variant="body1" color="#637381" my="48px" pr={{ sm: 0, md: 20 }}>
          {t('subTitle')}
        </Typography>

        <Stack direction="row" spacing="26px" alignItems="center">
          <DownloadForWindows />
          <Link
            href="https://docs.mktlogin.com/"
            target="_blank"
            component={Button}
            variant="text"
            sx={{
              height: 48,
              boxShadow: 'none',
              textTransform: 'none',
              border: '1.5px solid #118D57',
              color: '#118D57',
              borderRadius: 2,
              px: 2,
              textDecoration: 'none',
            }}
            title={t('document')}
          >
            {t('document')}
          </Link>
        </Stack>

        <CountUp />
      </Stack>
      <div
        style={{
          width: '100%',
          aspectRatio: '163/108',
          height: 'fit-content',
          position: 'relative',
        }}
      >
        <Image
          src="/assets/ic_dashboard.svg"
          priority
          alt="MKTLogin dashboard"
          title="MKTLogin dashboard image"
          fill
        />
      </div>
    </Stack>
  );
};

export default Banner;

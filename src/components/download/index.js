'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'src/i18n/navigation';

// mui
import Button from '@mui/material/Button';
// theme
import { bgGradient } from 'src/utils/theme';
// components
import Iconify from 'src/components/iconify';

const DownloadForWindows = () => {
  const t = useTranslations('landingPage.banner');
  const route = useRouter();

  return (
    <Button
      variant="contained"
      startIcon={<Iconify icon="flowbite:windows-solid" />}
      sx={{
        height: 48,
        boxShadow: 'none',
        textTransform: 'none',
        borderRadius: 2,
        ...bgGradient({
          startColor: '#00A76F',
          endColor: '#2EC685',
          direction: 'to right',
        }),
      }}
      onClick={() => route.push('/download')}
    >
      {t('download')}
    </Button>
  );
};

export default DownloadForWindows;

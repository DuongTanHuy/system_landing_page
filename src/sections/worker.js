import React from 'react';
import { useTranslations } from 'next-intl';

// mui
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// components
import CustomizedSteppers from 'src/components/stepper';

const Worker = () => {
  const t = useTranslations('landingPage.worker');

  return (
    <Stack
      alignItems="center"
      py="78px"
      px={{ xs: '24px', md: '68px' }}
      spacing="20px"
      backgroundColor="white"
    >
      <Typography variant="h2" fontSize="2.125rem" fontWeight={700}>
        {t('title')}
      </Typography>
      <Typography
        variant="body1"
        color="#637381"
        textAlign="center"
        sx={{
          mx: { xs: 'auto!important', md: '268px!important' },
          mb: '48px!important',
        }}
      >
        {t('subTitle')}
      </Typography>

      <CustomizedSteppers />
    </Stack>
  );
};

export default Worker;

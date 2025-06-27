import React from 'react';
import { useTranslations } from 'next-intl';

// mui
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// components
import PlanItem from 'src/components/plan';

const Plans = () => {
  const t = useTranslations('landingPage.plans');

  return (
    <Stack
      alignItems="center"
      py="78px"
      px={{ xs: '24px', md: '68px' }}
      spacing="20px"
      backgroundColor="white"
    >
      <Typography id="mktlogin-pricing" variant="h2" fontSize="2.125rem" fontWeight={700}>
        {t('title')}
      </Typography>
      <Typography
        variant="body1"
        color="#637381"
        textAlign="center"
        sx={{
          mx: { xs: 'auto!important', md: '240px!important' },
          mb: '48px!important',
        }}
      >
        {t('subTitle')}
      </Typography>
      <Stack
        gap="60px"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
        }}
      >
        {[
          {
            title: 'Free',
            benefit: [
              t('free5'),
              t('allFeatures'),
              t('notTransfer'),
              t('notInvite'),
              t('teamSupport'),
            ],
          },
          {
            title: 'Small team',
            price: t('$20'),
            benefit: [t('up100'), t('allFeatures'), t('teamSupport')],
          },
          {
            title: 'Solo',
            price: t('$11'),
            benefit: [t('up30'), t('allFeatures'), t('teamSupport')],
          },

          {
            title: 'Big team',
            price: t('$57'),
            benefit: [t('up500'), t('allFeatures'), t('teamSupport')],
          },
          {
            title: 'Scale',
            price: t('$100'),
            benefit: [t('up1000'), t('allFeatures'), t('teamSupport')],
          },
          {
            title: 'Resources',
            price: t('$384'),
            benefit: [t('up5000'), t('allFeatures'), t('teamSupport')],
          },
        ].map((plan, index) => (
          <PlanItem key={index} {...plan} active={index === 1} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Plans;

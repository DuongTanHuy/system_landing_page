import React from 'react';
import { useTranslations } from 'next-intl';

// mui
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// components
import RiskItem from 'src/components/risk-item.js';

const Solution = () => {
  const t = useTranslations('landingPage.solution');

  return (
    <Stack
      sx={{
        width: 1,
        py: '78px',
        px: { xs: '24px', md: '68px' },

        backgroundColor: 'white',
      }}
      alignItems="center"
      spacing="20px"
    >
      <Typography variant="h2" fontSize='2.125rem' fontWeight={700}>
        {t('title')}
      </Typography>
      <Typography
        variant="body1"
        color="#637381"
        textAlign="center"
        sx={{
          mx: { xs: 'auto!important', md: '250px!important' },
          mb: '66px!important',
        }}
      >
        {t('subTitle')}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        sx={{
          gap: '92px',
        }}
      >
        {[
          {
            color: { startColor: '#FF4842', endColor: '#FF6B6B' },
            icon: 'mi:warning',
            title: t('accountBan'),
            desc: t('banDesc'),
          },
          {
            color: { startColor: '#FFA726', endColor: '#FFB74D' },
            icon: 'flowbite:clock-outline',
            title: t('timeWaste'),
            desc: t('timeDesc'),
          },
          {
            color: { startColor: '#AB47BC', endColor: '#BA68C8' },
            icon: 'streamline-ultimate:unprotect',
            title: t('securityRisk'),
            desc: t('securityDesc'),
          },
        ].map((item, index) => (
          <RiskItem
            key={index}
            color={item.color}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Solution;

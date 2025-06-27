import React from 'react';
import { useTranslations } from 'next-intl';
// mui
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// theme
import { bgGradient } from 'src/utils/theme';
// components
import FeatureItem from 'src/components/feature-item';

const Features = () => {
  const t = useTranslations('landingPage.features');

  return (
    <Stack alignItems="center" py="78px" px={{ xs: '24px', md: '68px' }} spacing="20px">
      <Typography id="mktlogin-features" variant="h2" fontSize="2.125rem" fontWeight={700}>
        {t.rich('title', {
          Typography: (chunks) => (
            <Typography
              component="span"
              variant="h2"
              fontSize="2.125rem"
              sx={{
                fontWeight: 700,
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
      <Typography
        variant="body1"
        color="#637381"
        textAlign="center"
        sx={{
          mx: { xs: 'auto!important', md: '268px!important' },
          mb: '50px!important',
        }}
      >
        {t('subTitle')}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        sx={{
          gap: '32px',
        }}
      >
        {[
          {
            icon: 'icon-park-solid:protect',
            title: t('antiDetect'),
            desc: t('antiDetectDesc'),
          },
          {
            icon: 'material-symbols-light:person-rounded',
            title: t('accountManage'),
            desc: t('accountManageDesc'),
          },
          {
            icon: 'material-symbols-light:folder',
            title: t('profileManage'),
            desc: t('profileManageDesc'),
          },
          {
            icon: 'streamline-plump:cog-automation-solid',
            title: t('automation'),
            desc: t('automationDesc'),
          },
          {
            icon: 'ep:right',
            title: t('synchronization'),
            desc: t('synchronizationDesc'),
          },
          {
            icon: 'bxs:copy',
            title: t('miniApp'),
            desc: t('miniAppDesc'),
          },
          {
            icon: 'streamline-ultimate:workflow-teamwork-user-high-five-bold',
            title: t('teamwork'),
            desc: t('teamworkDesc'),
          },
          {
            icon: 'tabler:affiliate-filled',
            title: t('affiliate'),
            desc: t('affiliateDesc'),
          },
        ].map((item, index) => (
          <FeatureItem key={index} icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Features;

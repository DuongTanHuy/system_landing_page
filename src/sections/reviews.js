import React from 'react';
import { useTranslations } from 'next-intl';

// mui
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// theme
import { bgGradient } from 'src/utils/theme';
// components
import ReviewCarousel from 'src/components/review-carousel';

const Reviews = () => {
  const t = useTranslations('landingPage.reviews');

  return (
    <Stack alignItems="center" py="78px" px={{ xs: '24px', md: '68px' }} spacing="20px">
      <Typography id="mktlogin-reviews" variant="h2" fontSize="2.125rem" fontWeight={700}>
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
          mb: '24px!important',
        }}
      >
        {t('subTitle')}
      </Typography>

      <ReviewCarousel
        slides={[
          {
            title: t('review1.feedback'),
            user: {
              name: t('review1.name'),
              role: t('review1.role'),
            },
          },
          {
            title: t('review2.feedback'),
            user: {
              name: t('review2.name'),
              role: t('review2.role'),
            },
          },
          {
            title: t('review3.feedback'),
            user: {
              name: t('review3.name'),
              role: t('review3.role'),
            },
          },
        ]}
      />
    </Stack>
  );
};

export default Reviews;

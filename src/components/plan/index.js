'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslations } from 'next-intl';

// mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { bgGradient } from 'src/utils/theme';
// components
import Iconify from 'src/components/iconify';
import { useRouter } from 'src/i18n/navigation';

const PlanItem = ({ title, price, benefit, active }) => {
  const t = useTranslations('landingPage.plans');
  const route = useRouter();

  return (
    <Stack
      sx={{
        p: '33px',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 5px 15px',
        borderRadius: 4,
        border: '2px solid #fff',
        transition: 'border 0.2s linear',
        width: '300px',
        position: 'relative',
        ...(active && {
          borderColor: '#00A76F',
          transform: 'scale(1.1)',
          '&::before': {
            content: `"${t('mostPopular')}"`,
            width: '124px',
            height: '54px',
            position: 'absolute',
            top: '-27px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#fff',
            padding: '4px 12px',
            borderRadius: '58px',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '46px',
            textAlign: 'center',
            ...bgGradient({
              startColor: '#5BE49B',
              endColor: '#00A76F',
              direction: 'to left',
            }),
          },
        }),
      }}
      alignItems="center"
    >
      <Typography variant="h5" fontWeight={700}>
        {title}
      </Typography>
      {price && (
        <Typography
          color="#637381"
          fontWeight={500}
          sx={{
            pt: '12px',
            pb: '30px',
          }}
        >
          <Typography component="span" variant="h4" fontWeight={700} color="primary">
            {price}
          </Typography>
          /{t('package')}
        </Typography>
      )}

      <Divider
        sx={{
          width: '100%',
          height: '2px',
        }}
      />

      <Stack spacing="26px" pt="30px">
        {benefit.map((item, index) => (
          <Stack key={index} direction="row" spacing={2} alignItems="center">
            <Iconify icon="ic:round-check" />
            <Typography color="#637381">{item}</Typography>
          </Stack>
        ))}
      </Stack>

      <Button
        variant="contained"
        startIcon={<Iconify icon="material-symbols:download" />}
        sx={{
          width: 1,
          textTransform: 'none',
          backgroundColor: 'text.primary',
          mt: 4,
          p: '8px 16px',
          borderRadius: 2,
          boxShadow: 'none',
        }}
        onClick={() => route.push('/download')}
      >
        {t('tryIt')}
      </Button>
    </Stack>
  );
};

export default PlanItem;

PlanItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  benefit: PropTypes.array,
  active: PropTypes.bool,
};

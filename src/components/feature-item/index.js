import React from 'react';
import PropTypes from 'prop-types';

// mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// theme
import { bgGradient } from 'src/utils/theme';
import Iconify from 'src/components/iconify';

const FeatureItem = ({ icon, title, desc }) => {
  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      sx={{
        width: { sm: 1, md: 'calc(50% - 16px)' },
        borderRadius: 4,
        borderLeft: '4px solid',
        borderLeftColor: '#2EC685',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px',
        p: '32px',
        columnGap: '24px',
      }}
    >
      <Stack
        sx={{
          width: '64px',
          aspectRatio: '1/1',
          borderRadius: '12px',
          flexShrink: 0,
          ...bgGradient({
            startColor: '#00A76F',
            endColor: '#2EC685',
            direction: 'to right',
          }),
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Iconify icon={icon} width={32} color="#fff" />
      </Stack>
      <Stack
        sx={{
          rowGap: '16px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: '18px',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="#637381"
          sx={{
            height: '80px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {desc}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FeatureItem;

FeatureItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

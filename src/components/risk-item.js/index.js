import React from 'react';
import PropTypes from 'prop-types';
// mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// components
import Iconify from 'src/components/iconify';
import { bgGradient } from 'src/utils/theme';

const RiskItem = ({ color, icon, title, desc }) => {
  return (
    <Stack alignItems="center" maxWidth="190px">
      <Stack
        sx={{
          width: '64px',
          aspectRatio: '1/1',
          borderRadius: '50%',
          ...bgGradient({
            startColor: color?.startColor || '#00A76F',
            endColor: color?.endColor || '#2EC685',
            direction: 'to right',
          }),
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Iconify icon={icon} width={32} color="#fff" />
      </Stack>

      <Typography
        variant="h6"
        sx={{
          fontSize: '18px',
          mt: '16px',
          mb: '10px',
        }}
      >
        {title}
      </Typography>
      <Typography variant="body2" color="#637381" textAlign="center">
        {desc}
      </Typography>
    </Stack>
  );
};

export default RiskItem;

RiskItem.propTypes = {
  color: PropTypes.object,
  icon: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

import React from 'react';
import PropTypes from 'prop-types';

// mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
// components
import Iconify from 'src/components/iconify';
import { bgGradient } from 'src/utils/theme';

const EmblaCarouselItem = ({ user, title }) => {
  return (
    <Stack
      sx={{
        borderRadius: 3,
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px',
        p: '32px',
        pb: '42px',
      }}
      alignItems="center"
      spacing="26px"
    >
      <Iconify icon="ph:bookmarks-duotone" width="48px" color="primary.main" />
      <Typography textAlign="center" fontSize="1rem">
        {title}
      </Typography>
      <Stack direction="row" spacing="16px">
        <Avatar
          sx={{
            width: '48px',
            height: '48px',
            ...bgGradient({
              startColor: '#00A76F',
              endColor: '#2EC685',
              direction: 'to right',
            }),
          }}
        >
          {user.name.charAt(0).toUpperCase()}
        </Avatar>
        <Stack alignItems="start">
          <Typography fontWeight={600}>{user.name}</Typography>
          <Typography variant="body2" color="#637381">
            {user.role}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EmblaCarouselItem;

EmblaCarouselItem.propTypes = {
  title: PropTypes.string,
  user: PropTypes.object,
};

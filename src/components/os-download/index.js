'use client';

import React from 'react';
import PropTypes from 'prop-types';

// mui
import Button from '@mui/material/Button';
// components
import Iconify from 'src/components/iconify';

const OsDownload = ({ variant, url, title, sx }) => {
  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Button
      variant={variant}
      startIcon={<Iconify icon="material-symbols:download" />}
      sx={{
        mt: 4,
        p: '8px 16px',
        borderRadius: 2,
        boxShadow: 'none',
        ...sx,
      }}
      onClick={() => handleDownload(url)}
    >
      {title}
    </Button>
  );
};

export default OsDownload;

OsDownload.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  sx: PropTypes.object,
};

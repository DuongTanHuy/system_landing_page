import PropTypes from 'prop-types';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

export default function HeaderShadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        m: 'auto',
        height: 24,
        zIndex: -1,
        opacity: 0.48,
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 48px)`,
        boxShadow: `0 8px 16px 0 ${alpha('#919EAB', 0.16)}`,
        ...sx,
      }}
      {...other}
    />
  );
}

HeaderShadow.propTypes = {
  sx: PropTypes.object,
};

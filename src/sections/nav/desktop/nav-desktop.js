import PropTypes from 'prop-types';
// @mui
import Stack from '@mui/material/Stack';
// components
import LanguagePopover from 'src/sections/nav/desktop/language-popover';
//
import NavList from './nav-list';

// ----------------------------------------------------------------------

export default function NavDesktop({ offsetTop, data }) {
  return (
    <Stack
      component="nav"
      direction="row"
      alignItems="center"
      spacing={5}
      sx={{ mr: 2.5, height: 1 }}
    >
      {data.map((link) => (
        <NavList key={link.title} item={link} offsetTop={offsetTop} />
      ))}
      <LanguagePopover />
    </Stack>
  );
}

NavDesktop.propTypes = {
  data: PropTypes.array,
  offsetTop: PropTypes.bool,
};

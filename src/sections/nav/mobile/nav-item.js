import PropTypes from 'prop-types';
// @mui
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// components
import Iconify from 'src/components/iconify';
//
import { ListItem } from './styles';
import { Link } from 'src/i18n/navigation';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

export default function NavItem({ item, open, active, externalLink, ...other }) {
  const t = useTranslations('nav.header');
  const { title, path, icon, children } = item;

  const renderContent = (
    <ListItem active={active} {...other}>
      <ListItemIcon> {icon} </ListItemIcon>

      <ListItemText disableTypography primary={t(title)} />

      {!!children && (
        <Iconify
          width={16}
          icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
          sx={{ ml: 1 }}
        />
      )}
    </ListItem>
  );

  // External link
  if (externalLink) {
    return (
      <Link href={path} target="_blank" rel="noopener" underline="none">
        {renderContent}
      </Link>
    );
  }

  // Has child
  if (children) {
    return renderContent;
  }

  // Default
  return (
    <Link
      href={path}
      style={{
        textDecoration: 'none',
      }}
      title={t(title)}
    >
      {renderContent}
    </Link>
  );
}

NavItem.propTypes = {
  active: PropTypes.bool,
  externalLink: PropTypes.bool,
  item: PropTypes.object,
  open: PropTypes.bool,
};

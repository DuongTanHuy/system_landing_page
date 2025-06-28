import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from 'src/i18n/navigation';

// @mui
import Box from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';
// components
import Iconify from 'src/components/iconify';
//
import { ListItem } from './styles';

// ----------------------------------------------------------------------

export const NavItem = ({
  item,
  open,
  offsetTop,
  active,
  subItem,
  externalLink,
  ref,
  ...other
}) => {
  const t = useTranslations('nav.header');
  const { title, path, children } = item;

  const renderContent = (
    <ListItem
      ref={ref}
      disableRipple
      offsetTop={offsetTop}
      subItem={subItem}
      active={active}
      open={open}
      {...other}
    >
      {t(title)}

      {!!children && <Iconify width={16} icon="eva:arrow-ios-downward-fill" sx={{ ml: 1 }} />}
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
      style={{
        textDecoration: 'none',
        whiteSpace: 'nowrap',
      }}
      href={path}
      title={t(title)}
    >
      {renderContent}
    </Link>
  );
};

NavItem.propTypes = {
  active: PropTypes.bool,
  externalLink: PropTypes.bool,
  item: PropTypes.object,
  offsetTop: PropTypes.bool,
  open: PropTypes.bool,
  subItem: PropTypes.bool,
};

// ----------------------------------------------------------------------

export function NavItemDashboard({ item, sx, ...other }) {
  return (
    <Link href={item.path} sx={{ width: 1, height: 1 }} {...other}>
      <CardActionArea
        sx={{
          height: 1,
          minHeight: 320,
          borderRadius: 1.5,
          color: 'text.disabled',
          bgcolor: 'background.neutral',
          px: { md: 3, lg: 10 },
          ...sx,
        }}
      >
        <motion.div
          whileTap="tap"
          whileHover="hover"
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 },
          }}
        >
          <Box
            component="img"
            alt="illustration_dashboard"
            src="/assets/illustrations/illustration_dashboard.png"
          />
        </motion.div>
      </CardActionArea>
    </Link>
  );
}

NavItemDashboard.propTypes = {
  item: PropTypes.object,
  sx: PropTypes.object,
};

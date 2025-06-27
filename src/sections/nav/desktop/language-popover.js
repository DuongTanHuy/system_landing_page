'use client';

import { useCallback } from 'react';
import { motion } from 'framer-motion';
// @mui
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
// components
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { varHover } from 'src/utils/theme';
import { useParams } from 'next/navigation';
import { usePathname, useRouter } from 'src/i18n/navigation';

// ----------------------------------------------------------------------

const allLangs = [
  {
    label: 'English',
    value: 'en',
    icon: 'flagpack:gb-nir',
  },

  {
    label: 'Vietnamese',
    value: 'vi',
    icon: 'flagpack:vn',
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const popover = usePopover();
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = allLangs.find((lang) => lang.value === params.locale) || allLangs[0];

  const handleChangeLang = useCallback(
    (newLang) => {
      router.replace(
        {
          pathname,
          params,
        },
        { locale: newLang, scroll: false }
      );
      popover.onClose();
    },
    [params, pathname, popover, router]
  );

  return (
    <>
      <IconButton
        component={motion.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          width: 40,
          height: 40,
          ...(popover.open && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        <Iconify icon={currentLang.icon} sx={{ borderRadius: 0.65, width: 28 }} />
      </IconButton>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 'fit-content' }}>
        {allLangs.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === currentLang.value}
            onClick={() => handleChangeLang(option.value)}
            sx={{
              minWidth: 'fit-content',
              borderRadius: 1,
              p: 1,
            }}
          >
            <Iconify icon={option.icon} sx={{ borderRadius: 0.65, width: 28 }} />

            {option.label}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}

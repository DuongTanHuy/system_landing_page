import React from 'react';

// mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// components
import Iconify from 'src/components/iconify';
import { useTranslations } from 'next-intl';
import OsDownload from 'src/components/os-download';

const DowLoadPage = () => {
  const t = useTranslations('downloadPage');

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        pt: { xs: 8, md: 10 },
      }}
    >
      <Stack alignItems="center" py="78px" spacing={2}>
        <Stack
          direction="row"
          spacing={0.5}
          sx={{
            bgcolor: '#f4f4f5cc',
            borderRadius: 6,
            px: 1.5,
            py: 0.5,
          }}
        >
          <Iconify
            icon="material-symbols-light:star-outline"
            sx={{
              flexShrink: 0,
            }}
          />
          <Typography variant="caption" fontWeight={500}>
            {t('download.userTrust')}
          </Typography>
        </Stack>
        <Typography variant="h2" fontSize="2.125rem" fontWeight={700}>
          {t('download.title')}
        </Typography>
        <Typography
          variant="body1"
          color="#637381"
          textAlign="center"
          sx={{
            mx: { xs: 'auto!important', md: '250px!important' },
            maxWidth: '600px',
          }}
        >
          {t('download.subTitle')}
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          sx={{
            mb: '80px!important',
          }}
        >
          {[
            {
              icon: 'ant-design:safety-outlined',
              title: t('download.virusFree'),
            },
            {
              icon: 'lets-icons:check-ring-round',
              title: t('download.safe'),
            },
            {
              icon: 'material-symbols-light:electric-bolt-outline-rounded',
              title: t('download.fastInstall'),
            },
          ].map((item, index) => (
            <TrustedItem key={index} {...item} />
          ))}
        </Stack>

        <Stack direction={{ sm: 'column', md: 'row' }} gap={10} alignItems="center">
          <Stack
            alignItems="center"
            sx={{
              border: '1px solid #E0E0E0',
              p: '32px',
              borderRadius: 4,
            }}
          >
            <Iconify
              icon="skill-icons:apple-light"
              width={80}
              color="primary.main"
              sx={{
                mb: 2,
              }}
            />
            <Typography variant="h4" color="#637381">
              macOS
            </Typography>

            <OsDownload
              variant="outlined"
              url="https://zalo.me/g/lmxwwy607"
              title={t('download.getDownloadLink')}
              sx={{
                color: 'text.primary',
                borderColor: 'text.primary',
              }}
            />
          </Stack>
          <Stack
            alignItems="center"
            sx={{
              border: '1px solid #E0E0E0',
              p: '32px',
              borderRadius: 4,
              transform: 'scale(1.2)',
            }}
          >
            <Iconify
              icon="skill-icons:windows-light"
              width={80}
              color="primary.main"
              sx={{
                mb: 2,
              }}
            />
            <Typography variant="h4" color="#637381">
              Windows
            </Typography>

            <OsDownload
              variant="contained"
              url="https://hcm03.vstorage.vngcloud.vn/v1/AUTH_7629f5b97bb244e4a6b9967d4f531f20/application_release/MKTLogin-Setup-2.0.1.exe"
              title="Windows (64bit)"
              sx={{
                backgroundColor: 'text.primary',
              }}
            />

            <OsDownload
              variant="outlined"
              url="https://hcm03.vstorage.vngcloud.vn/v1/AUTH_7629f5b97bb244e4a6b9967d4f531f20/application_release/MKTLogin-Setup-2.0.1.exe"
              title="Windows (32bit)"
              sx={{
                color: 'text.primary',
                borderColor: 'text.primary',
              }}
            />
          </Stack>
          <Stack
            alignItems="center"
            sx={{
              border: '1px solid #E0E0E0',
              p: '32px',
              borderRadius: 4,
              minWidth: '277px',
            }}
          >
            <Iconify
              icon="skill-icons:linux-light"
              width={80}
              color="primary.main"
              sx={{
                mb: 2,
              }}
            />
            <Typography variant="h4" color="#637381">
              Linux
            </Typography>

            <Button
              variant="outlined"
              startIcon={<Iconify icon="material-symbols:download" />}
              sx={{
                color: 'text.primary',
                borderColor: 'text.primary',
                mt: 4,
                p: '8px 16px',
                borderRadius: 2,
                boxShadow: 'none',
              }}
            >
              {t('download.inComingSoon')}
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        alignItems="center"
        py="78px"
        spacing={2}
        sx={{
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h2" fontSize="2.125rem" fontWeight={700}>
          {t('systemRequirements.title')}
        </Typography>
        <Typography
          variant="body1"
          color="#637381"
          textAlign="center"
          sx={{
            mx: { xs: 'auto!important', md: '250px!important' },
            maxWidth: '600px',
            mb: '40px!important',
          }}
        >
          {t('systemRequirements.subTitle')}
        </Typography>

        <Stack direction={{ sm: 'column', md: 'row' }} gap={8}>
          <Stack
            sx={{
              border: '1px solid #E0E0E0',
              p: '32px',
              borderRadius: 4,
            }}
            spacing={1.5}
          >
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Iconify
                icon="lets-icons:check-ring-round"
                sx={{
                  flexShrink: 0,
                }}
                width={22}
                color="primary.main"
              />
              <Typography variant="h6" fontWeight={500}>
                {t('systemRequirements.minimum.title')}
              </Typography>
            </Stack>

            {[
              {
                icon: 'material-symbols-light:laptop-windows-outline-rounded',
                title: t('systemRequirements.minimum.os'),
              },
              {
                icon: 'bx:chip',
                title: t('systemRequirements.minimum.cpu'),
              },
              {
                icon: 'fluent:ram-16-regular',
                title: t('systemRequirements.minimum.ram'),
              },
              {
                icon: 'fluent:storage-16-regular',
                title: t('systemRequirements.minimum.disk'),
              },
              {
                icon: 'tdesign:internet',
                title: t('systemRequirements.minimum.network'),
              },
            ].map((item, index) => (
              <RequiredItem key={index} {...item} />
            ))}
          </Stack>
          <Stack
            sx={{
              border: '1px solid #E0E0E0',
              p: '32px',
              borderRadius: 4,
            }}
            spacing={1.5}
          >
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Iconify
                icon="tabler:star"
                sx={{
                  flexShrink: 0,
                }}
                width={22}
                color="warning.main"
              />
              <Typography variant="h6" fontWeight={500}>
                {t('systemRequirements.maximum.title')}
              </Typography>
            </Stack>

            {[
              {
                icon: 'material-symbols-light:laptop-windows-outline-rounded',
                title: t('systemRequirements.maximum.os'),
              },
              {
                icon: 'bx:chip',
                title: t('systemRequirements.maximum.cpu'),
              },
              {
                icon: 'fluent:ram-16-regular',
                title: t('systemRequirements.maximum.ram'),
              },
              {
                icon: 'fluent:storage-16-regular',
                title: t('systemRequirements.maximum.disk'),
              },
              {
                icon: 'tdesign:internet',
                title: t('systemRequirements.maximum.network'),
              },
            ].map((item, index) => (
              <RequiredItem key={index} {...item} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DowLoadPage;

function TrustedItem({ icon, title }) {
  return (
    <Stack direction="row" spacing={0.5} alignItems="center" color="#637381">
      <Iconify
        icon={icon}
        sx={{
          flexShrink: 0,
        }}
      />
      <Typography variant="caption" fontWeight={500}>
        {title}
      </Typography>
    </Stack>
  );
}

function RequiredItem({ icon, title }) {
  return (
    <Stack direction="row" spacing={0.5} alignItems="center" color="#637381">
      <Iconify
        icon={icon}
        sx={{
          flexShrink: 0,
        }}
      />
      <Typography variant="caption">{title}</Typography>
    </Stack>
  );
}

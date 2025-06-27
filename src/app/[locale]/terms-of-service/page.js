import React from 'react';
import dynamic from 'next/dynamic';

// mui
import Box from '@mui/material/Box';

const DynamicHeavyComponent = dynamic(() => import('src/sections/terms-content'), {
  loading: () => <p>Loading content...</p>,
});

const PrivacyPolicy = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: { xs: 8, md: 10 },
      }}
    >
      <DynamicHeavyComponent />
    </Box>
  );
};

export default PrivacyPolicy;

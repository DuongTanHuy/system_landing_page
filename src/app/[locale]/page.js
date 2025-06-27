// mui
import Box from '@mui/material/Box';

// components
import Banner from 'src/sections/banner';
import Solution from 'src/sections/solution';
import Features from 'src/sections/features';
import Worker from 'src/sections/worker';
import Reviews from 'src/sections/reviews';
import Plans from 'src/sections/plans';

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        pt: { xs: 8, md: 10 },
      }}
    >
      <Banner />

      <Solution />

      <Features />

      <Worker />

      <Reviews />

      <Plans />
    </Box>
  );
}

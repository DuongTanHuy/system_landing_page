'use client';
import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

// mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const CountUp = () => {
  const t = useTranslations('landingPage.banner');
  const countupUserRef = useRef(null);
  const countupTimeRef = useRef(null);
  let countUpUser;
  let countUpTime;

  async function initCountUp() {
    const countUpModule = await import('countup.js');
    countUpUser = new countUpModule.CountUp(countupUserRef.current, 17000);
    countUpTime = new countUpModule.CountUp(countupTimeRef.current, 99.9, {
      decimalPlaces: 1,
    });
    if (!countUpUser.error) {
      countUpUser.start();
    } else {
      console.error(countUpUser.error);
    }
    if (!countUpTime.error) {
      countUpTime.start();
    } else {
      console.error(countUpTime.error);
    }
  }

  useEffect(() => {
    initCountUp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack direction="row" spacing="26px" mt="32px">
      <Stack alignItems="center">
        <Typography variant="h4" fontSize="30px" fontWeight="bold">
          <span
            ref={countupUserRef}
            onClick={() => {
              countUpUser.reset();
              countUpUser.start();
            }}
          >
            17,000
          </span>
          +
        </Typography>
        <Typography variant="body2" color="#637381">
          {t('userActive')}
        </Typography>
      </Stack>
      <Stack alignItems="center">
        <Typography variant="h4" fontSize="30px" fontWeight="bold">
          <span
            ref={countupTimeRef}
            onClick={() => {
              countUpTime.reset();
              countUpTime.start();
            }}
          >
            99,9
          </span>
          %
        </Typography>
        <Typography variant="body2" color="#637381">
          {t('upTime')}
        </Typography>
      </Stack>
      <Stack alignItems="center">
        <Typography variant="h4" fontSize="30px" fontWeight="bold">
          24/7
        </Typography>
        <Typography variant="body2" color="#637381">
          {t('support')}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CountUp;

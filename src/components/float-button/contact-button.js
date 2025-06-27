'use client';

// mui
import { styled } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
// components
import Iconify from 'src/components/iconify';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'fixed',
  bottom: 16,
  right: 16,
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  {
    icon: <Iconify icon="simple-icons:zalo" color="white" />,
    name: 'Zalo',
    color: '#018ce5',
    path: 'https://zalo.me/g/ysmqye883',
  },
  {
    icon: <Iconify icon="lineicons:telegram" color="white" />,
    name: 'Telegram',
    color: '#00B8D9',
    path: 'https://t.me/mktlogin365',
  },
];

export default function ContactButton() {
  return (
    <StyledSpeedDial
      ariaLabel="Contract Speed Dial"
      icon={<Iconify icon="tabler:message-filled" />}
      direction="up"
    >
      {actions.map((action) => (
        <SpeedDialAction
          onClick={() => window.open(action.path, '_blank')}
          sx={{
            bgcolor: action.color,
            ':hover': {
              bgcolor: action.color + '80',
            },
          }}
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </StyledSpeedDial>
  );
}

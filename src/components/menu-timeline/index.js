'use client';
import React from 'react';
import PropTypes from 'prop-types';

// mui
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { useRouter } from 'src/i18n/navigation';

const ColorlibStepIconRoot = styled('div')(({ theme }) => ({
  backgroundColor: '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 20,
  height: 20,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        // backgroundImage: 'linear-gradient( 136deg, #118D57 0%, #22C55E 50%, #77ED8B 100%)',
        backgroundColor: 'transparent',
      },
    },
  ],
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <Typography variant="body2">1</Typography>,
    2: <Typography variant="body2">2</Typography>,
    3: <Typography variant="body2">3</Typography>,
    4: <Typography variant="body2">4</Typography>,
    5: <Typography variant="body2">5</Typography>,
    6: <Typography variant="body2">6</Typography>,
    7: <Typography variant="body2">7</Typography>,
    8: <Typography variant="body2">8</Typography>,
    9: <Typography variant="body2">9</Typography>,
    10: <Typography variant="body2">10</Typography>,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
      sx={{
        '& .MuiTypography-root.MuiTypography-body2': {
          color: '#637381',
          width: '20px',
          aspectRatio: '1 / 1',
          textAlign: 'center',
          lineHeight: '20px',
        },
      }}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const MenuTimeline = () => {
  const router = useRouter();

  return (
    <Stack
      sx={{
        display: { xs: 'none', lg: 'flex' },
        position: 'fixed',
        right: 12,
      }}
      spacing={1}
    >
      <Typography variant="subtitle1" color="#637381">
        Nội dung
      </Typography>

      <Stepper
        orientation="vertical"
        activeStep={10}
        sx={{
          '& .MuiStepConnector-root': {
            ml: '9px',
          },
        }}
      >
        {[
          { id: 'title_01', label: 'Quy định chung' },
          { id: 'title_02', label: 'Từ chối bảo đảm' },
          { id: 'title_03', label: 'Điều khoản sử dụng' },
          { id: 'title_04', label: 'Hành vi bị cấm' },
          { id: 'title_05', label: 'Quy định sử dụng dịch vụ' },
          { id: 'title_06', label: 'Điều khoản và chính sách' },
          { id: 'title_07', label: 'Giới hạn trách nhiệm' },
          { id: 'title_08', label: 'Bảo mật thông tin người dùng' },
          { id: 'title_09', label: 'Bản quyền và quyền sở hữu trí tuệ' },
          { id: 'title_10', label: 'Điều khoản khác' },
        ].map((step, index) => (
          <Step
            key={step.id}
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => {
              router.push(`#${step.id}`);
            }}
          >
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <Typography variant="caption">{step.label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default MenuTimeline;

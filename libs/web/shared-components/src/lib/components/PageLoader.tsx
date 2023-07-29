import React from 'react';
import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export const PageLoader: React.FC = () => {
  return (
    <Fade in={true}>
      <Stack
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress sx={{ color: 'primary.main' }} size={20} />
          <CircularProgress
            sx={{ color: 'primary.main', animationDelay: '-0.5s' }}
            size={20}
          />
          <CircularProgress
            sx={{ color: 'primary.main', animationDelay: '-1s' }}
            size={20}
          />
        </Stack>
      </Stack>
    </Fade>
  );
};

export default PageLoader;

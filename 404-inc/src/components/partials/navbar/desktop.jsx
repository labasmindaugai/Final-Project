import React from 'react';
import { Box, Button } from '@mui/material';

const Desktop = ({ breakpoint, handleMoveSection }) => {
  const desktopStyles = {
    display: { xs: 'none', [breakpoint]: 'flex' },
  };

  return (

    <Box
      sx={{
        display: 'flex',
        mt: '220px',
        width: '100vw',
        alignItems: 'center',
        ...desktopStyles,
      }}
    >
      <Box sx={{
        position: 'absolute',
        left: '60px',
      }}
      />
      <Box sx={{
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
      }}
      >
        <Button
          onClick={() => handleMoveSection(1)}
          sx={{ textShadow: '0px 0px 18px #ff5edb' }}
        >
          Main
        </Button>
        <Button
          onClick={() => handleMoveSection(2)}
          sx={{ textShadow: '0px 0px 18px #ff5edb' }}
        >
          STORE
        </Button>
        <Button
          onClick={() => handleMoveSection(3)}
          sx={{ textShadow: '0px 0px 18px #ff5edb' }}
        >
          FEATURES
        </Button>
        <Button
          onClick={() => handleMoveSection(4)}
          sx={{ textShadow: '0px 0px 18px #ff5edb' }}
        >
          GAMES
        </Button>
        <Button
          onClick={() => handleMoveSection(5)}
          sx={{ textShadow: '0px 0px 18px #ff5edb' }}
        >
          NEWSLETTER
        </Button>
      </Box>
    </Box>

  );
};

export default Desktop;

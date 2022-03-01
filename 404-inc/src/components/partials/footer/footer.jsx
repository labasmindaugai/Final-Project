import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTheme } from '@emotion/react';
import { Box, IconButton, Typography } from '@mui/material';
import Logo from '../navbar/logo';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      width: '80%',
      margin: 'auto',
    }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          color: 'common.white',
          borderBottom: `2px solid ${theme.palette.transparentLight.main}`,
        }}
      >
        <Box>
          <Logo
            height="50px"
          />
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.4rem',
        }}
        >
          <Typography
            fontSize="inherit"
            sx={{
              fontSize: {
                xs: '2vw',
                sm: '1.4vw',
                md: '1vw',
                lg: '0.7vw',
              },
              letterSpacing: '0.5px',
              mt: '4px',
              mr: '4px',
            }}
          >
            Follow us on
          </Typography>
          <IconButton href="x">
            <FacebookIcon fontSize="inherit" sx={{ color: 'white' }} />
          </IconButton>
          <IconButton href="x">
            <InstagramIcon fontSize="inherit" sx={{ color: 'white' }} />
          </IconButton>
          <IconButton href="x">
            <TwitterIcon fontSize="inherit" sx={{ color: 'white' }} />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          color: 'common.white',
          pb: '30px',
          mt: '10px',
        }}
      >
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontSize: {
              xs: '2vw',
              sm: '1.4vw',
              md: '1vw',
              lg: '0.7vw',
            },
            letterSpacing: '0.5px',
          }}
        >
          &reg; 2022, 404 Inc. All rights reserved
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontSize: {
              xs: '2vw',
              sm: '1.4vw',
              md: '1vw',
              lg: '0.7vw',
            },
            letterSpacing: '0.5px',
          }}
        >
          Privacy policy | Terms of service
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

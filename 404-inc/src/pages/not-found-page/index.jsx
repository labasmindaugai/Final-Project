import React from 'react';
import { Typography } from '@mui/material';
import NotFound from '../../components/containers/notfound-background';

const NotFoundPage = () => (
  <NotFound sx={{
    display: 'flex',
    justifyContent: 'center',
  }}
  >
    <Typography
      variant="h3"
      component="h1"
      sx={{
        color: '#FF5EDB',
        textShadow: '0px 0px 18px #ff5edb',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: {
          xs: '6vw',
          md: '4vw',
          lg: '1.35vw',
        },
        mb: 5,
      }}
    >
      You’re in the wrong place, my friend
      <br />
      You’d better leave
    </Typography>
  </NotFound>
);

export default NotFoundPage;

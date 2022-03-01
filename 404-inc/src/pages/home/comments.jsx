import {
  Box, Grid, Typography,
} from '@mui/material';
import React from 'react';

import NeutralBackground from '../../components/containers/neutral-background';
import SwiperGood from '../../components/swiper/swiper';

const Comments = () => (
  <Box
    className="section"
  >
    <NeutralBackground
      sx={{
        justifyContent: 'center',
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            sx={{
              display: 'flex',
              textShadow: '0px 0px 18px #ff5edb',
              color: '#FFF',
              fontSize: {
                xs: '2.5vw',
                sm: '2.2vw',
                md: '1.3vw',
                lg: '0.9vw',
              },
              letterSpacing: '0.5px',
            }}
          >
            “We see our customers as invited guests
            <br />
            to a party, and we
            are the hosts.
            <br />
            It’s
            our job every day to make
            <br />
            every important
            aspect of the customer
            <br />
            experience a little
            bit better,
            <br />
            so here you can see few
            <br />
            examples of
            best games in our console”
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box sx={{
            width: { xs: '70vw', md: '50vw', lg: '30vw' },
            height: { xs: '70vw', md: '50vw', lg: '45vw' },
            mt: '20px',
          }}
          >
            <SwiperGood />
          </Box>
        </Grid>

      </Grid>
    </NeutralBackground>
  </Box>
);

export default Comments;

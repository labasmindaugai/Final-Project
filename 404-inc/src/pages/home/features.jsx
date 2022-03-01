import {
  Box, Grid, Typography,
} from '@mui/material';
import React from 'react';
import NeutralBackground from '../../components/containers/neutral-background';
import Male from '../../components/images/male.jpg';

const Features = () => (
  <Box
    className="section"
  >
    <NeutralBackground
      sx={{
        justifyContent: 'center',
        textShadow: '0px 0px 18px #ff5edb',
      }}
    >
      <Grid
        container
      >
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
            lineHeight: '0',
            border: '4px solid #ff5edb',
            boxShadow: '0px 0px 20px #ff5edb',
            mb: '20px',
            width: {
              xs: '80%',
              sm: '65%',
              md: '35%',
              lg: '90%',

            },
          }}
          >
            <img src={Male} alt="Hoodie" width="100%" />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            sx={{
              // pl: '80px',
              display: 'flex',
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
            One might say this generation ended when the Super
            NES was officially discontinued in 2003 (having lasted a
            few years longer in Japan than America and elsewhere).
            But the Mega Drive, officially discontinued in 1998, has
            had an active afterlife; licensed games by third party
            developers have been sporadically released into The New 10s,
            and licensed Mega Drive units with built in games are still being
            sold today. The Super NES would later see similar plug-and-play
            units being released, if only for a limited time.
          </Typography>
        </Grid>
      </Grid>
    </NeutralBackground>
  </Box>
);

export default Features;

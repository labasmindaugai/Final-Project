import {
  Box, Grid, Typography,
} from '@mui/material';
import React from 'react';
import NeutralBackground from '../../components/containers/neutral-background';

const Features = ({ loading, sections }) => (
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
            <img src={sections ? sections[1].image : 'dummy text'} alt="Console" width="100%" />
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
          { !loading ? (
            <Typography
              variant="h6"
              component="h3"
              sx={{
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
              { sections ? sections[1].description : 'dummy text'}
            </Typography>
          ) : null}
        </Grid>
      </Grid>
    </NeutralBackground>
  </Box>
);

export default Features;

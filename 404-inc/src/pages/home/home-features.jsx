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
        spacing={3}
      >
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            pb: '10px',
          }}
        >
          <Box sx={{
            border: '4px solid #ff5edb',
            boxShadow: '0px 0px 20px #ff5edb',
            lineHeight: '0px',
            width: {
              xs: '80%',
              sm: '65%',
              md: '45%',
              lg: '80%',
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
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Box sx={{
            width: { xs: '86%', md: '46%' },
            mt: '10px',
          }}
          >
            { !loading ? (
              <Typography
                variant="h6"
                component="h3"
                sx={{
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
          </Box>
        </Grid>
      </Grid>
    </NeutralBackground>
  </Box>
);

export default Features;

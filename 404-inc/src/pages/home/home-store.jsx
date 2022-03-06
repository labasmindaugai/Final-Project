import {
  Box, Grid, Typography,
} from '@mui/material';
import React from 'react';
import NeutralBackground from '../../components/containers/neutral-background';
import pulse from '../../components/animations/pulse';
import LightButton from '../../components/buttons/button';
import BasicModal from '../../components/modals/modal';

const Store = ({ loading, sections }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box className="section">
      <NeutralBackground sx={{
        justifyContent: 'center',
      }}
      >
        <br />
        <Grid container spacing={3} mt="10px">
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={7}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#FF5EDB',
              textShadow: '0px 0px 18px #ff5edb',

            }}
          >
            <Box sx={{
              width: '65%',
            }}
            >
              { !loading ? (
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    pb: '2px',
                    fontSize: {
                      xs: '3.5vw',
                      sm: '3vw',
                      md: '1.7vw',
                      lg: '1.2vw',
                    },
                    lineHeight: '.9',
                    letterSpacing: '2px',
                  }}
                >
                  { sections ? sections[0].title : 'dummy text'}
                </Typography>
              ) : null}
            </Box>
            <Box sx={{
              width: '63%',
            }}
            >
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  fontSize: {
                    xs: '2.5vw',
                    sm: '3vw',
                    md: '1.7vw',
                    lg: '1.4vw',
                  },
                  lineHeight: '0.95',
                  letterSpacing: '2px',
                }}
              >
                THE LEGENDARY
                <br />
              &nbsp;&nbsp;8BIT GAME CONSOLE
              </Typography>
            </Box>
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
                    color: 'white',
                    fontSize: {
                      xs: '2.5vw',
                      sm: '2.2vw',
                      md: '1vw',
                      lg: '0.9vw',
                    },
                    letterSpacing: '0.5px',
                  }}
                >
                  { sections ? sections[0].description : 'dummy text'}
                </Typography>
              ) : null}
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Box sx={{
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
                  xs: '65%',
                  sm: '65%',
                  md: '25%',
                  lg: '80%',
                },
              }}
              >
                <img
                  src={sections ? sections[0].image : 'dummy text'}
                  alt="Console"
                  width="100%"
                />
              </Box>
              <Box pt="20px">
                <LightButton
                  sx={{
                    animation: `${pulse} 5s infinite`,
                    color: '#FF5EDB',
                    fontSize: { xs: '10px', sm: '20px' },
                    pb: '5px',
                  }}
                  onClick={handleOpen}
                >
                  GET ONE NOW
                </LightButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <BasicModal handleClose={handleClose} open={open} />
      </NeutralBackground>
    </Box>
  );
};
export default Store;

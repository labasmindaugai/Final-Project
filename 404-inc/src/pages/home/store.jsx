import {
  Box, Grid, Typography,
} from '@mui/material';
import React from 'react';
import NeutralBackground from '../../components/containers/neutral-background';
import Hoodie from '../../components/images/hoodie.jfif';
import pulse from '../../components/animations/pulse';
import LightButton from '../../components/buttons/button';
import BasicModal from '../../components/modals/modal';

const Store = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box className="section">
      <NeutralBackground sx={{
        justifyContent: 'center',
      }}
      >
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
                WHAT IS 127.0.0.1?
              </Typography>
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
                The 8-bit era, or Fourth Generation, kicked off with the release of
                the NEC/Hudson Soft console TurboGrafx-16 (or in Japan, the PC Engine)
                in 1987. Emerging as an unexpected viable competitor to Nintendo,
                the PC Engine/TurboGrafx ended up being the first system to outsell
                the Famicom in Japan, maintaining strong levels of success there
                and spurring Nintendo into action, so here our take on this legendary system
              </Typography>
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
                  src={Hoodie}
                  alt="Hoodie"
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
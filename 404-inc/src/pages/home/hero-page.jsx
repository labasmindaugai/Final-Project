import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import HeroBackground from '../../components/containers/hero-background';
import SlideOnMount from '../../components/animations/slide-on-mount/index';
import ScrollButtonDown from '../../components/buttons/scroll-button-down';

const Hero = ({ handleMoveSection }) => {
  const containerRef = useRef(null);

  return (
    <Box
      className="section"
      id="main"
      sx={{
        color: '#FF5EDB',
        textShadow: '0px 0px 18px #ff5edb',
      }}
    >
      <HeroBackground>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
          }}
        >
          <SlideOnMount
            direction="right"
            ref={containerRef}
          >
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              mt: '40px',
            }}
            >
              <Box>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: {
                      xs: '5vw',
                      sm: '6vw',
                      md: '3.5vw',
                      lg: '2.5vw',
                    },
                  }}
                >
                  THERE IS NO
                </Typography>
              </Box>
              <SlideOnMount
                direction="left"
                ref={containerRef}
              >
                <Box>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                      fontSize: {
                        xs: '7vw',
                        sm: '5vw',
                        md: '3.5vw',
                        lg: '2.5vw',
                      },
                    }}
                  >
                    PLACE LIKE
                  </Typography>
                </Box>
              </SlideOnMount>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  fontSize: {
                    xs: '5vw',
                    sm: '4vw',
                    md: '4vw',
                    lg: '2.5vw',
                  },
                }}
              >
                127.Ø.Ø.1
              </Typography>
            </Box>
          </SlideOnMount>
        </Box>
        <Typography sx={{
          fontSize: {
            xs: '3vw',
            sm: '2vw',
            md: '1.8vw',
            lg: '1vw',
          },
        }}
        >
          Check it out
        </Typography>
        <ScrollButtonDown onClick={handleMoveSection} />
      </HeroBackground>
    </Box>
  );
};

export default Hero;

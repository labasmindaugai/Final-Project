import {
  Box, Typography,
} from '@mui/material';
import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
// import { makeStyles } from '@mui/styles';
import StyledTextField from '../../components/textfields/styled-textfield';
import LightButton from '../../components/buttons/button';
import NewsBackground from '../../components/containers/news-background';
import Footer from '../../components/partials/footer/footer';
import ScrollButtonUp from '../../components/buttons/scroll-button-up';
import SubscriberService from '../../services/subscriber-service';

// const useStyles = makeStyles({
//   root: {
//     '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
//       border: 'none',
//     },
//     '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
//       borderColor: 'red',
//     },
//     '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
//       border: '1px solid',
//       borderColor: 'white',
//     },
//   },
// });

const validationSchema = yup.object({
  email: yup.string()
    .required('Is required')
    .email('Is not valid email'),
});

const initialValues = {
  email: '',
};

const Newsletter = ({ handleMoveSection }) => {
  const onSubmit = async (data) => {
    await SubscriberService.createSubscriber(data);
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    // dirty,
    // isSubmitting,
    // isValid,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box
      className="section"
    >
      <NewsBackground>
        <ScrollButtonUp onClick={handleMoveSection} />
        <Typography sx={{
          color: '#FF5EDB',
          textShadow: '0px 0px 18px #ff5edb',
          fontSize: {
            xs: '3vw',
            sm: '2vw',
            md: '1.5vw',
            lg: '1vw',
          },
        }}
        >
          Back To Top
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexGrow: 1,
            pl: { xs: '0', md: '500px' },
            pt: { xs: '0', md: '140px' },
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'left',
            color: 'common.white',
            padding: '10px',
            textShadow: '0px 0px 18px #ff5edb',
          }}
          >
            <Box>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  pb: '30px',
                  fontSize: {
                    xs: '3.2vw',
                    sm: '3vw',
                    md: '1.7vw',
                    lg: '1vw',
                  },
                  lineHeight: '0.9',
                  letterSpacing: '2px',
                }}
              >
                WANT TO STAY IN TOUCH?
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  color: '#FF5EDB',
                  pb: '10px',
                  fontSize: {
                    xs: '4.2vw',
                    sm: '3vw',
                    md: '3vw',
                    lg: '1.5vw',
                  },
                  lineHeight: '0.95',
                  letterSpacing: '2px',
                }}
              >
                NEWSLETTER SUBSCRIBE
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontSize: {
                    xs: '2.3vw',
                    sm: '1.5vw',
                    md: '1vw',
                    lg: '1vw',
                  },
                  letterSpacing: '0.5px',
                }}
              >
                In order to start receiving our news,
                <br />
                all you have to do is enter your email
                <br />
                address. Everything else will be taken
                <br />
                care of by us. We will send you emails
                <br />
                containing information about product.
                <br />
                We don’t spam.
              </Typography>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                pt: '20px',
              }}
            >
              <StyledTextField
                label="email"
                name="email"
                value={values.email}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                // className={classes.root}
                size="small"
                sx={{ textShadow: 'none', fontSize: { xs: '10px', md: '20px' } }}
              />
              <LightButton
                type="submit"
                sx={{
                  fontSize: { xs: '11.2px', sm: '16px' },
                }}
              >
                Subscribe Now
              </LightButton>
            </Box>
          </Box>
        </Box>
        <Footer />
      </NewsBackground>
    </Box>
  );
};

export default Newsletter;

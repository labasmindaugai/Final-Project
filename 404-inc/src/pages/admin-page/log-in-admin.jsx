import React, { useState } from 'react';
import {
  Grid,
  Alert,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import routes from '../../routing/routes';
import { login } from '../../store/auth';
import AuthForm from '../../components/auth-form';
import AuthService from '../../services/auth-service';
import StyledTextField from '../../components/textfields/styled-textfield';
import Welcome from '../../components/images/shop.gif';

const validationSchema = yup.object({
  email: yup.string()
    .required('Is required')
    .email('Is not valid email'),
  password: yup.string()
    .required('Is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [urlSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const onSubmit = async ({ email, password }) => {
    setError(null);
    try {
      const user = await AuthService.login({
        email,
        password,
      });

      const redirectTo = urlSearchParams.get(' ');
      const loginSuccessAction = login({
        user,
        redirectTo,
      });
      dispatch(loginSuccessAction);
    } catch (err) {
      setError(err.message);
    }
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    isValid,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Grid container component="main" sx={{ height: '100vh', backgroundColor: '#070818' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${Welcome})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} elevation={6}>
        <AuthForm
          title="Log In"
          linkTo={routes.LogInAdmin}
          loading={isSubmitting}
          isValid={isValid && dirty}
          onSubmit={handleSubmit}
          sx={{ textColor: 'green' }}
        >
          <Alert severity="error" sx={{ my: 2, visibility: error ? 'visible' : 'hidden' }}>
            {error}
          </Alert>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <StyledTextField
                name="email"
                variant="outlined"
                label="Email"
                value={values.email}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                fullWidth
                size="medium"
                autoComplete="email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 4 }}>
              <StyledTextField
                name="password"
                variant="outlined"
                label="Password"
                type="password"
                value={values.password}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                fullWidth
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
        </AuthForm>
      </Grid>
    </Grid>
  );
};

export default LoginPage;

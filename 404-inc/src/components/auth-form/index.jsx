import React from 'react';
import {
  Container,
  Box,
  Avatar,
  Typography,
  CircularProgress,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import Button from './auth-form-button';

const AuthForm = ({
  children,
  title,
  linkTo,
  linkTitle,
  loading,
  onSubmit,
  isValid,
}) => (
  <Container
    maxWidth="xs"
    component="main"
    sx={{ pt: '7vh' }}
  >
    <Box component="form" onSubmit={onSubmit}>
      <Box sx={{
        mb: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ color: 'white' }}>
          {title}
        </Typography>
      </Box>
      {children}
      <Button disabled={!isValid}>
        {
        loading
          ? <CircularProgress color="inherit" />
          : title
        }
      </Button>
      <Link to={linkTo}>
        {linkTitle}
      </Link>
    </Box>
  </Container>
);

export default AuthForm;

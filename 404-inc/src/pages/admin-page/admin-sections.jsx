/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Grid,
  Alert,
  Button,
  TextField,
  TextareaAutosize,
  Box,
  Checkbox,
  Select,
  Input,
  MenuItem,
  Typography,
  IconButton,
  Paper,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import DeleteIcon from '@mui/icons-material/Delete';
import routes from '../../routing/routes';
import { login } from '../../store/auth';
import AuthForm from '../../components/auth-form';
import AuthService from '../../services/auth-service';
import StyledTextField from '../../components/textfields/styled-textfield';
import FormikSelect from '../../components/select/formik-select';
import SectionService from '../../services/section-service';

const validationSchema = yup.object({
  title: yup.string()
    .required('Is required'),
  section: yup.string()
    .required('Is required'),
  description: yup.string()
    .required('Is required'),
});

const initialValues = {
  title: '',
  section: '',
  description: '',
  image: '',
};

const Sections = () => {
  const [error, setError] = useState(null);

  const onSubmit = async ({
    title, section, description, image,
  }) => {
    console.log(title, section, description, image);
    try {
      await SectionService.createSection({
        title, section, description, image,
      });
    } catch (err) {
      console.log(err);
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
  // <Box component="form" onSubmit={handleSubmit}
  // sx={{ width: '100%', display: 'flex', alignContent: 'center' }}>
  //   <Grid container>
  //     <Typography>Upload Images</Typography>
  //     <Grid item xs={12} sm={8} md={5} lg={12}>
  //       <TextField
  //         name="title"
  //         value={values.title}
  //         variant="outlined"
  //         label="Title"
  //         error={touched.title && Boolean(errors.title)}
  //         helperText={touched.title && errors.title}
  //         onChange={handleChange}
  //         onBlur={handleBlur}
  //         disabled={isSubmitting}
  //         size="medium"
  //       />
  //     </Grid>
  //     <Grid item xs={12} sm={8} md={5} lg={12}>
  //       <FormikSelect
  //         name="section"
  //         value={values.section}
  //         label="Section"
  //         error={touched.section && Boolean(errors.section)}
  //         helperText={touched.section && errors.section}
  //         onChange={handleChange}
  //         onBlur={handleBlur}
  //         disabled={isSubmitting}
  //         size="medium"
  //       />
  //     </Grid>
  //     <Grid item xs={12} sm={8} md={5} lg={12}>
  //       <TextareaAutosize
  //         name="description"
  //         value={values.description}
  //         onChange={handleChange}
  //       />
  //     </Grid>
  //     <Grid item xs={12} sm={8} md={5} lg={12}>
  //       <Input
  //         name="image"
  //         type="file"
  //         onChange={handleChange}
  //       />
  //     </Grid>
  //     <Grid item xs={12} sm={8} md={5} lg={12}>
  //       <Button
  //         type="submit"
  //         variant="contained"
  //         color="primary"
  //       // onClick={() => fileUploadRef.current?.click()}
  //         sx={{ my: 1 }}
  //       >
  //         Upload

    //       </Button>
    //     </Grid>
    //   </Grid>
    // </Box>
    <Box component="form" sx={{ p: 3 }} onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ mb: 2 }}>Image Upload</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          name="title"
          value={values.title}
          variant="outlined"
          label="Title"
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          size="medium"
        />
        <FormikSelect
          label="Section"
          name="section"
          select
          value={values.section}
          error={touched.section && Boolean(errors.section)}
          helperText={touched.section && errors.section}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          size="medium"
        />
        {/* <Autocomplete
          multiple
          disableCloseOnSelect
          // options={initialCities}
          // value={values.cities}
          // onChange={handleCitiesChange}
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <MenuItem {...props}>
              <Checkbox sx={{ mr: 1 }} checked={selected} />
              {option.title}
            </MenuItem>
          )}
          renderInput={(params) => (<TextField {...params} label="Miestai" />)}
        /> */}
        <TextField
          label="Description"
          name="description"
          value={values.description}
          onChange={handleChange}
          inputProps={{
            sx: { height: 80 },
          }}
        />
        <Input
          name="image"
          type="file"
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
        // onClick={() => fileUploadRef.current?.click()}
          sx={{ my: 1 }}
        >
          Upload Image
        </Button>
      </Box>
    </Box>
  );
};

export default Sections;

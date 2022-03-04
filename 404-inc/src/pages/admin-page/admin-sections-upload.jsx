/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Button,
  TextField,
  Box,
  Input,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
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
};

const Sections = () => {
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [_sections, setSections] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const { sections } = await SectionService.getSections();
      setSections(sections);
      setLoading(false);
    })();
  }, []);

  const onSubmit = async ({
    title, section, description,
  }) => {
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
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleImageChange = (event) => setImage(event.target.files);

  return (
    <Box component="form" sx={{ p: 3 }} onSubmit={handleSubmit}>
      {/* { !loading && _sections ? (
        <>
          <p>{_sections[0].title}</p>
          <img src={_sections[0].image} alt="Italian Trulli" />
        </>
      ) : null} */}
      <Typography variant="h4" sx={{ mb: 2 }}>Section Upload</Typography>
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
          onChange={handleImageChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ my: 1 }}
        >
          Upload Section
        </Button>
      </Box>
    </Box>
  );
};

export default Sections;

import React from "react";
import { Field, FieldArray, Formik } from 'formik';
import { Grid, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Basic = () => {
  const [value, setValue] = React.useState(dayjs(''));
  return(
  <div>
    
  <Typography sx={{fontFamily:'Alice',fontSize:{lg:"40px",xs:"28px"}, marginBottom:{md:"0px" , xs:"20px"} ,textAlign:"left"}}> Become One of Us</Typography>
  <Typography sx={{fontFamily:'Gilroy-Medium',fontSize:{lg:"19px",xs:"12px"},lineHeight:{md:"40px"}, width:{md:"1239px"} , height:{md:"240px"}, marginLeft:{md:"30px"}, marginBottom:{md:"18px" , xs:"20px"} ,textAlign:"left"}}>Lorem ipsum dolor sit amet consectetur. Viverra pellentesque volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut vitae felis convallis. Egestas enim diam ac nisi orci id tellus lobortis. Lacus in etiam rhoncus.</Typography>
    <Formik
      initialValues={{Name:"" , lastName : "", sex: ["men" , "women"], phoneNumber :"" , mobileNumber:"",addres : "" , postalCard : "" ,   email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid md={3}>
             <Stack direction={"column"}>
        <label>Name</label>
        <Field
            type="text"
            name="Name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Stack>
          </Grid>
          <Grid md={3}>
             <Stack>
        <label>last Name</label>
            <Field
            type="text"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Stack>
          </Grid>
          <Grid md={3}>
           <Stack>
        <label>Date of birth</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container>
          <Grid md={4}> <DatePicker
          views={['year']}
          label="Year"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        /></Grid>
          <Grid md={6}>
          <DatePicker
          views={['month']}
          label="month"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
          </Grid>
          <Grid md={6}> <DatePicker
          views={['day']}
          label="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        /></Grid>
        </Grid>
        </LocalizationProvider>
        </Stack>
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={3}>
            <Stack>
              <label>Phone number</label>
              <Field type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  name="phoneNumber"
            onChange={handleChange}
            onBlur={handleBlur} />
            </Stack>
          </Grid>
          <Grid md={3}>
            <Stack>
              <label>Mobile number</label>
              <Field type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  name="mobileNumber"
            onChange={handleChange}
            onBlur={handleBlur} />
            </Stack>
          </Grid>
        </Grid>
        <Stack>
        <label>Email address</label>
          <Field
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
        </Stack>
          {/* <Field
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          /> */}
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <button type="reset" disabled={isSubmitting}>
            Cancel
          </button>
        </form>
      )}
    </Formik>
  </div>
)
        };

export default Basic;
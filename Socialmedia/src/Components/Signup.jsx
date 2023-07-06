import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { Register } from '../api/AuthRequest/AuthRequest';
const defaultTheme = createTheme();


import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async ({ name, userName, email, number, password }) => {
        const formdata = { name, userName, email, number, password }
        console.log(formdata);

        const response = await Register(formdata)
         if(response.status==="success"){
           navigate('/')
         }
      

    };

    const validatePhoneNumber = (value) => {
        if (value.length !== 10) {
            return 'Phone Number should be a 10-digit number';
        }
        if (!/^\d+$/.test(value)) {
            return 'Phone Number should only contain numbers';
        }
        return undefined;
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" sx={{ justifyContent: 'center', mt: 5 }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Full Name"
                            name="name" // Use a valid name for the input field
                            autoFocus
                            {...register('name', {
                                required: 'fullname is required',
                            })} // Register the field with react-hook-form
                            error={!!errors.name} // Set error state based on validation
                            helperText={errors.name?.message} // Display validation error message
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="Username"
                            name="userName" // Use a valid name for the input field
                            autoFocus
                            {...register('userName', {
                                required: 'userName is required',
                            })} // Register the field with react-hook-form
                            error={!!errors.userName} // Set error state based on validation
                            helperText={errors.userName?.message} // Display validation error message
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                            autoComplete="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="number"
                            label="Phone Number"
                            type="text"
                            id="number"
                            {...register('number', { validate: validatePhoneNumber })}
                            error={!!errors.number}
                            helperText={errors.number?.message}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password should be at least 8 characters',
                                },
                            })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirm-password"
                            {...register("confirmPassword", { required: "password not matched", validate: value => value === watch('password') })}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword?.message}
                        />

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {'Don\'t have an account? Sign Up'}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Signup;


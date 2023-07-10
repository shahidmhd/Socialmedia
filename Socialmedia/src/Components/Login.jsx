import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { googleLogin, LoginUser } from '../api/AuthRequest/AuthRequest';
import { useNavigate } from 'react-router-dom';
import { setLogin } from '../redux/Authslice';
const defaultTheme = createTheme();
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async ({ userName, password }) => {
        const formdata = { userName, password }
        const response = await LoginUser(formdata, handleToast)
        console.log(response);
        if (response.status === "success") {
            handleToast(response.message, response.status)
            setTimeout(() => {
                dispatch(setLogin(response));
                navigate('/')
            }, 2000)
        } else {
            handleToast("something went wrong", "error")
        }

    };

    const handleToast = (message, type) => {
        if (type === "success") {
            toast.success(message);
        } else if (type === "error") {
            toast.error(message);
        }
    };




    const submit = async (decoded) => {
        const name = decoded.given_name
        const userName = decoded.name
        const email = decoded.email
        const formdata = { name, userName, email }
        const response = await googleLogin(formdata)
        console.log(response, "res");
        if (response.status === "success") {
            dispatch(setLogin(response));
            navigate('/')
        }

    }



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
                        Log in
                    </Typography>


                    {/* <Button onClick={submit} type="submit" startIcon={<GoogleIcon />} fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
                        Google with login
                    </Button> */}
                    <GoogleOAuthProvider clientId="632819420631-vemapc16920pph63ugk3ajeiphk409pp.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                const decoded = jwt_decode(credentialResponse.credential);
                                { submit(decoded) }
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />

                    </GoogleOAuthProvider>
                    <Typography component="h1" variant="p" mt={1}>
                        OR
                    </Typography>


                    <form noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="UserName"
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
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Log In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/Signup" variant="body2">
                                    {'create account? Sign Up'}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
                < ToastContainer />
            </Container>
        </ThemeProvider>
    );
};

export default Login;


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
import GoogleIcon from '@mui/icons-material/Google';
import { useForm } from 'react-hook-form';
import { LoginUser } from '../api/AuthRequest/AuthRequest';
import { useNavigate } from 'react-router-dom';
import { setLogin } from '../redux/Authslice';
const defaultTheme = createTheme();
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async({userName,password }) => {
        const formdata = {userName,password}
        console.log(formdata);

        const response =await LoginUser(formdata)
        console.log(response,"rrrr");
        if(response.status==="success"){
            dispatch(setLogin(response));
         navigate('/')
        }

    };



//googlelogin
const handleGoogleLogin = async()=>{
    await signInWithPopup(auth,provider).then(async (UserCredentials)=>{
    console.log(UserCredentials);
    })
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


                    <Button onClick={handleGoogleLogin} type="submit" startIcon={<GoogleIcon/>} fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
                            Google with login
                        </Button>
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
                < ToastContainer/>
            </Container>
        </ThemeProvider>
    );
};

export default Login;


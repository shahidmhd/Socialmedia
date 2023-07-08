import { Avatar, Box, Button, Container, Grid, IconButton, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { adminLogin } from '../../api/adminRequest/Adminrequest';
import  {useDispatch} from 'react-redux'
import { setAdminLogin } from '../../redux/Authslice';

const AdminLogin = () => {
    const dispatch=useDispatch()
    const [showPassword, setShowPassword] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };



    const validateUserName = (value) => {
        if (value.trim() === '') {
            return 'only space is not required';
        }
        return true;
    }



    const onSubmit = async ({ userName, password }) => {
        const formData = { userName, password };
        const response = await adminLogin(formData)
        console.log(response, "response admin");
        dispatch(setAdminLogin(response))
    };





    return (
        <Container maxWidth="sm" sx={{ justifyContent: 'center' }}>
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
                    Admin Login
                </Typography>

                <form noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="userName"
                        label="UserName"
                        name="userName"
                        autoFocus
                        {...register('userName', {
                            required: 'userName is required',
                            validate: validateUserName
                        })}
                        error={!!errors.userName}
                        helperText={errors.userName?.message}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
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
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={togglePasswordVisibility} edge="end">
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            ),
                        }}
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
                            <Link to="/admin" variant="body2">
                                {'create account? Sign Up'}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default AdminLogin;

import { Box, Button, Divider, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../api/UsereRequest/UserApi';
import { setUpdate } from '../../redux/Authslice';

const Editprofile = ({ open, setopen, name, userName, email, number, userId,setrender,render }) => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.Authslice.token)


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
    };


    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();


 
    // State for edited values
    const [editedValues, setEditedValues] = useState({
        name: name,
        userName: userName,
        email: email,
        number: number,
        image: null,
    });


    // Handle form submission
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('userName', data.userName);
        formData.append('Bio', data.Bio);
        formData.append('email', data.email);
        formData.append('number', data.number);
        formData.append('image', editedValues.image);
        // Perform necessary actions with the form data
        console.log(formData);
        const updated = await updateProfile(userId, token, formData)
        dispatch(setUpdate(updated))
        setrender(!render)
        console.log(updated, "updated");
        // ...
        setopen(false); // Close the modal after submission
    };

    // Update edited values when name or userName changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    // Set the initial values for the form fields
    useEffect(() => {
        setValue('name', name);
        setValue('userName', userName);
        setValue('email', email);
        setValue('number', number);
    }, [name, userName, email, number, setValue]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setEditedValues((prevValues) => ({ ...prevValues, image: file }));
    };

    return (
        <>
            <Modal
                open={open}
                onClose={() => {
                    setopen(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6" align="center">
                        Edit profile
                    </Typography>
                    <Divider />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    defaultValue={editedValues.name}
                                    inputProps={{ ...register('name', { required: true }) }}
                                    onChange={handleInputChange}
                                    error={!!errors.name}
                                    helperText={errors.name ? 'Name is required' : ''}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="userName"
                                    label="Username"
                                    name="userName"
                                    defaultValue={editedValues.userName}
                                    inputProps={{ ...register('userName', { required: true }) }}
                                    onChange={handleInputChange}
                                    error={!!errors.userName}
                                    helperText={errors.userName ? 'Username is required' : ''}
                                />
                            </Box>
                            <TextField
                                margin="normal"
                                fullWidth
                                id="bio"
                                label="Bio"
                                name="Bio"
                                inputProps={{ ...register('Bio') }}
                                onChange={handleInputChange}
                            />


                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                defaultValue={editedValues.email}
                                inputProps={{ ...register('email', { required: true }) }}
                                onChange={handleInputChange}
                                error={!!errors.email}
                                helperText={errors.email ? 'Email is required' : ''}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="number"
                                label="Phone Number"
                                name="number"
                                defaultValue={editedValues.number}
                                inputProps={{ ...register('number', { required: true }) }}
                                onChange={handleInputChange}
                                error={!!errors.number}
                                helperText={errors.number ? 'Phone number is required' : ''}
                            />
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <label htmlFor="file-input" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Box
                                        sx={{
                                            width: '320px',
                                            height: '100px',
                                            border: '2px dashed #ccc',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            gap: '8px',
                                        }}
                                    >
                                        {editedValues.image ? (
                                            <img src={URL.createObjectURL(editedValues.image)} alt="Selected" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                                        ) : (
                                            <Typography variant="body1" component="span" color="textSecondary">
                                                Upload Image
                                            </Typography>
                                        )}
                                        <input type="file" id="file-input" style={{ display: 'none' }} onChange={handleFileChange} />
                                    </Box>
                                </label>
                            </Box>
                            <Button type="submit" variant="contained" sx={{ margin: 2 }}>
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default Editprofile;


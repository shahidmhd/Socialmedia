import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Divider, Modal, Stack, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ViewCompactOutlinedIcon from '@mui/icons-material/ViewCompactOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import Editprofile from '../Modal/Editprofile';
import Postwidget from '../widget/Postwidget';
import { useSelector } from 'react-redux';


function Profile() {

    const name = useSelector((state) => state.Authslice.user.name);
    const userName=useSelector((state)=>state.Authslice.user.userName)
    const email=useSelector((state)=>state.Authslice.user.email)
    const number=useSelector((state)=>state.Authslice.user.number)
    const [value, setValue] = useState(0);
    const [open, setopen] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
          

            {/* navbar */}
            <Navbar />
            <Box mt={7} sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
                    <Grid item xs={3} sm={3} md={3} lg={2} >
                        <Sidebar />
                    </Grid>
                    <Grid item xs={9} sm={9} md={9} lg={8} >
                        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
                            <Box p={{ xs: 2, md: 7 }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://media.gettyimages.com/id/692909922/photo/hes-off-on-an-adventure.jpg?s=612x612&w=gi&k=20&c=29CscuUPzOo7zGCwuldYkoZtX_nqA8v2D7hCP9EJXww="
                                    sx={{ width: 150, height: 150 }}
                                />
                            </Box>
                            <Box p={{ xs: 2, md: 7 }} display="flex" flexDirection="column" justifyContent="center">
                                <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
                                    <Typography variant="h6">{userName}</Typography>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        endIcon={<EditIcon />}
                                        onClick={() => { setopen(true) }}
                                    >
                                        Edit profile
                                    </Button>
                                    {open && <Editprofile name={name} userName={userName} email={email} number={number} open={open} setopen={setopen} />}
                                    {/* <Button
                                        variant="contained"
                                        size="small"
                                    >
                                        follow
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color='inherit'
                                        size="small"
                                    >
                                        message
                                    </Button> */}
                                </Stack>
                                <Box mt={2}>
                                    <Stack spacing={2} direction="row">
                                        <Typography>10 posts</Typography>
                                        <Typography>10k followers</Typography>
                                        <Typography>20k following</Typography>
                                    </Stack>
                                    <Typography>{name}</Typography>
                                    <Typography>Mern stack developer    </Typography>

                                </Box>
                            </Box>
                        </Box>
                        <Divider sx={{ width: '100%' }} />
                        <Stack pl={5}>
                            <Tabs

                                value={value}
                                onChange={handleChange}
                                aria-label="icon position tabs example"
                            >
                                <Tab icon={<ViewCompactOutlinedIcon />} iconPosition="start" label="post" />
                                <Tab icon={<TurnedInNotOutlinedIcon />} iconPosition="start" label="saved" />

                            </Tabs>
                        </Stack>
                        <stack>
                        <Postwidget />
                        </stack>

                    </Grid>
                    

                </Grid>
            </Box>

        </>
    );
}

export default Profile;


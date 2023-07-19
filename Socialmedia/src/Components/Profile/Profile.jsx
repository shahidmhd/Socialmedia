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
import { useSelector, useDispatch } from 'react-redux';
import { followReq } from '../../api/UsereRequest/UserApi';
import { setFollowers, setFollowing } from '../../redux/Authslice';




function Profile({ userData, setrender, render, currentuser, id }) {

    const dispatch = useDispatch()

    const token = useSelector((state) => state.Authslice.token);
    const userId = useSelector((state) => state.Authslice.user._id);
    const following = useSelector((state) => state.Authslice.user.following);
    const isFollowing = following.find((following) => following._id === id);
    const followers = useSelector((state) => state.Authslice.user.followers);
    const isFollower = followers.find((followers) => followers._id === id);
    const [value, setValue] = useState(0);
    const [open, setopen] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // console.log(following,"folloewing");
    // console.log(isFollowing,"isfollowing");
    const handleFollow = async () => {
        console.log(token, userId, userData?._id);
        const response = await followReq(userId, userData?._id, token);
        console.log(response);
        dispatch(setFollowers({ followers: response.followers }));
        dispatch(setFollowing({ following: response.following }));
        // console.log(response, "response");

    }
    console.log(following, "following");

    console.log(isFollowing, "gggggggggggggggggggggggg");




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
                                {userData?.image ?
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={userData.image}
                                        sx={{ width: 150, height: 150 }}
                                    /> :
                                    <Avatar sx={{ width: 150, height: 150 }}>
                                        !
                                    </Avatar>
                                }


                            </Box>
                            <Box p={{ xs: 2, md: 7 }} display="flex" flexDirection="column" justifyContent="center">
                                <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
                                    <Typography variant="h6">{userData?.userName}</Typography>
                                    {
                                        currentuser ? (
                                            <Button
                                                variant="contained"
                                                size="small"
                                                endIcon={<EditIcon />}
                                                onClick={() => setopen(true)}
                                            >
                                                Edit profile
                                            </Button>
                                        ) : (
                                            <>
                                                <Button variant="contained" size="small" onClick={handleFollow}>
                                                    {isFollowing ? "Unfollow" : (isFollower ? "Follow Back" : "Follow")}
                                                </Button>

                                                <Button variant="contained" color="inherit" size="small">
                                                    Message
                                                </Button>
                                            </>
                                        )
                                    }
                                </Stack>
                                {open && <Editprofile name={userData.name} userName={userData.userName} email={userData.email} number={userData.number} userId={userData._id} setrender={setrender} render={render} open={open} setopen={setopen} />}
                                <Box mt={2}>
                                    <Stack spacing={2} direction="row">
                                        <Typography>10 posts</Typography>
                                        <Typography>10k followers</Typography>
                                        <Typography>20k following</Typography>
                                    </Stack>
                                    <Typography>{userData?.name}</Typography>
                                    <Typography>{userData?.Bio ? userData.Bio : ""}</Typography>


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


import { AppBar, Badge, Box, InputBase, Toolbar, Typography, Avatar, Menu, MenuItem, Drawer, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide, Button } from '@mui/material'
// import InstagramIcon from '@mui/icons-material/Instagram';
import React, { useState } from 'react'
import styled from '@emotion/styled';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import MuiDrawer from './Drawer';
import { useDispatch } from 'react-redux';
import { setLogout } from "../redux/Authslice";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'blue'
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    width: '40%'

}))

const Icons = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
}))



const Navbar = () => {
    const [openmodal, setOpenmodal] = useState(false);
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const Logoutuser=()=>{
        dispatch(setLogout())
    }

    const handleClose = () => {
        setOpenmodal(false);
    };
    return (
        <AppBar position='fixed'>
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }} >TrendNet</Typography>
                <ViewSidebarIcon onClick={() => setDrawerOpen(true)} sx={{ display: { xs: 'block', sm: 'none' } }} />
                <MuiDrawer isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
                {/* <InstagramIcon sx={{ display: { xs: 'block', sm: 'none' } }} /> */}
                <Search style={{ borderRadius: '5px' }}><InputBase placeholder='search......' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }}
                        alt="Remy Sharp"
                        src="https://www.shutterstock.com/image-photo/stylish-handsome-man-on-color-260nw-1294745323.jpg"
                        onClick={e => setOpen(true)}
                    />
                    {/* <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>shahid</Typography> */}
                </Icons>
                <Menu
                    id="basic-menu"
                    open={open}
                    onClose={e => setOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    // onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    {/* <MenuItem onClick={() => dispatch(setLogout())} >Logout</MenuItem> */}
                    <MenuItem onClick={() => setOpenmodal(true)} >Logout</MenuItem>

                    {/* dialog modal */}

                    <Dialog
                        open={openmodal}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"are you sure?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                you can click yes to Logout
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>No</Button>
                            <Button onClick={Logoutuser}>yes</Button>
                        </DialogActions>
                    </Dialog>
                    {/* end dialog modal */}




                </Menu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar

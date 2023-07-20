import { Avatar, Box, ButtonGroup, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Switch, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SendIcon from '@mui/icons-material/Send';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import React, { useState } from 'react'
import Addphoto from './Modal/Addphoto';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({setrender}) => {
  const [open, setopen] = useState(false)
  
  const handleModalOpen = () => {
    setopen(true);
  };

  const navigate=useNavigate()

  const userId=useSelector((state) => state.Authslice.user._id)


  return (
    <Box
    
      
      m={1}
    >
      <Box position='fixed' borderRight={1} height={"100%"} py={5}>
        <List>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <Link to="/home"><ListItemText primary="Home"  sx={{ display: { xs: 'none', sm: 'block' } }}/></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{mt:2}}>
            <ListItemButton component="a" href='#sample'>
              <ListItemIcon>
                <PeopleAltRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Search"   sx={{ display: { xs: 'none', sm: 'block' } }}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{mt:2}}>
            <ListItemButton onClick={handleModalOpen}>
              <ListItemIcon>
                <AddAPhotoIcon />
              </ListItemIcon>
              <ListItemText  primary="New post"   sx={{ display: { xs: 'none', sm: 'block' } }}/>
            </ListItemButton>
          </ListItem>
         {open && <Addphoto open={open} setopen={setopen} setrender={setrender}/>}
          <ListItem disablePadding sx={{mt:2}}>
            <ListItemButton component="a" href='#sample'>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <Link to="/chat"><ListItemText primary="Message"  sx={{ display: { xs: 'none', sm: 'block' } }}/></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{mt:2}}>
            <ListItemButton>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="Notification"   sx={{ display: { xs: 'none', sm: 'block' } }}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{mt:2}}>
            <ListItemButton >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="settings"  sx={{ display: { xs: 'none', sm: 'block' } }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{mt:2}} onClick={()=>navigate(`/profile/${userId}`)} >
            <ListItemButton >
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="profile"  sx={{ display: { xs: 'none', sm: 'block' } }}/>
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding>
            <ListItemButton component="a" href='#sample'>
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem> */}
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar

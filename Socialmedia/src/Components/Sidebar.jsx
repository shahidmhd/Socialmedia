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


const Sidebar = () => {
  const [open, setopen] = useState(false)
  
  const handleModalOpen = () => {
    setopen(true);
  };


  return (
    <Box
    
      
      m={1}
    >
      <Box position='fixed' borderRight={1} height={"100%"} py={5}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home"  sx={{ display: { xs: 'none', sm: 'block' } }} />
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
         {open && <Addphoto open={open} setopen={setopen}/>}
          <ListItem disablePadding sx={{mt:2}}>
            <ListItemButton component="a" href='#sample'>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Message"  sx={{ display: { xs: 'none', sm: 'block' } }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{mt:2}}>
            <ListItemButton component="a" href='#sample'>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="Notification"   sx={{ display: { xs: 'none', sm: 'block' } }}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{mt:2}}>
            <ListItemButton component="a" href='#sample'>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="settings"  sx={{ display: { xs: 'none', sm: 'block' } }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{mt:2}}>
            <ListItemButton component="a" href='#sample'>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="profile"  sx={{ display: { xs: 'none', sm: 'block' } }} />
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

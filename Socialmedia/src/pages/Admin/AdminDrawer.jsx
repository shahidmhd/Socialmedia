import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SendIcon from '@mui/icons-material/Send';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const adminDrawer = ({adminDrawerOpen, setadminDrawerOpen}) => {
    return (
        <>
            <Box pt={3} pl={3} sx={{cursor: 'pointer'}}>
                <Drawer anchor='left' open={adminDrawerOpen} onClose={() => setadminDrawerOpen(false)}>
                    <Box p={2} width={'250px'} textAlign={'center'} role='presentation'>
                        <Typography variant="h6" fontWeight={'bolder'} component={'div'} color="initial">
                            Side Panel
                        </Typography>
                        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample'>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample'>
              <ListItemIcon>
                <PeopleAltRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample'>
              <ListItemIcon>
                <SendIcon/>
              </ListItemIcon>
              <ListItemText primary="Posts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample'>
              <ListItemIcon>
                <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton>
          </ListItem>
         
          </List>
                    </Box>
                </Drawer>
            </Box>
        </>
    )
}

export default adminDrawer;
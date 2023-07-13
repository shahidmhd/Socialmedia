import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';


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
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <Link to="/admin/home">Home</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample'>
              <ListItemIcon>
                <PeopleAltRoundedIcon/>
              </ListItemIcon>
              <Link to="/admin/dashboard">Users</Link>
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
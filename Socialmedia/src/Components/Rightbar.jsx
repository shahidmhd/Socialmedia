import { Avatar, AvatarGroup, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box
      flex={2} p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box position="fixed" width={300}>
        {/* <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFa7t0SUJEnaNsIh4xPYa_OsrxyFgTFYEL4NQH1QYS6gLBxlJ-q2BiNQxFr6oVvtc-YEI&s" />
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFa7t0SUJEnaNsIh4xPYa_OsrxyFgTFYEL4NQH1QYS6gLBxlJ-q2BiNQxFr6oVvtc-YEI&s" />
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFa7t0SUJEnaNsIh4xPYa_OsrxyFgTFYEL4NQH1QYS6gLBxlJ-q2BiNQxFr6oVvtc-YEI&s" />
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFa7t0SUJEnaNsIh4xPYa_OsrxyFgTFYEL4NQH1QYS6gLBxlJ-q2BiNQxFr6oVvtc-YEI&s" />
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFa7t0SUJEnaNsIh4xPYa_OsrxyFgTFYEL4NQH1QYS6gLBxlJ-q2BiNQxFr6oVvtc-YEI&s" />
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFa7t0SUJEnaNsIh4xPYa_OsrxyFgTFYEL4NQH1QYS6gLBxlJ-q2BiNQxFr6oVvtc-YEI&s" />
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFa7t0SUJEnaNsIh4xPYa_OsrxyFgTFYEL4NQH1QYS6gLBxlJ-q2BiNQxFr6oVvtc-YEI&s" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup> */}
        {/* <Typography variant='h6' fontWeight={100} mt={5} mb={2}>Latest Photos</Typography>
        <ImageList variant="masonry" cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhFZ5YLCMYTYoiBfRaFvg_OlLPrOp-tDKm1sWT_it&s'/>
        </ImageListItem>
        <ImageListItem>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhFZ5YLCMYTYoiBfRaFvg_OlLPrOp-tDKm1sWT_it&s'/>
        </ImageListItem>
        <ImageListItem>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhFZ5YLCMYTYoiBfRaFvg_OlLPrOp-tDKm1sWT_it&s'/>
        </ImageListItem>
        </ImageList> */}
        <Typography variant='h6' fontWeight={100} mt={5} mb={2}>ADs</Typography>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://img.freepik.com/free-vector/drink-ad-nature-watermelon-juice_52683-34242.jpg?w=2000"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    <Typography variant='h6' fontWeight={100} mt={5} mb={2}>Latest Conversation</Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/691910455/photo/smiling-businessman-with-brown-bag-walking-in-city.jpg?s=612x612&w=0&k=20&c=5NpgOqGdT-404agHoGsPdPTTQtVTppflZTiKKtUmxm0=" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar

import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TelegramIcon from '@mui/icons-material/Telegram';
import CommentIcon from '@mui/icons-material/Comment';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    height: 'auto',

    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: '10em',
    },
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      height: '10em',
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: '20em',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      height: '30em',
    },
  },
}));

const Post = ({ image, description,userName,date}) => {
  const classes = useStyles();
  return (


    <Card sx={{ margin: 5, boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.1)' }}>
      <CardHeader

        sx={{ bgcolor: '#e0dada' }}
        avatar={
          <Avatar style={{ backgroundColor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={userName}
        subheader={date}
      />

      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}

      >

        {
          image.map((image,index) => {
            return (
              <img
                key={index}
                src={image}
                className={classes.img}



              />
            )
          })

        }

      </Carousel>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
     {description}

        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <TelegramIcon />
        </IconButton>

        <IconButton aria-label="save" sx={{ marginLeft: 'auto' }}>
          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post

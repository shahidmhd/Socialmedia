import React, { useEffect, useState } from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Divider, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TelegramIcon from '@mui/icons-material/Telegram';
import CommentIcon from '@mui/icons-material/Comment';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';



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

const Post = ({ image, description, userName, date, profilepicture, userId }) => {
  const navigate = useNavigate()
  const classes = useStyles();
  const getTimeDifference = () => {
    const currentDate = new Date();
    const postedDate = new Date(date);
    const timeDifference = (currentDate - postedDate) / 1000; // Get difference in seconds

    if (timeDifference < 5) {
      return "just now";
    } else if (timeDifference < 60) {
      return `${Math.floor(timeDifference)} seconds ago`;
    } else if (timeDifference < 3600) {
      return `${Math.floor(timeDifference / 60)} minutes ago`;
    } else if (timeDifference < 86400) {
      return `${Math.floor(timeDifference / 3600)} hours ago`;
    } else if (timeDifference < 2592000) {
      return `${Math.floor(timeDifference / 86400)} days ago`;
    } else {
      // You can add more conditions to display weeks, months, etc.
      return "long time ago";
    }
  };

  const [timeAgo, setTimeAgo] = useState(getTimeDifference());

  useEffect(() => {
    // Update the timeAgo every minute to keep it updated
    const interval = setInterval(() => {
      setTimeAgo(getTimeDifference());
    }, 60000);

    return () => clearInterval(interval);
  }, []);



const handleLike=()=>{
  console.log("hiiiiiiiiiiiiiiiiiiii");
}




  return (


    <Card sx={{ margin: 5, boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.1)', borderRadius: '0.75rem' }}>
      <CardHeader
        onClick={() => navigate(`/profile/${userId}`)}
        sx={{ bgcolor: '#e0dada', cursor: 'pointer', }}
        avatar={
          <Avatar sx={{ cursor: 'pointer' }} alt="Remy Sharp" src={profilepicture} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={userName}
        subheader={timeAgo}
      />

      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}

      >

        {
          image.map((image, index) => {
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
      <CardActions disableSpacing >
        <IconButton  onClick={handleLike} aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
          <Typography>10</Typography>
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon />
          <Typography>10</Typography>
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
      <Divider />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}

        </Typography>
      </CardContent>
    </Card>
  )
}

export default Post

import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TelegramIcon from '@mui/icons-material/Telegram';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLike } from '../api/PostRequest/postReqest';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { setPost } from '../redux/Authslice';
import Reportmodal from './Modal/Reportmodal';

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

const Post = ({ image, description, userName, date, profilepicture, userId, postId, likes, buttonlicked }) => {
  const loggedInUserId = useSelector((state) => state.Authslice.user._id);
  const isLiked = likes.includes(loggedInUserId);
  const likeCount = likes.length;
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Authslice.token);
  const navigate = useNavigate();
  const classes = useStyles();
  const getTimeDifference = () => {
    const currentDate = new Date();
    const postedDate = new Date(date);
    const timeDifference = (currentDate - postedDate) / 1000; // Get difference in seconds

    if (timeDifference < 5) {
      return 'just now';
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
      return 'long time ago';
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };



  const open = Boolean(anchorEl);
  const id = open ? 'popover-menu' : undefined;
  const [timeAgo, setTimeAgo] = useState(getTimeDifference());
  const [showCommentField, setShowCommentField] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [comments, setComments] = useState([
    // Dummy comments
    {
      id: 1,
      userId: 'user1',
      userName: 'User1',
      comment: 'This is a dummy comment 1.',
    },
    {
      id: 2,
      userId: 'user2',
      userName: 'User2',
      comment: 'This is a dummy comment 2.',
    },
  ]);

  useEffect(() => {
    // Update the timeAgo every minute to keep it updated
    const interval = setInterval(() => {
      setTimeAgo(getTimeDifference());
    }, 60000);

    return () => clearInterval(interval);
  }, [date]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = () => {
    // Do something with the input value (e.g., save the comment)
    if (inputValue.trim() !== '') {
      const newComment = {
        id: comments.length + 1,
        userId: loggedInUserId,
        userName: 'Your Name', // Replace with actual user name
        comment: inputValue,
      };
      setComments((prevComments) => [...prevComments, newComment]);
      setInputValue('');
    }
  };

  const handleLike = async () => {
    const result = await getLike(token, postId, loggedInUserId);
    dispatch(setPost({ post: result.likedPost }));
    buttonlicked();
  };

  return (
    <Card sx={{ margin: 5, boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.1)', borderRadius: '0.75rem' }}>
      <CardHeader

        sx={{ bgcolor: '#e0dada', cursor: 'pointer' }}
        avatar={<Avatar sx={{ cursor: 'pointer' }} alt="Remy Sharp" src={profilepicture} onClick={() => navigate(`/profile/${userId}`)} />}
        action={
          <IconButton
            onClick={handleOpenPopover}
            aria-label="settings"
            aria-describedby={id}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={userName}
        subheader={timeAgo}
      />

      <Reportmodal id={id}
        anchorEl={anchorEl}
        open={open}
        setAnchorEl={setAnchorEl}
      />
      <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true}>
        {image.map((image, index) => {
          return <img key={index} src={image} className={classes.img} />;
        })}
      </Carousel>
      <CardActions disableSpacing>
        <IconButton onClick={handleLike} aria-label="add to favorites">
          {isLiked ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon />}
          <Typography>{likeCount}</Typography>
        </IconButton>
        <IconButton aria-label="comment" onClick={() => setShowCommentField(!showCommentField)}>
          <CommentIcon />
          <Typography>{comments.length}</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <TelegramIcon />
        </IconButton>

        <IconButton aria-label="save" sx={{ marginLeft: 'auto' }}>
          <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
        </IconButton>
      </CardActions>
      <CardContent sx={{ padding: '5', display: 'flex' }}>
        <Avatar alt="Remy Sharp" src={profilepicture} sx={{ width: 24, height: 24 }} />
        <Typography pl={2} variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      {showCommentField && (
        <CardContent>
          <TextField
            label="Add a comment"
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
            sx={{ width: '100%', borderTop: 'none' }} // Remove top border
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SendIcon
                    color="primary"
                    sx={{ cursor: 'pointer' }}
                    onClick={handleSendClick}
                  />
                </InputAdornment>
              ),
            }}
          />

          {/* Display dummy comments */}
          {comments.map((comment) => (
            <Box pt={2} key={comment.id} display="flex" alignItems="center">
              <Avatar
                alt={comment.userName}
                src={profilepicture}
                sx={{ width: 24, height: 24 }}
              />
              <Typography pl={1} variant="body2" color="text.secondary">
                <strong>{comment.userName}</strong>: {comment.comment}
              </Typography>
            </Box>
          ))}
        </CardContent>
      )}
    </Card>
  );
};

export default Post;

import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TelegramIcon from '@mui/icons-material/Telegram';
import CommentIcon from '@mui/icons-material/Comment';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
const Post = () => {
  return (
    <Card sx={{margin:5,boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.1)' }}>
        <CardHeader
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
          title="Shahid"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="15%"
          image="https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU="
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
          </IconButton>
          <IconButton aria-label="comment">
            <CommentIcon />
          </IconButton>
          <IconButton aria-label="share">
            <TelegramIcon/>
          </IconButton>
          <IconButton aria-label="save" sx={{ marginLeft: 'auto' }}>
            <Checkbox
              icon={<BookmarkBorderIcon/>}
              checkedIcon={<BookmarkIcon/>}
            />
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Post

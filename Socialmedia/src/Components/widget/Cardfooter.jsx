// import { CardActions, Checkbox, IconButton, Typography } from '@mui/material'
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import CommentIcon from '@mui/icons-material/Comment';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import React, { useEffect, useState } from 'react'
// import { getLike } from '../../api/PostRequest/postReqest';
// import { useDispatch, useSelector } from 'react-redux';
// import { setPosts } from '../../redux/Authslice';
// const Cardfooter = ({ token, userId, postId, likes,state,setstate}) => {
//     const posts = useSelector((state) => state.Authslice.posts.image.length);
//     const loggeduserId = useSelector((state) => state.Authslice.user._id);
//     console.log(posts,"likedposts");
//     const isLiked = likes.includes(userId);
//     const dispatch = useDispatch()
//     const handleLike = async () => {
//         const result = await getLike(token, postId, loggeduserId);
//         dispatch(setPosts({ posts: result.likedPost }));
//         setstate(!state)
//     }



//     return (
//         <>
//             <CardActions disableSpacing >
//                 <IconButton onClick={handleLike} aria-label="add to favorites">
//                     {
//                         isLiked ? (
//                             <FavoriteIcon sx={{ color: 'red' }} />
//                         ) : (
//                             <FavoriteBorderIcon />
//                         )
//                     }




//                     <Typography></Typography>
//                 </IconButton>
//                 <IconButton aria-label="comment">
//                     <CommentIcon />
//                     <Typography>10</Typography>
//                 </IconButton>
//                 <IconButton aria-label="share">
//                     <TelegramIcon />
//                 </IconButton>

//                 <IconButton aria-label="save" sx={{ marginLeft: 'auto' }}>
//                     <Checkbox
//                         icon={<BookmarkBorderIcon />}
//                         checkedIcon={<BookmarkIcon />}
//                     />
//                 </IconButton>
//             </CardActions>
//         </>
//     )
// }

// export default Cardfooter

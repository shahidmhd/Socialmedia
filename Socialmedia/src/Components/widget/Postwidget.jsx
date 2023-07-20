
import { ImageList, ImageListItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getUserPosts } from '../../api/PostRequest/postReqest';
import { useSelector } from 'react-redux';
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    }
];



const Postwidget = ({ userId }) => {
    const token = useSelector((state) => state.Authslice.token);
    const [userpost, setuserpost] = useState([])
    const userPosts = async () => {
        const response = await getUserPosts(userId, token)
        setuserpost(response.posts)
    }



    useEffect(() => {
        userPosts();
    }, [])














    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.only('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.only('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.only('md'));
    const isLgScreen = useMediaQuery(theme.breakpoints.only('lg'));

    const getImageHeight = () => {
        if (isXsScreen) {
            return '80px'; // Height for xs screen size
        } else if (isSmScreen) {
            return '200px'; // Height for sm screen size
        } else if (isMdScreen) {
            return '300px'; // Height for md screen size
        } else if (isLgScreen) {
            return '400px'; // Height for lg screen size
        }
        return 'auto'; // Default height for other screen sizes
    };


    return (
        <>


            <ImageList
                sx={{ alignItems: 'center', justifyContent: 'center', p: '2em' }}
                cols={3}
                variant="masonry"
                rowHeight={getImageHeight()}
            >
                {
                    userpost.map((post, index) => {
                        return (
                            <ImageListItem key={post._id}>
                            <img
                                src={post.image}
                                alt={post.description}
                                loading="lazy"
                                style={{ height: getImageHeight() }}
                            />
                        </ImageListItem>
                        )

                    })
                }
            </ImageList>
        </>
    )
}

export default Postwidget

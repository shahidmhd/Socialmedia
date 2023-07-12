import { Avatar, Box, Button, ButtonGroup, Modal, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import CloseIcon from '@mui/icons-material/Close';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector ,useDispatch} from 'react-redux';
import { createPost } from '../../api/PostRequest/postReqest';
import { setUpdatePost } from '../../redux/Authslice';


function AddPhoto({ open, setopen }) {
  const dispatch=useDispatch()
  const [textFieldValue, setTextFieldValue] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const { _id, userName } = useSelector((state) => state.Authslice.user);
  const token = useSelector((state) => state.Authslice.token);
  const handleClose = () => {
    setopen(false);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'mp4'];

    const selectedFiles = files.filter((file) => {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      return allowedExtensions.includes(fileExtension);
    });
    setSelectedImages(selectedFiles);
  };

  const handlePostClick = async() => {
    if(selectedImages.length===0){
      console.log("inside length 0");
      toast.error("please select a image")
      return
    }
  console.log(_id);
    const formdata=new FormData()
    formdata.append("userId",_id)
    formdata.append("description",textFieldValue);
    console.log(formdata,"formdata");
       if (selectedImages.length > 0) {
      selectedImages.forEach((selectedImage, index) => {
        formdata.append(`picture`, selectedImage);
        formdata.append(`image${index}`, selectedImage.name);
      });
      formdata.append("userName", userName);
    }


    try {
      const response = await createPost(token, formdata);
      console.log(response);
      if(response.status==="success"){
        dispatch(setUpdatePost({ posts: response.newPost }));
        setopen(false)
        toast.success("success")
      }
    

      console.log(response,"this is response");
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while creating the post");
    }
   
  };

  return (
    <Modal
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
     <Box width={'50%'} bgcolor="white" p={3} borderRadius={5} position="relative">
  <CloseIcon
    onClick={handleClose}
    sx={{ position: 'absolute', top: 10, right: 20, cursor: 'pointer' }}
  />
  <Typography variant="h6" color="gray" align="center">
    Create Post
  </Typography>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
    <Avatar
      alt="Remy Sharp"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcglEhroFkxWacJ7YyVh7pQ7bb6_YZVbwUaeZdC8AEFA&s"
      sx={{ width: 30, height: 30 }}
    />
    <Typography variant="span" fontWeight="500">
      Shahid vk
    </Typography>
  </Box>
  <TextField
    sx={{ width: '100%' }}
    value={textFieldValue}
    onChange={(e) => setTextFieldValue(e.target.value)}
    id="standard-multiline-static"
    multiline
    rows={2}
    placeholder="What's on your mind?"
    variant="standard"
  />
  <Stack direction="row" gap={1} mt={2} mb={3}>
    <label htmlFor="file-input">
      <ImageIcon color="secondary" sx={{ cursor: 'pointer' }} />
      <input
        id="file-input"
        type="file"
        multiple
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
    </label>
    <VideoCameraBackIcon color="success" />
  </Stack>

  {selectedImages.length > 0 && (
    <Box sx={{ marginBottom: 2, display: 'flex', gap: '10px' }}>
      {selectedImages.map((image, index) => (
        <img
          key={index}
          src={URL.createObjectURL(image)}
          alt={`Selected ${index}`}
          style={{ width: 300, height: 100 }}
        />
      ))}
    </Box>
  )}
<ToastContainer/>
  <ButtonGroup fullWidth variant="contained" sx={{ marginTop: 2 }}>
    <Button onClick={handlePostClick}>Post</Button>
  </ButtonGroup>
</Box>
    </Modal>
  );
}

export default AddPhoto;

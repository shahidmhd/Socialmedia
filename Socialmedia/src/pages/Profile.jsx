import React, { useEffect, useState } from 'react'
import Profile from '../Components/Profile/Profile'
import { getUser } from '../api/UsereRequest/UserApi';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';




function Profilepage() {

  const [currentuser,setcurrentuser]=useState(false)
  const [render,setrender]=useState(false)
  const [userdata, setuserdata] = useState(null)
  const token = useSelector((state) => state.Authslice.token);
  const currentUserId = useSelector((state) => state.Authslice.user._id);
  const { userId } = useParams();
  const getuser = async () => {
    const response = await getUser(userId, token);
    setuserdata(response)
  };

  useEffect(() => {
    getuser()
    if(currentUserId===userId){
    setcurrentuser(true)
  }
  },[render])
 

  return (
    <>
      <Profile 
      id={userId}
        userData={userdata}
        setrender={setrender}
        render={render}
        currentuser={currentuser}
      />
    </>
  )
}

export default Profilepage

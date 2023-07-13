import API from '../instance'


export const adminLogin = async (formData) => {
    try {
      const response = await API.post("/api/auth/adminLogin", formData);
      return response.data;
    } catch (error) {
    console.log(error);
    }
  };


  export const getAllUsers = async (token) => {
    try {
      const response = await API.get("/api/user/getUsers",{
        headers: { Authorization: `Bearer ${token}` }
      })
      return response.data.users;
    } catch (error) {
      // Handle error
      // handleToast(error.response.data.message, "error");
  
      console.error(error.response.data.message);
      throw error;
    }
  };


  export const userHandle=async(userId,token)=>{
    try{
      const response = await API.put(`/api/user/${userId}/userHandle`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data.isBlocked;

    }catch(error){
      console.error(error)
    }
  }
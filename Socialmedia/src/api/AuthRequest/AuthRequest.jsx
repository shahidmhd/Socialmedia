import ApI from '../instance'

export const Register = async (formData, handleToast) => {
  try {
    const response = await ApI.post("/api/auth/register", formData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error creating post:", error);
    handleToast(error.response.data.message, "error");
    throw error;
  }
};




export const LoginUser = async (formData, handleToast) => {
  try {
    const response = await ApI.post("/api/auth/login", formData);
    return response.data;
  } catch (error) {
    // Handle error
    handleToast(error.response.data.message, "error");
    console.error(error.response.data.message);
    throw error;
  }
};



export const googleLogin = async (formData) => {
  try {
    const response = await ApI.post("/api/auth/googleLogin", formData);
    return response.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

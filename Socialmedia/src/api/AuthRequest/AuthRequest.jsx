import ApI from '../instance'

export const Register = async (formData) => {
  console.log(formData,"formdata");
    try {
      const response = await ApI.post("/api/auth/register", formData);
      return response.data;
    } catch (error) {
      // Handle error
      console.error("Error creating post:", error);
      
    }
  };

  export const LoginUser = async (formData) => {
    try {
      const response = await ApI.post("/api/auth/login", formData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Handle error
      console.error("Error creating post:", error);
      
    }
  };



  export const googleLogin = async (formData) => {
    console.log(formData,"iiiiiiiiiiiiiii");
    try {
      const response = await ApI.post("/api/auth/googleLogin", formData);
      return response.data;
    } catch (error) {
     
  
      console.error(error.response.data.message);
    }
  };
  
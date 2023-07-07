import ApI from '../instance'

export const Register = async (formData) => {
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
  
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
  
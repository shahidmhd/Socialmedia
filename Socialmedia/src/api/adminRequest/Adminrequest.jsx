import API from '../instance'


export const adminLogin = async (formData) => {
    try {
      const response = await API.post("/api/auth/adminLogin", formData);
      return response.data;
    } catch (error) {
    console.log(error);
    }
  };